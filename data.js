/*
 * LISTE DE RÉFÉRENCE DE L'EXERCICE
 * Source : « Fiche d'exercice – Recherche et collecte d'informations (S & O) »
 *
 * Pour modifier l'exercice, éditez uniquement ce fichier :
 *  - "label"    : intitulé affiché quand l'élément est trouvé (texte d'origine)
 *  - "keywords" : mots ou expressions que l'étudiant peut taper pour le trouver.
 *                 Majuscules, accents, pluriels et petites fautes sont tolérés.
 *                 Un mot-clé est reconnu s'il est contenu dans la saisie
 *                 (ex. « allergie » reconnaît « allergies du patient »).
 */
window.EXERCICE = {
  titre: "Recherche et collecte d'informations (S & O)",
  sousTitre: "Grille d'analyse préalable à l'Intervention Pharmaceutique (Méthode SOAP)",
  consigne: "Retrouvez toutes les informations Subjectives (S) et Objectives (O) nécessaires pour étayer votre analyse pharmaceutique (A) et formaliser votre proposition d'intervention (P).",
  sections: [
    {
      titre: "S – Données Subjectives",
      description: "Informations rapportées par le patient ou son aidant",
      categories: [
        {
          titre: "1. Symptômes & Motif de consultation",
          elements: [
            { label: "Motif principal de la venue / demande spontanée du patient",
              keywords: ["motif", "motif de consultation", "motif de venue", "raison de la venue", "demande du patient", "demande spontanee", "plainte principale"] },
            { label: "Description des symptômes ressentis par le patient (nature, localisation, intensité)",
              keywords: ["symptome", "symptomes ressentis", "description des symptomes", "nature des symptomes", "localisation", "intensite des symptomes", "signes ressentis"] },
            { label: "Chronologie et mode d'apparition (date de début, fréquence, facteurs déclenchants/soulageants)",
              keywords: ["chronologie", "mode d apparition", "date de debut", "debut des symptomes", "facteur declenchant", "facteurs soulageants", "anciennete des symptomes", "frequence des symptomes"] },
            { label: "Effets indésirables ou intolérances perçus/suspectés par le patient",
              keywords: ["effet indesirable", "effets secondaires", "effet secondaire", "intolerance percue", "ei", "iatrogenie ressentie"] },
            { label: "Bénéfices perçus des traitements déjà en cours",
              keywords: ["benefice", "benefices percus", "efficacite percue", "efficacite du traitement", "ressenti du traitement", "amelioration ressentie"] }
          ]
        },
        {
          titre: "2. Histoire de la maladie & Ressenti",
          elements: [
            { label: "Histoire de la maladie actuelle racontée par le patient",
              keywords: ["histoire de la maladie", "histoire de la maladie actuelle", "hma", "recit du patient", "evolution de la maladie", "anamnese"] },
            { label: "Représentations, croyances et niveau d'inquiétude face à la maladie et aux traitements",
              keywords: ["representation", "croyance", "inquietude", "peur", "crainte", "ressenti", "vecu de la maladie", "perception de la maladie", "anxiete"] }
          ]
        },
        {
          titre: "3. Mode de vie & Comportements de santé",
          elements: [
            { label: "Habitudes alimentaires et niveau d'hydratation au quotidien",
              keywords: ["alimentation", "habitudes alimentaires", "regime alimentaire", "hydratation", "nutrition", "diete"] },
            { label: "Consommation de tabac, d'alcool ou d'autres substances",
              keywords: ["tabac", "alcool", "tabagisme", "cigarette", "fumeur", "drogue", "cannabis", "substances", "addiction", "toxiques"] },
            { label: "Niveau d'activité physique, de sédentarité ou de mobilité",
              keywords: ["activite physique", "sport", "sedentarite", "mobilite", "exercice physique"] },
            { label: "Recours à l'automédication non prescrite",
              keywords: ["automedication", "medicaments sans ordonnance", "medicament non prescrit", "otc", "conseil officinal"] },
            { label: "Consommation de médecines complémentaires (phytothérapie, compléments)",
              keywords: ["medecines complementaires", "medecine alternative", "phytotherapie", "phyto", "plantes", "complements alimentaires", "complement", "homeopathie", "aromatherapie", "huiles essentielles"] }
          ]
        },
        {
          titre: "4. Adhésion & Organisation au quotidien",
          elements: [
            { label: "Adhésion déclarée au traitement (fréquence des oublis, difficultés d'administration, arrêt)",
              keywords: ["adhesion", "observance", "oubli", "oublis de prise", "arret du traitement", "compliance", "inobservance"] },
            { label: "Degré d'autonomie pour la prise médicamenteuse et présence d'un aidant naturel à domicile",
              keywords: ["autonomie", "aidant", "aidant naturel", "entourage", "aide a domicile", "isolement", "vit seul", "dependance"] },
            { label: "Difficultés matérielles d'administration (dysphagie, manipulation des dispositifs, ouverture)",
              keywords: ["difficultes d administration", "difficulte materielle", "dysphagie", "deglutition", "avaler", "manipulation des dispositifs", "dispositif d inhalation", "ouverture des boites", "galenique adaptee"] }
          ]
        }
      ]
    },
    {
      titre: "O – Données Objectives",
      description: "Données factuelles, mesurables et documentées",
      categories: [
        {
          titre: "1. Données démographiques & Anthropométriques",
          elements: [
            { label: "Âge (ou date de naissance)",
              keywords: ["age", "date de naissance"] },
            { label: "Sexe",
              keywords: ["sexe", "genre", "homme ou femme"] },
            { label: "Poids, taille, Indice de Masse Corporelle (IMC) ou Surface Corporelle",
              keywords: ["poids", "taille", "imc", "indice de masse corporelle", "surface corporelle", "corpulence", "anthropometrie"] }
          ]
        },
        {
          titre: "2. Constantes & Paramètres cliniques mesurés",
          elements: [
            { label: "Pression Artérielle (PA)",
              keywords: ["pression arterielle", "pa", "tension arterielle", "tension", "ta"] },
            { label: "Fréquence Cardiaque (FC)",
              keywords: ["frequence cardiaque", "fc", "pouls", "rythme cardiaque"] },
            { label: "Température corporelle",
              keywords: ["temperature", "fievre", "temperature corporelle"] },
            { label: "Saturation en oxygène (SaO2) et fréquence respiratoire",
              keywords: ["saturation", "sao2", "spo2", "saturation en oxygene", "frequence respiratoire", "fr", "oxygene"] },
            { label: "Évaluation chiffrée de la douleur (score EVA ou EN)",
              keywords: ["douleur", "eva", "echelle de la douleur", "score de douleur", "evaluation de la douleur", "echelle numerique"] }
          ]
        },
        {
          titre: "3. Données biologiques & Examens paracliniques",
          elements: [
            { label: "Fonction rénale : Créatininémie et Débit de Filtration Glomérulaire estimé (DFG / CKD-EPI)",
              keywords: ["fonction renale", "creatinine", "creatininemie", "dfg", "debit de filtration glomerulaire", "ckd epi", "clairance", "cockcroft", "mdrd", "rein"] },
            { label: "Bilan hépatique : Transaminases (ALT/AST), Bilirubine, Phosphatases Alkalines",
              keywords: ["bilan hepatique", "fonction hepatique", "transaminase", "alat", "asat", "alt", "ast", "bilirubine", "phosphatases alcalines", "pal", "foie", "ggt", "gamma gt"] },
            { label: "Numération Formule Sanguine (NFS) : Hémoglobine, Plaquettes, Leucocytes",
              keywords: ["nfs", "numeration formule sanguine", "hemogramme", "hemoglobine", "plaquette", "leucocyte", "globules blancs", "globules rouges"] },
            { label: "Ionogramme sanguin : Kaliémie (K+), Natrémie (Na+), Calcémie",
              keywords: ["ionogramme", "kaliemie", "potassium", "natremie", "sodium", "calcemie", "calcium", "electrolytes"] },
            { label: "Équilibre glycémique : Glycémie à jeun, HbA1c",
              keywords: ["glycemie", "hba1c", "hemoglobine glyquee", "equilibre glycemique", "glucose", "sucre"] },
            { label: "Bilan d'hémostase : TP, INR, TCA",
              keywords: ["hemostase", "bilan d hemostase", "coagulation", "inr", "tp", "taux de prothrombine", "tca"] },
            { label: "Examens microbiologiques : Coproculture, ECBU, prélèvements de gorge/plaie",
              keywords: ["microbiologie", "examens microbiologiques", "coproculture", "ecbu", "prelevement", "antibiogramme", "bacteriologie", "hemoculture"] },
            { label: "Imagerie médicale : Radiographies, Échographies, Scanners",
              keywords: ["imagerie", "imagerie medicale", "radiographie", "radio", "echographie", "scanner", "irm"] }
          ]
        },
        {
          titre: "4. Terrain pathologique & Antécédents documentés",
          elements: [
            { label: "Pathologies chroniques diagnostiquées et comorbidités actives (HTA, Diabète, IRC, etc.)",
              keywords: ["pathologie chronique", "pathologies", "comorbidite", "antecedents medicaux", "terrain", "maladies chroniques", "hta", "diabete", "irc"] },
            { label: "Allergies médicamenteuses ou intolérances documentées dans le dossier",
              keywords: ["allergie", "allergies medicamenteuses", "intolerance documentee", "intolerances"] },
            { label: "Historique de chirurgie ou d'hospitalisations récentes",
              keywords: ["chirurgie", "hospitalisation", "antecedents chirurgicaux", "operation", "intervention chirurgicale"] }
          ]
        },
        {
          titre: "5. Ordonnances & Historique thérapeutique",
          elements: [
            { label: "Prescription médicale du jour (DCI/Spécialités, dosages, posologies, voies, durées)",
              keywords: ["prescription", "ordonnance", "ordonnance du jour", "prescription du jour", "posologie", "dci", "dosage", "voie d administration", "duree de traitement", "traitement prescrit"] },
            { label: "Indication thérapeutique validée ou mentionnée sur l'ordonnance",
              keywords: ["indication", "indication therapeutique"] },
            { label: "Historique des dispensations au Dossier Pharmaceutique (DP) ou logiciel d'officine",
              keywords: ["dossier pharmaceutique", "dp", "historique des dispensations", "historique de delivrance", "historique medicamenteux", "logiciel d officine", "traitements anterieurs", "historique patient"] },
            { label: "Statut et historique vaccinal à jour (carnet de santé / espace santé)",
              keywords: ["vaccin", "vaccination", "statut vaccinal", "historique vaccinal", "carnet de sante", "carnet de vaccination", "mon espace sante"] },
            { label: "Identité, spécialité et statut du prescripteur (médecin traitant, spécialiste, dentiste)",
              keywords: ["prescripteur", "identite du prescripteur", "medecin traitant", "specialite du prescripteur", "specialiste", "dentiste"] }
          ]
        }
      ]
    }
  ]
};
