(function () {
  "use strict";
  var DATA = window.EXERCICE;
  var STORAGE_KEY = "soap-exercice-v1";
  var STOP = ["le","la","les","l","de","du","des","d","un","une","et","ou","a","au","aux","en","sur","par","pour","avec","son","sa","ses","leur","leurs","il","elle","y","est","que","qui","ce","se"];

  // ---------- Normalisation & comparaison tolérante ----------
  function normalize(str) {
    return str.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/œ/g, "oe").replace(/æ/g, "ae")
      .replace(/[^a-z0-9+]+/g, " ").trim();
  }
  function stem(w) {
    if (w.length > 3 && /(s|x)$/.test(w)) w = w.slice(0, -1);
    return w;
  }
  function tokens(str) {
    return normalize(str).split(" ").filter(function (w) { return w && STOP.indexOf(w) === -1; }).map(stem);
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 99;
    var prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  }
  function tokenMatch(input, kw) {
    if (input === kw) return true;
    if (kw.length <= 4) return false;            // sigles et mots courts : exact uniquement
    var tol = kw.length >= 9 ? 2 : 1;
    return lev(input, kw) <= tol;
  }
  // Score = nombre de mots du mot-clé tous retrouvés dans la saisie (0 sinon)
  function keywordScore(inputTokens, kwTokens) {
    if (!kwTokens.length) return 0;
    for (var i = 0; i < kwTokens.length; i++) {
      var ok = inputTokens.some(function (t) { return tokenMatch(t, kwTokens[i]); });
      if (!ok) return 0;
    }
    return kwTokens.length;
  }

  // ---------- Préparation des données ----------
  var items = [];
  DATA.sections.forEach(function (sec, si) {
    sec.categories.forEach(function (cat, ci) {
      cat.elements.forEach(function (el, ei) {
        var kws = (el.keywords || []).concat([el.label]).map(tokens);
        items.push({ id: si + "-" + ci + "-" + ei, label: el.label, kws: kws, si: si, ci: ci });
      });
    });
  });

  function findMatches(query) {
    var qt = tokens(query);
    if (!qt.length) return [];
    var best = 0, res = [];
    items.forEach(function (it) {
      var s = 0;
      it.kws.forEach(function (k) { s = Math.max(s, keywordScore(qt, k)); });
      if (s > best) { best = s; res = [it]; }
      else if (s > 0 && s === best) res.push(it);
    });
    return res;
  }

  // ---------- État ----------
  var found = {};
  try { found = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { found = {}; }
  function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(found)); } catch (e) {} }

  // ---------- Rendu ----------
  var $ = function (id) { return document.getElementById(id); };
  $("titre").textContent = DATA.titre;
  $("sousTitre").textContent = DATA.sousTitre;
  $("consigne").textContent = DATA.consigne;
  $("total").textContent = items.length;

  var board = $("board");
  function render(newIds) {
    newIds = newIds || [];
    board.innerHTML = "";
    DATA.sections.forEach(function (sec, si) {
      var secItems = items.filter(function (i) { return i.si === si; });
      var el = document.createElement("section");
      el.className = "section " + (si === 0 ? "s" : "o");
      var head = document.createElement("div");
      head.className = "section-head";
      head.innerHTML = "<div><h2></h2><p></p></div><span class='count'></span>";
      head.querySelector("h2").textContent = sec.titre;
      head.querySelector("p").textContent = sec.description || "";
      head.querySelector(".count").textContent = secItems.filter(function (i) { return found[i.id]; }).length + " / " + secItems.length;
      el.appendChild(head);
      sec.categories.forEach(function (cat, ci) {
        var catItems = secItems.filter(function (i) { return i.ci === ci; });
        var c = document.createElement("div");
        c.className = "cat";
        c.innerHTML = "<div class='cat-head'><span></span><span class='count'></span></div><ul class='items'></ul>";
        c.querySelector(".cat-head span").textContent = cat.titre;
        c.querySelector(".cat-head .count").textContent = catItems.filter(function (i) { return found[i.id]; }).length + " / " + catItems.length;
        var ul = c.querySelector("ul");
        catItems.forEach(function (it) {
          var li = document.createElement("li");
          if (found[it.id]) {
            li.className = "item found" + (newIds.indexOf(it.id) > -1 ? " new" : "");
            li.innerHTML = "<span class='tick'>✓</span><span></span>";
            li.lastChild.textContent = it.label;
          } else {
            li.className = "item hidden";
            li.setAttribute("aria-label", "Élément non trouvé");
          }
          ul.appendChild(li);
        });
        el.appendChild(c);
      });
      board.appendChild(el);
    });
    var n = items.filter(function (i) { return found[i.id]; }).length;
    var pct = Math.round(n / items.length * 100);
    $("found").textContent = n;
    $("pct").textContent = pct + " %";
    $("fill").style.width = pct + "%";
    $("bravo").hidden = n !== items.length;
  }

  // ---------- Interaction ----------
  var fb = $("feedback"), input = $("q");
  function say(msg, cls) { fb.textContent = msg; fb.className = "feedback " + (cls || ""); }

  $("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var q = input.value.trim();
    if (!q) return;
    var m = findMatches(q);
    var fresh = m.filter(function (i) { return !found[i.id]; });
    if (!m.length) {
      say("« " + q + " » n'a pas été reconnu. Essayez une autre formulation.", "no");
      input.classList.remove("shake"); void input.offsetWidth; input.classList.add("shake");
      input.select();
      return;
    }
    if (!fresh.length) {
      say("Déjà trouvé : « " + m[0].label + " »", "dup");
      input.value = "";
      return;
    }
    fresh.forEach(function (i) { found[i.id] = true; });
    save();
    render(fresh.map(function (i) { return i.id; }));
    say(fresh.length > 1 ? "Bravo, " + fresh.length + " éléments trouvés !" : "Bravo, élément trouvé !", "ok");
    input.value = "";
    var first = board.querySelector(".item.new");
    if (first && first.getBoundingClientRect().top > window.innerHeight) first.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $("reset").addEventListener("click", function () {
    found = {};
    save();
    render();
    say("Exercice réinitialisé. À vous de jouer !", "");
    input.value = "";
    input.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  render();
  // Accès pour tests
  window.__soap = { findMatches: findMatches, items: items };
})();
