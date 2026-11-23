# gardeux – Exercice SOAP

Application web pédagogique pour étudiants en pharmacie : l'étudiant retrouve, via une barre de recherche, les informations Subjectives (S) et Objectives (O) à recueillir avant une intervention pharmaceutique (méthode SOAP). Chaque bonne réponse révèle l'élément dans sa catégorie, avec une barre de progression.

Site statique (HTML/CSS/JS, sans outil de build), déployé sur Netlify à chaque push sur `main`.

## Modifier la liste

Tout est dans **`data.js`** :

- `label` : l'intitulé affiché quand l'élément est trouvé ;
- `keywords` : les mots ou expressions acceptés pour le retrouver (majuscules, accents, pluriels et petites fautes sont tolérés ; un mot-clé est reconnu s'il est contenu dans la saisie).

Ajouter, supprimer ou renommer un élément ou une catégorie se fait uniquement dans ce fichier.

## Fichiers

- `index.html` : structure de la page
- `style.css` : mise en forme
- `app.js` : recherche, révélation, progression, réinitialisation
- `data.js` : la liste de référence
