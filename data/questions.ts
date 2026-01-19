export interface QuestionSet {
  id: number;
  verification: {
    type: "VI" | "VE";
    question: string;
    answer: string;
    tip?: string;
  };
  securite: {
    question: string;
    answer: string;
    keywords: string[];
    tip?: string;
  };
  secours: {
    question: string;
    answer: string;
    keywords: string[];
    tip?: string;
  };
}

export const questionSets: QuestionSet[] = [
  {
    id: 1,
    verification: {
      type: "VI",
      question: "Montrez la commande de réglage de hauteur des feux.",
      answer: "Dispositif situé en général à gauche du volant.",
      tip: "Cherche une molette avec un symbole de phare et des traits. Souvent près du bouton des feux.",
    },
    securite: {
      question: "Pourquoi doit-on régler la hauteur des feux ?",
      answer: "Pour ne pas éblouir les autres usagers.",
      keywords: ["éblouir", "usagers"],
      tip: "Pense à toi quand tu es ébloui la nuit : c'est dangereux ! Charge = feux vers le bas.",
    },
    secours: {
      question: "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
      answer: "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident.",
      keywords: ["délimiter", "visible", "sur-accident"],
      tip: "Règle PAS : Protéger, Alerter, Secourir. Protection = éviter le sur-accident (2ème accident).",
    },
  },
  {
    id: 2,
    verification: {
      type: "VE",
      question: "Montrez où s'effectue le remplissage du produit lave-glace.",
      answer: "Le candidat ouvre le capot et montre le bocal.",
      tip: "Bouchon bleu ou avec symbole de pare-brise/eau. Souvent sur le côté du compartiment moteur.",
    },
    securite: {
      question: "Pourquoi est-il préférable d'utiliser un liquide spécial en hiver ?",
      answer: "Pour éviter le gel du liquide.",
      keywords: ["gel", "hiver"],
      tip: "Liquide antigel = -20°C ou moins. L'eau pure gèle à 0°C et peut casser le bocal !",
    },
    secours: {
      question: "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Se mettre en sécurité. S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. Respecter les consignes des autorités.",
      keywords: ["sécurité", "médias", "consignes", "autorités"],
      tip: "Mnémo SIR : Sécurité, Information (médias), Respect des consignes.",
    },
  },
  {
    id: 3,
    verification: {
      type: "VI",
      question: "Mettez le rétroviseur intérieur en position \"nuit\".",
      answer: "Si le véhicule possède un système automatique de mise en position \"nuit\" du rétroviseur intérieur, le candidat l'indique.",
      tip: "Petite languette sous le rétro à basculer. Les rétros modernes ont souvent un mode auto (bouton ou capteur).",
    },
    securite: {
      question: "Quel est l'intérêt de la position nuit ?",
      answer: "Ne pas être ébloui par les feux du véhicule suiveur.",
      keywords: ["ébloui", "véhicule suiveur"],
      tip: "La position nuit assombrit le reflet. Tu vois encore derrière mais sans être aveuglé.",
    },
    secours: {
      question: "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
      answer: "Il se compose de deux codes distincts : le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. Le signal de fin d'alerte, signal continu.",
      keywords: ["deux codes", "SNA", "trois cycles", "continu"],
      tip: "Début = son qui monte/descend 3 fois (1min41). Fin = son continu 30 sec. Teste le 1er mercredi du mois à midi !",
    },
  },
  {
    id: 4,
    verification: {
      type: "VE",
      question: "Contrôlez l'état du flanc sur l'un des pneumatiques.",
      answer: "En bon état (toute anomalie doit être signalée).",
      tip: "Regarde le côté du pneu : pas de coupure, hernie (bosse), craquelure. Le flanc = partie visible entre la jante et la bande de roulement.",
    },
    securite: {
      question: "Citez un endroit où l'on peut trouver les pressions préconisées pour les pneumatiques ?",
      answer: "Elles sont indiquées : soit sur une plaque sur une portière, soit dans la notice d'utilisation du véhicule, soit au niveau de la trappe à carburant.",
      keywords: ["portière", "notice", "trappe à carburant"],
      tip: "Mnémo PNT : Portière (côté conducteur), Notice, Trappe carburant. Souvent un autocollant !",
    },
    secours: {
      question: "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
      answer: "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique.",
      keywords: ["numéro autoroute", "sens", "point kilométrique"],
      tip: "Exemple : A6, sens Paris-Lyon, PK 234. Les bornes vertes indiquent le PK tous les km.",
    },
  },
  {
    id: 5,
    verification: {
      type: "VI",
      question: "Faites fonctionner les essuie-glaces avants du véhicule sur la position la plus rapide.",
      answer: "Le candidat actionne les essuie-glaces.",
      tip: "Commodo droit généralement. Position la plus haute = vitesse max. Vérifie que ça balaye bien.",
    },
    securite: {
      question: "Comment détecter leur usure en circulation ?",
      answer: "En cas de pluie, lorsqu'ils laissent des traces sur le pare brise.",
      keywords: ["pluie", "traces", "pare-brise"],
      tip: "Traces = caoutchouc durci ou abîmé. Change les balais tous les ans idéalement (fin d'été).",
    },
    secours: {
      question: "Comment vérifier la respiration d'une victime ?",
      answer: "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
      keywords: ["ventre", "poitrine", "soulèvent", "air", "expiration"],
      tip: "Technique VES : Voir (thorax bouge), Écouter (souffle), Sentir (air sur ta joue). Max 10 secondes !",
    },
  },
  {
    id: 6,
    verification: {
      type: "VE",
      question: "Vérifiez l'état et la propreté des plaques d'immatriculation.",
      answer: "Vérification des plaques à l'avant et à l'arrière, propres et en bon état.",
      tip: "2 plaques à vérifier ! Doivent être lisibles (pas de boue, pas cassées). Amende si illisibles.",
    },
    securite: {
      question: "Quelles sont les précautions à prendre en cas d'installation d'un porte vélo ?",
      answer: "La plaque d'immatriculation et les feux doivent être visibles.",
      keywords: ["plaque", "feux", "visibles"],
      tip: "Si masqués : plaque répétitrice obligatoire + feux/catadioptres additionnels. Sinon amende !",
    },
    secours: {
      question: "Qu'est-ce qu'une perte de connaissance ?",
      answer: "C'est lorsque la victime ne répond pas et ne réagit pas mais respire.",
      keywords: ["ne répond pas", "ne réagit pas", "respire"],
      tip: "Inconscient ≠ mort. PLS obligatoire si respire ! Différent de l'arrêt cardiaque (ne respire pas).",
    },
  },
  {
    id: 7,
    verification: {
      type: "VI",
      question: "Vérifiez la présence du gilet de haute visibilité.",
      answer: "Le candidat doit indiquer où il se trouve sans obligation de le sortir.",
      tip: "Doit être accessible SANS SORTIR du véhicule (boîte à gants, vide-poche portière). Pas dans le coffre !",
    },
    securite: {
      question: "En cas de panne ou d'accident, quel autre accessoire de sécurité est obligatoire ?",
      answer: "Le triangle de pré-signalisation.",
      keywords: ["triangle", "pré-signalisation"],
      tip: "Gilet + Triangle = duo obligatoire. Gilet sur soi AVANT de sortir, triangle à 30m derrière.",
    },
    secours: {
      question: "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
      answer: "Dans un endroit suffisamment éloigné du danger et de ses conséquences.",
      keywords: ["éloigné", "danger"],
      tip: "Dégagement = EXCEPTIONNEL (feu, explosion imminente). Tirer par les chevilles en ligne droite.",
    },
  },
  {
    id: 8,
    verification: {
      type: "VE",
      question: "Montrez où s'effectue le contrôle du niveau du liquide de frein.",
      answer: "Le candidat montre que le niveau est entre le mini et le maxi.",
      tip: "Bocal transparent près du maître-cylindre (côté conducteur). Bouchon souvent jaune. Niveau entre MIN et MAX.",
    },
    securite: {
      question: "Quelle est la conséquence d'un niveau insuffisant du liquide de frein ?",
      answer: "Une perte d'efficacité du freinage.",
      keywords: ["perte", "efficacité", "freinage"],
      tip: "Niveau bas = fuite possible ou plaquettes usées. DANGER : la pédale peut s'enfoncer sans freiner !",
    },
    secours: {
      question: "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
      answer: "Il faut porter le gilet de haute visibilité avant de sortir du véhicule.",
      keywords: ["gilet", "haute visibilité"],
      tip: "AVANT de sortir = tu l'enfiles dans la voiture. La nuit, tu es invisible sans gilet !",
    },
  },
  {
    id: 9,
    verification: {
      type: "VI",
      question: "Vérifiez la présence du certificat d'immatriculation du véhicule (ou carte grise).",
      answer: "La photocopie est acceptée.",
      tip: "Original ou copie acceptée. Garde l'original chez toi (en cas de vol). La copie suffit pour les contrôles.",
    },
    securite: {
      question: "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l'ordre ?",
      answer: "L'attestation d'assurance et le permis de conduire.",
      keywords: ["assurance", "permis de conduire"],
      tip: "Trio APC : Assurance (vignette verte), Permis, Carte grise. Sans ça = amende + immobilisation possible.",
    },
    secours: {
      question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
      answer: "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
      keywords: ["moyens adaptés", "délai court"],
      tip: "Chaque minute compte ! Arrêt cardiaque = 3 min sans oxygène = lésions cérébrales.",
    },
  },
  {
    id: 10,
    verification: {
      type: "VE",
      question: "Contrôlez l'état de tous les balais d'essuie-glace du véhicule.",
      answer: "En bon état (toute anomalie doit être signalée).",
      tip: "Avant + arrière ! Caoutchouc pas fissuré, pas décollé. Soulève le balai pour vérifier toute la longueur.",
    },
    securite: {
      question: "Quel est le risque de circuler avec des balais d'essuie-glace défectueux ?",
      answer: "Une mauvaise visibilité en cas d'intempéries.",
      keywords: ["mauvaise visibilité", "intempéries"],
      tip: "Pluie + mauvais balais = quasi aveugle ! Change-les dès qu'ils laissent des traces.",
    },
    secours: {
      question: "Quels sont les numéros d'urgence à composer ?",
      answer: "Le 18 (sapeurs-pompiers), le 15 (SAMU), le 112 (urgence européen).",
      keywords: ["18", "15", "112", "pompiers", "SAMU"],
      tip: "Mnémo : 15 = SAMU (quinze = médecin). 18 = Pompiers (dix-huit = feu). 112 = partout en Europe, même sans réseau !",
    },
  },
  {
    id: 11,
    verification: {
      type: "VI",
      question: "Montrez l'indicateur de niveau de carburant.",
      answer: "Le candidat montre l'indicateur sur le tableau de bord.",
      tip: "Jauge avec symbole pompe à essence. La flèche à côté indique de quel côté est la trappe !",
    },
    securite: {
      question: "Quelles sont les précautions à prendre lors du remplissage du réservoir ?",
      answer: "Arrêter le moteur, ne pas fumer, ne pas téléphoner.",
      keywords: ["arrêter moteur", "pas fumer", "pas téléphoner"],
      tip: "Vapeurs d'essence = explosives ! Pas d'étincelle (téléphone, cigarette, électricité statique).",
    },
    secours: {
      question: "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
      answer: "La placer en position stable sur le côté ou position latérale de sécurité. Alerter les secours. Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
      keywords: ["PLS", "position latérale", "alerter", "surveiller"],
      tip: "PLS = évite l'étouffement (langue, vomi). Main sous la joue, jambe pliée en équerre. Surveille qu'elle respire toujours !",
    },
  },
  {
    id: 12,
    verification: {
      type: "VE",
      question: "Montrez où s'effectue le remplissage du liquide de refroidissement.",
      answer: "Le candidat ouvre le capot et montre le bocal.",
      tip: "Bocal translucide avec liquide coloré (vert, rose, orange). Bouchon avec symbole thermomètre ou vapeur. JAMAIS ouvrir à chaud !",
    },
    securite: {
      question: "Quel est le danger si l'on complète le niveau du liquide lorsque le moteur est chaud ?",
      answer: "Un risque de brûlure.",
      keywords: ["brûlure", "moteur chaud"],
      tip: "Liquide à 90°C sous pression ! Si tu ouvres = geyser brûlant. Attends que le moteur soit froid.",
    },
    secours: {
      question: "Comment arrêter une hémorragie ?",
      answer: "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
      keywords: ["appuyer", "tissu propre", "plaie"],
      tip: "Compression directe = pression forte et continue. Allonge la victime pour éviter le malaise. Ne relâche JAMAIS la pression !",
    },
  },
  {
    id: 13,
    verification: {
      type: "VI",
      question: "Actionnez le dégivrage de la lunette arrière et montrez le voyant ou le repère correspondant.",
      answer: "Le candidat actionne le dégivrage et montre le voyant.",
      tip: "Bouton avec rectangle + 3 flèches ondulées. Voyant s'allume (souvent orange). Les filaments chauffants sur la vitre font fondre le givre.",
    },
    securite: {
      question: "Quelle peut être la conséquence d'une panne de dégivrage de la lunette arrière ?",
      answer: "Une insuffisance ou une absence de visibilité vers l'arrière.",
      keywords: ["absence visibilité", "arrière"],
      tip: "Sans visibilité arrière = manœuvres dangereuses (recul, changement de voie). Les rétros ne suffisent pas !",
    },
    secours: {
      question: "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
      answer: "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
      keywords: ["30 mètres", "virage", "sommet de côte"],
      tip: "30m = environ 30 pas. AVANT le virage ou la côte pour que les autres te voient à temps !",
    },
  },
  {
    id: 14,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement de tous les clignotants côté trottoir.",
      answer: "Vérification des clignotants propres, en bon état et fonctionnent.",
      tip: "Avant + arrière côté passager ! Allume les warnings pour vérifier les 4 d'un coup.",
    },
    securite: {
      question: "Quelle est la signification d'un clignotement plus rapide ?",
      answer: "Non fonctionnement de l'une des ampoules.",
      keywords: ["ampoule", "grillée", "rapide"],
      tip: "Tic-tic-tic rapide = ampoule grillée de ce côté. Le relais détecte moins de charge électrique.",
    },
    secours: {
      question: "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
      answer: "La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime.",
      keywords: ["visible", "facile", "sûr de pouvoir"],
      tip: "JAMAIS si tu risques ta vie ! Dégagement = dernier recours. Tire par les chevilles, en ligne droite, sans tourner.",
    },
  },
  {
    id: 15,
    verification: {
      type: "VI",
      question: "Montrez le voyant d'alerte signalant une pression insuffisante d'huile dans le moteur.",
      answer: "Le candidat montre le voyant huile (burette).",
      tip: "Symbole burette d'huile (comme une lampe d'Aladin). Rouge = STOP immédiat ! Le moteur tourne sans lubrification.",
    },
    securite: {
      question: "Quelles sont les conditions à respecter pour contrôler le niveau d'huile ?",
      answer: "Moteur froid et sur un terrain plat.",
      keywords: ["moteur froid", "terrain plat"],
      tip: "Froid = huile redescendue dans le carter. Plat = niveau correct. Attends 5-10 min après avoir coupé le moteur.",
    },
    secours: {
      question: "Quelles sont les trois informations à transmettre aux services de secours ?",
      answer: "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
      keywords: ["numéro", "nature", "localisation"],
      tip: "Mnémo TNL : Téléphone (ton numéro), Nature (accident, malaise...), Localisation (adresse précise). Ne raccroche pas en premier !",
    },
  },
  {
    id: 16,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement du ou des feux de brouillard arrière.",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "Feu orange très puissant à l'arrière. Symbole : phare avec ligne ondulée barrée. Un seul suffit (souvent côté conducteur).",
    },
    securite: {
      question: "Dans quels cas les utilise-t-on ?",
      answer: "Par temps de brouillard et neige.",
      keywords: ["brouillard", "neige"],
      tip: "Visibilité < 50m uniquement ! Sinon tu éblouis celui qui te suit. Pense à l'éteindre quand ça se dégage.",
    },
    secours: {
      question: "Par quels moyens doit être réalisée l'alerte des secours ?",
      answer: "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'une borne d'appel d'urgence.",
      keywords: ["téléphone", "borne d'appel"],
      tip: "Le 112 fonctionne même sans crédit, sans carte SIM, et avec n'importe quel réseau disponible !",
    },
  },
  {
    id: 17,
    verification: {
      type: "VI",
      question: "Vérifiez la présence de l'éthylotest.",
      answer: "Le candidat montre l'éthylotest.",
      tip: "Chimique (ballon) ou électronique. Plus obligatoire depuis 2020 mais recommandé. Vérifie la date de péremption !",
    },
    securite: {
      question: "A partir de quel taux d'alcoolémie, en période de permis probatoire, est-on en infraction ?",
      answer: "0,2 g/l, c'est à dire 0 verre, car dès le 1er verre ce seuil peut être dépassé.",
      keywords: ["0,2 g/l", "0 verre", "probatoire"],
      tip: "Jeune permis = 0 alcool ! 0,2 g/l = marge d'erreur du test. 1 verre = déjà 0,2-0,3 g/l. Risque = 6 points + amende.",
    },
    secours: {
      question: "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
      answer: "ALERTER: alerter immédiatement les secours. MASSER: pratiquer une réanimation cardio-pulmonaire. DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.",
      keywords: ["alerter", "masser", "défibriller", "DAE"],
      tip: "Mnémo AMD : Alerter (15 ou 112), Masser (100-120/min au milieu du thorax), Défibriller (le DAE parle et te guide).",
    },
  },
  {
    id: 18,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de détresse à l'avant et à l'arrière.",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "Bouton triangle rouge. Active les 4 clignotants en même temps. Vérifie que les 4 clignotent bien (avant + arrière).",
    },
    securite: {
      question: "Dans quels cas doit-on les utiliser ?",
      answer: "En cas de panne, d'accident ou de ralentissement important.",
      keywords: ["panne", "accident", "ralentissement"],
      tip: "Aussi appelés \"warnings\". Sur autoroute : allume-les dès que tu freines fort pour prévenir ceux derrière !",
    },
    secours: {
      question: "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
      answer: "Si la victime ne répond pas, ne réagit pas et respire.",
      keywords: ["ne répond pas", "respire", "PLS"],
      tip: "PLS = inconscient qui RESPIRE. Si ne respire pas = massage cardiaque ! Vérifie toujours la respiration d'abord.",
    },
  },
  {
    id: 19,
    verification: {
      type: "VI",
      question: "Montrez la commande de réglage du volant.",
      answer: "Le candidat montre l'emplacement. Il ne lui est pas demandé de changer son réglage.",
      tip: "Levier ou manette sous la colonne de direction. Déverrouille, ajuste hauteur et profondeur, reverrouille.",
    },
    securite: {
      question: "Pourquoi est-il important de bien régler son volant ? Citez deux exemples.",
      answer: "Le confort de conduite. L'accessibilité aux commandes. La visibilité du tableau de bord. L'efficacité des airbags.",
      keywords: ["confort", "commandes", "visibilité", "airbags"],
      tip: "Airbag = 25 cm minimum entre le volant et ton thorax. Si trop près, l'airbag peut blesser au lieu de protéger !",
    },
    secours: {
      question: "Dans quelle situation peut-on déplacer une victime ?",
      answer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
      keywords: ["danger réel", "immédiat", "exceptionnel"],
      tip: "3 conditions : Réel (pas imaginaire), Immédiat (va se produire), Non contrôlable (tu ne peux pas l'arrêter). Ex: incendie, explosion.",
    },
  },
  {
    id: 20,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de route.",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "Feux de route = pleins phares. Symbole phare avec rayons horizontaux. Voyant bleu au tableau de bord.",
    },
    securite: {
      question: "Citez un cas d'utilisation de l'appel lumineux.",
      answer: "Pour avertir de son approche. En cas de danger. A la place de l'avertisseur sonore.",
      keywords: ["approche", "danger", "avertisseur"],
      tip: "Appel de phares = signal. Interdit pour râler ! Sers-t'en pour signaler un danger ou ton approche dans un virage sans visibilité.",
    },
    secours: {
      question: "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
      answer: "Il faut porter le gilet de haute visibilité avant de sortir du véhicule.",
      keywords: ["gilet", "haute visibilité"],
      tip: "Gilet = tu deviens visible à 150m au lieu de 20m la nuit. Enfile-le DANS la voiture avant d'ouvrir la portière.",
    },
  },
  {
    id: 21,
    verification: {
      type: "VI",
      question: "Positionnez la commande pour diriger l'air vers le pare-brise.",
      answer: "La position auto (désembuage automatique) peut être utilisée si le véhicule en est équipé.",
      tip: "Symbole pare-brise avec flèches vers le haut. Active aussi la clim si disponible (déshumidifie l'air).",
    },
    securite: {
      question: "Citez deux éléments complémentaires permettant un désembuage efficace.",
      answer: "La commande de vitesse de ventilation. La commande d'air chaud. La climatisation.",
      keywords: ["ventilation", "air chaud", "climatisation"],
      tip: "Combo gagnant : Air vers pare-brise + Clim ON + Ventilo à fond. La clim sèche l'air et désembue en quelques secondes !",
    },
    secours: {
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
      keywords: ["danger imminent", "événement grave"],
      tip: "SAIP = catastrophe naturelle, industrielle, attentat. Réflexe : se confiner, écouter la radio (France Info).",
    },
  },
  {
    id: 22,
    verification: {
      type: "VE",
      question: "Montrez où doit s'effectuer le contrôle du niveau d'huile moteur.",
      answer: "Le candidat montre la jauge. Pas de manipulation exigée.",
      tip: "Tige avec anneau coloré (souvent jaune ou orange). Retire, essuie, replonge, retire : niveau entre MIN et MAX.",
    },
    securite: {
      question: "Quel est le principal risque d'un manque d'huile moteur ?",
      answer: "Un risque de détérioration ou de casse du moteur.",
      keywords: ["détérioration", "casse moteur"],
      tip: "Huile = sang du moteur. Sans lubrification, les pièces métalliques frottent = surchauffe = serrage moteur (plusieurs milliers d'€).",
    },
    secours: {
      question: "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
      answer: "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
      keywords: ["sirènes", "médias", "application SAIP"],
      tip: "Télécharge l'app SAIP ! Elle t'envoie des notifications géolocalisées en cas de danger dans ta zone.",
    },
  },
  {
    id: 23,
    verification: {
      type: "VI",
      question: "Montrez le voyant d'alerte signalant un défaut de batterie.",
      answer: "Le candidat montre le voyant batterie.",
      tip: "Symbole batterie (rectangle avec + et -). Rouge = alternateur ne charge plus. Tu roules sur la réserve !",
    },
    securite: {
      question: "Qu'est-ce qui peut provoquer la décharge de la batterie, moteur éteint ?",
      answer: "Les feux ou accessoires électriques en fonctionnement.",
      keywords: ["feux", "accessoires", "électriques"],
      tip: "Feux allumés moteur coupé = batterie vide en quelques heures. Aussi : radio, chargeur USB, dashcam...",
    },
    secours: {
      question: "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
      answer: "A partir de 10 ans.",
      keywords: ["10 ans"],
      tip: "PSC1 (Prévention et Secours Civiques niveau 1) = 7h de formation, diplôme à vie. Très utile !",
    },
  },
  {
    id: 24,
    verification: {
      type: "VE",
      question: "Montrez l'emplacement de la batterie du véhicule.",
      answer: "Le candidat montre la batterie sous le capot.",
      tip: "Boîtier rectangulaire avec 2 bornes (+ rouge, - noir). Parfois cachée sous un cache plastique ou dans le coffre.",
    },
    securite: {
      question: "Quelle est la solution en cas de panne de batterie pour démarrer le véhicule sans le déplacer ?",
      answer: "Brancher une deuxième batterie en parallèle (ou les \"+\" ensemble et les \"-\" ensemble) ou la remplacer.",
      keywords: ["deuxième batterie", "parallèle", "remplacer"],
      tip: "Câbles de démarrage : Rouge sur + des 2 batteries, Noir sur - des 2. Démarre la voiture en panne, attends 5 min, débranche dans l'ordre inverse.",
    },
    secours: {
      question: "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
      answer: "Car les lésions du cerveau surviennent dès les premières minutes.",
      keywords: ["lésions cerveau", "premières minutes"],
      tip: "3 min sans oxygène = lésions cérébrales. 5 min = lésions irréversibles. Chaque seconde compte !",
    },
  },
  {
    id: 25,
    verification: {
      type: "VI",
      question: "De quelle couleur est le voyant qui indique une défaillance du système de freinage ?",
      answer: "Rouge.",
      tip: "Rouge = DANGER = STOP ! Peut aussi indiquer frein à main serré. Vérifie d'abord le frein à main.",
    },
    securite: {
      question: "Quel est le risque de circuler avec un frein de parking mal desserré ?",
      answer: "Une dégradation du système de freinage.",
      keywords: ["dégradation", "freinage"],
      tip: "Frein à main serré en roulant = surchauffe des freins arrière = usure prématurée + perte d'efficacité + odeur de brûlé.",
    },
    secours: {
      question: "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
      answer: "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
      keywords: ["30 mètres", "virage", "sommet de côte"],
      tip: "30m = 30 grands pas. Place-le où il sera VISIBLE : avant le virage, avant la côte. Pas sur autoroute (interdit de marcher dessus) !",
    },
  },
  {
    id: 26,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de croisement.",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "Feux de croisement = codes. Symbole phare avec rayons inclinés vers le bas. Éclaire à 30m sans éblouir.",
    },
    securite: {
      question: "Quelles sont les conséquences d'un mauvais réglage de ces feux ?",
      answer: "Une mauvaise vision vers l'avant et un risque d'éblouissement des autres usagers.",
      keywords: ["mauvaise vision", "éblouissement"],
      tip: "Trop haut = éblouis les autres. Trop bas = tu ne vois pas assez loin. Réglage à faire en garage.",
    },
    secours: {
      question: "Dans quelle situation peut-on déplacer une victime ?",
      answer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
      keywords: ["danger réel", "immédiat", "exceptionnel"],
      tip: "Ex: voiture en feu, émanations de gaz. Ne jamais déplacer si risque de lésion de la colonne vertébrale !",
    },
  },
  {
    id: 27,
    verification: {
      type: "VI",
      question: "Montrez le voyant d'alerte signalant une température trop élevée du liquide de refroidissement.",
      answer: "Le candidat montre le voyant température.",
      tip: "Symbole thermomètre dans l'eau. Rouge = STOP immédiat ! Le moteur surchauffe, risque de casse.",
    },
    securite: {
      question: "Quelle est la conséquence d'une température trop élevée de ce liquide ?",
      answer: "Une détérioration du moteur.",
      keywords: ["détérioration", "moteur"],
      tip: "Surchauffe = joint de culasse qui lâche = réparation très coûteuse. Arrête-toi, ouvre le capot, attends que ça refroidisse.",
    },
    secours: {
      question: "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
      answer: "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident.",
      keywords: ["délimiter", "visible", "sur-accident"],
      tip: "Allume tes warnings, gare-toi en sécurité, enfile le gilet, place le triangle. Dans cet ordre !",
    },
  },
  {
    id: 28,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de position à l'avant et à l'arrière.",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "Feux de position = veilleuses. Tout petits feux blancs devant, rouges derrière. Servent à être vu, pas à voir.",
    },
    securite: {
      question: "Quand doit-on les utiliser ?",
      answer: "La nuit, en agglomération, si l'éclairage public est suffisant.",
      keywords: ["nuit", "agglomération", "éclairage suffisant"],
      tip: "En ville bien éclairée : veilleuses suffisent. Hors agglo ou éclairage insuffisant : codes obligatoires.",
    },
    secours: {
      question: "Quels sont les numéros d'urgence à composer ?",
      answer: "Le 18 (sapeurs-pompiers), le 15 (SAMU), le 112 (urgence européen).",
      keywords: ["18", "15", "112", "pompiers", "SAMU"],
      tip: "Le 114 = urgence par SMS (sourds/malentendants). Tous gratuits depuis n'importe quel téléphone.",
    },
  },
  {
    id: 29,
    verification: {
      type: "VI",
      question: "Actionnez les feux de détresse et montrez le voyant correspondant.",
      answer: "Le candidat actionne les feux de détresse et montre le voyant.",
      tip: "Gros bouton rouge avec triangle. Fait clignoter les 4 clignotants. Voyant = triangle qui clignote.",
    },
    securite: {
      question: "Dans quels cas doit-on les utiliser ?",
      answer: "En cas de panne, d'accident ou de ralentissement important.",
      keywords: ["panne", "accident", "ralentissement"],
      tip: "Sur autoroute : active-les dès que tu vois un bouchon se former devant toi pour prévenir ceux qui arrivent !",
    },
    secours: {
      question: "Qu'est-ce qu'une perte de connaissance ?",
      answer: "C'est lorsque la victime ne répond pas et ne réagit pas mais respire.",
      keywords: ["ne répond pas", "ne réagit pas", "respire"],
      tip: "Test : secoue légèrement les épaules et pose des questions simples. Si aucune réaction mais respire = inconscient.",
    },
  },
  {
    id: 30,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux stop.",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "Feux rouges puissants à l'arrière qui s'allument quand tu freines. Demande à quelqu'un de vérifier pendant que tu appuies sur la pédale.",
    },
    securite: {
      question: "Quelle est la conséquence d'un dysfonctionnement des feux stop ?",
      answer: "Un risque de collision par l'arrière.",
      keywords: ["collision", "arrière"],
      tip: "Sans feux stop = celui qui te suit ne sait pas que tu freines. Risque de carambolage en chaîne.",
    },
    secours: {
      question: "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
      answer: "Dans un endroit suffisamment éloigné du danger et de ses conséquences.",
      keywords: ["éloigné", "danger"],
      tip: "Quelques mètres suffisent souvent. L'essentiel = hors de portée immédiate du danger (feu, fumée, explosion).",
    },
  },
  {
    id: 31,
    verification: {
      type: "VI",
      question: "Montrez la commande du signal sonore (avertisseur).",
      answer: "Le candidat montre le klaxon.",
      tip: "Au centre du volant généralement. Certaines voitures ont aussi un bouton sur le commodo.",
    },
    securite: {
      question: "En agglomération, quand peut-on utiliser l'avertisseur sonore ?",
      answer: "Uniquement en cas de danger immédiat.",
      keywords: ["danger immédiat", "agglomération"],
      tip: "Interdit de klaxonner pour dire bonjour ou pour râler ! Amende de 35€. Seule exception : danger.",
    },
    secours: {
      question: "Comment vérifier la respiration d'une victime ?",
      answer: "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
      keywords: ["ventre", "poitrine", "soulèvent", "air", "expiration"],
      tip: "Libère les voies aériennes d'abord (bascule la tête en arrière, menton vers le haut). Puis VES pendant 10 sec max.",
    },
  },
  {
    id: 32,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement du ou des feux de recul.",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "Feux blancs à l'arrière qui s'allument en marche arrière. Passe la marche arrière pour vérifier.",
    },
    securite: {
      question: "Quelle est l'utilité des feux de recul ?",
      answer: "Eclairer la zone de recul et avertir les autres usagers de la manœuvre.",
      keywords: ["éclairer", "avertir", "manœuvre"],
      tip: "Feux blancs = voiture qui recule. En tant que piéton, si tu vois ça, attention !",
    },
    secours: {
      question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
      answer: "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
      keywords: ["moyens adaptés", "délai court"],
      tip: "Précis = adresse exacte, nombre de victimes, état apparent. Plus c'est précis, plus les secours adaptent leur intervention.",
    },
  },
  {
    id: 33,
    verification: {
      type: "VI",
      question: "Montrez l'emplacement de l'airbag conducteur.",
      answer: "Le candidat montre l'airbag au centre du volant.",
      tip: "Au centre du volant, marqué 'AIRBAG' ou 'SRS'. Ne mets jamais d'autocollant dessus !",
    },
    securite: {
      question: "Citez deux conditions pour que l'airbag soit efficace.",
      answer: "Etre attaché par la ceinture de sécurité. Etre à bonne distance de l'airbag (25 cm minimum).",
      keywords: ["ceinture", "25 cm", "distance"],
      tip: "Ceinture obligatoire : l'airbag seul ne suffit pas. Sans ceinture, l'airbag peut blesser gravement.",
    },
    secours: {
      question: "Comment arrêter une hémorragie ?",
      answer: "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
      keywords: ["appuyer", "tissu propre", "plaie"],
      tip: "Pression directe et MAINTENUE. Allonge la victime. Ne retire jamais le premier tissu, ajoute par-dessus si besoin.",
    },
  },
  {
    id: 34,
    verification: {
      type: "VE",
      question: "Contrôlez l'état et la propreté de tous les rétroviseurs.",
      answer: "Vérification des rétroviseurs propres et en bon état.",
      tip: "3 rétros : intérieur + 2 extérieurs. Pas de fissure, pas de saleté. Ils doivent refléter correctement.",
    },
    securite: {
      question: "Pourquoi faut-il vérifier l'état des rétroviseurs avant chaque départ ?",
      answer: "Pour garantir une bonne visibilité vers l'arrière et les côtés.",
      keywords: ["visibilité", "arrière", "côtés"],
      tip: "Angles morts + rétros = vision complète. Un rétro mal réglé = danger lors des changements de voie.",
    },
    secours: {
      question: "Quelles sont les trois informations à transmettre aux services de secours ?",
      answer: "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
      keywords: ["numéro", "nature", "localisation"],
      tip: "Le régulateur va te guider avec des questions. Réponds calmement. Ne raccroche JAMAIS en premier.",
    },
  },
  {
    id: 35,
    verification: {
      type: "VI",
      question: "Montrez le voyant d'alerte signalant un dysfonctionnement de l'ABS.",
      answer: "Le candidat montre le voyant ABS.",
      tip: "Voyant orange/jaune marqué 'ABS'. S'allume au démarrage puis s'éteint. S'il reste allumé = problème.",
    },
    securite: {
      question: "Quel est le rôle de l'ABS ?",
      answer: "Eviter le blocage des roues lors d'un freinage d'urgence.",
      keywords: ["blocage", "roues", "freinage"],
      tip: "ABS = tu peux freiner à fond ET tourner le volant. Sans ABS, roues bloquées = tu glisses tout droit.",
    },
    secours: {
      question: "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
      answer: "A partir de 10 ans.",
      keywords: ["10 ans"],
      tip: "PSC1 accessible dès 10 ans. Formation de 7h, environ 60€. Valable à vie !",
    },
  },
  {
    id: 36,
    verification: {
      type: "VE",
      question: "Vérifiez le bon fonctionnement de l'ouverture et de la fermeture du capot.",
      answer: "Le candidat ouvre et ferme le capot.",
      tip: "Levier intérieur + loquet de sécurité sous le capot. Vérifie qu'il se ferme bien (clac). Mal fermé = peut s'ouvrir en roulant !",
    },
    securite: {
      question: "Pourquoi est-il important de vérifier le bon fonctionnement de l'ouverture et de la fermeture du capot ?",
      answer: "Un capot mal fermé peut s'ouvrir en roulant et obstruer la visibilité.",
      keywords: ["mal fermé", "visibilité"],
      tip: "Capot qui s'ouvre à 130 km/h = tu ne vois plus rien. Après tout contrôle, TOUJOURS vérifier qu'il est bien fermé.",
    },
    secours: {
      question: "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
      answer: "ALERTER: alerter immédiatement les secours. MASSER: pratiquer une réanimation cardio-pulmonaire. DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.",
      keywords: ["alerter", "masser", "défibriller", "DAE"],
      tip: "Appuie fort (5-6 cm), vite (100-120/min), au milieu de la poitrine. Le DAE te guide vocalement, suis ses instructions.",
    },
  },
  {
    id: 37,
    verification: {
      type: "VI",
      question: "Montrez le voyant d'alerte signalant un dysfonctionnement de l'ESP.",
      answer: "Le candidat montre le voyant ESP.",
      tip: "Voyant avec voiture qui dérape. S'allume quand l'ESP intervient (normal) ou reste allumé si problème.",
    },
    securite: {
      question: "Quel est le rôle de l'ESP ?",
      answer: "Corriger la trajectoire du véhicule en cas de perte d'adhérence.",
      keywords: ["trajectoire", "adhérence"],
      tip: "ESP freine individuellement les roues pour éviter le dérapage. Ne remplace pas une conduite prudente !",
    },
    secours: {
      question: "Dans quelle situation peut-on déplacer une victime ?",
      answer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
      keywords: ["danger réel", "immédiat", "exceptionnel"],
      tip: "Dans le doute, ne déplace pas. Mieux vaut protéger la zone que de risquer d'aggraver des blessures.",
    },
  },
  {
    id: 38,
    verification: {
      type: "VE",
      question: "Contrôlez l'état de la bande de roulement sur l'un des pneumatiques.",
      answer: "En bon état (toute anomalie doit être signalée).",
      tip: "Bande de roulement = partie qui touche le sol. Vérifie les rainures (témoins d'usure à 1,6 mm minimum).",
    },
    securite: {
      question: "Comment s'appelle l'indicateur d'usure sur les pneumatiques ?",
      answer: "Le témoin d'usure.",
      keywords: ["témoin", "usure"],
      tip: "Petites bosses dans les rainures à 1,6 mm. Si la gomme est au niveau du témoin = pneu usé = à changer.",
    },
    secours: {
      question: "Par quels moyens doit être réalisée l'alerte des secours ?",
      answer: "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'une borne d'appel d'urgence.",
      keywords: ["téléphone", "borne d'appel"],
      tip: "Bornes oranges tous les 2 km sur autoroute. Reliées directement aux secours avec ta position exacte.",
    },
  },
  {
    id: 39,
    verification: {
      type: "VI",
      question: "Montrez l'interrupteur des feux de détresse.",
      answer: "Le candidat montre l'interrupteur (bouton triangle rouge).",
      tip: "Gros bouton rouge avec triangle, bien visible au centre du tableau de bord. Facile à trouver même sans regarder.",
    },
    securite: {
      question: "Dans quels cas peut-on utiliser les feux de détresse en circulant ?",
      answer: "Pour signaler un ralentissement important dû à un embouteillage ou un accident.",
      keywords: ["ralentissement", "embouteillage", "accident"],
      tip: "Utile sur autoroute : tu arrives sur un bouchon, tu allumes les warnings pour prévenir ceux qui arrivent vite derrière.",
    },
    secours: {
      question: "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
      answer: "La placer en position stable sur le côté ou position latérale de sécurité. Alerter les secours. Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
      keywords: ["PLS", "position latérale", "alerter", "surveiller"],
      tip: "PLS : sur le côté, tête en arrière, bouche vers le sol (pour que les sécrétions s'écoulent). Couvre-la pour éviter l'hypothermie.",
    },
  },
  {
    id: 40,
    verification: {
      type: "VE",
      question: "Montrez où se situe le filtre à air.",
      answer: "Le candidat montre l'emplacement du filtre à air.",
      tip: "Boîtier noir rectangulaire relié au moteur par un gros tuyau. Souvent fixé par des clips ou vis.",
    },
    securite: {
      question: "A quoi sert le filtre à air ?",
      answer: "A filtrer les impuretés de l'air entrant dans le moteur.",
      keywords: ["filtrer", "impuretés", "air"],
      tip: "Filtre encrassé = moins d'air = moteur moins performant + surconsommation. À changer tous les 20-30 000 km.",
    },
    secours: {
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
      keywords: ["danger imminent", "événement grave"],
      tip: "Test national le 1er mercredi de chaque mois à midi. Si tu l'entends à un autre moment = vrai danger !",
    },
  },
  {
    id: 41,
    verification: {
      type: "VI",
      question: "Montrez le levier de commande de boîte de vitesses.",
      answer: "Le candidat montre le levier.",
      tip: "Entre les sièges avant (manuelle) ou sur la console centrale/au volant (automatique). Schéma des vitesses dessus.",
    },
    securite: {
      question: "Comment économiser du carburant en utilisant la boîte de vitesses ?",
      answer: "En passant les vitesses à bas régime moteur et en utilisant le frein moteur.",
      keywords: ["bas régime", "frein moteur"],
      tip: "Passe les vitesses tôt (2000 tr/min diesel, 2500 essence). En descente, rétrograde au lieu de freiner.",
    },
    secours: {
      question: "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
      answer: "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
      keywords: ["sirènes", "médias", "application SAIP"],
      tip: "En cas d'alerte : rentre dans un bâtiment, ferme portes et fenêtres, écoute la radio (France Info), ne va pas chercher tes enfants.",
    },
  },
  {
    id: 42,
    verification: {
      type: "VE",
      question: "Vérifiez que les portes sont correctement fermées.",
      answer: "Le candidat vérifie la fermeture des portes.",
      tip: "Tire sur chaque poignée de l'intérieur. Un voyant au tableau de bord indique si une porte est mal fermée.",
    },
    securite: {
      question: "Quel est le risque d'une porte mal fermée en roulant ?",
      answer: "Un risque d'ouverture accidentelle et d'éjection d'un passager.",
      keywords: ["ouverture", "éjection"],
      tip: "Vérifie le voyant 'porte ouverte' avant de partir. En cas de choc, une porte mal fermée peut s'ouvrir.",
    },
    secours: {
      question: "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
      answer: "Car les lésions du cerveau surviennent dès les premières minutes.",
      keywords: ["lésions cerveau", "premières minutes"],
      tip: "Le cerveau ne supporte pas plus de 3-5 min sans oxygène. Masse en attendant le DAE et les secours.",
    },
  },
  {
    id: 43,
    verification: {
      type: "VI",
      question: "Réglez la position de l'appuie-tête.",
      answer: "Le candidat règle ou indique comment régler l'appuie-tête.",
      tip: "Le haut de l'appuie-tête doit être au niveau du sommet de ta tête. Pas trop en arrière non plus.",
    },
    securite: {
      question: "Quel est le rôle de l'appuie-tête ?",
      answer: "Limiter le mouvement de la tête vers l'arrière en cas de choc et prévenir le coup du lapin.",
      keywords: ["mouvement", "choc", "coup du lapin"],
      tip: "Coup du lapin = lésion cervicale. L'appuie-tête bien réglé limite le mouvement brutal de la tête.",
    },
    secours: {
      question: "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
      answer: "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
      keywords: ["30 mètres", "virage", "sommet de côte"],
      tip: "30m = 30 pas environ. Le but : qu'on te voie AVANT d'arriver sur toi. Adapte selon la visibilité.",
    },
  },
  {
    id: 44,
    verification: {
      type: "VE",
      question: "Contrôlez l'état des joints d'étanchéité des portes.",
      answer: "Les joints doivent être en bon état, sans craquelure.",
      tip: "Caoutchouc noir autour des portes. Pas de fissure, pas de décollement. Sinon = infiltrations d'eau et bruits.",
    },
    securite: {
      question: "Quelle peut être la conséquence de joints de portes défectueux ?",
      answer: "Des infiltrations d'eau, des courants d'air et des bruits parasites.",
      keywords: ["infiltrations", "air", "bruits"],
      tip: "Joints abîmés = humidité dans l'habitacle = buée, moisissures, odeurs. À remplacer dès que possible.",
    },
    secours: {
      question: "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
      answer: "Il faut porter le gilet de haute visibilité avant de sortir du véhicule.",
      keywords: ["gilet", "haute visibilité"],
      tip: "1 gilet obligatoire minimum. Recommandé : 1 pour chaque passager. Norme CE obligatoire.",
    },
  },
  {
    id: 45,
    verification: {
      type: "VI",
      question: "Montrez l'emplacement du compteur kilométrique.",
      answer: "Le candidat montre le compteur.",
      tip: "Affiche les km parcourus (total et partiel). Souvent sous le compteur de vitesse ou sur l'écran central.",
    },
    securite: {
      question: "Quelle est l'utilité du compteur kilométrique partiel ?",
      answer: "Mesurer une distance parcourue ou vérifier l'autonomie restante.",
      keywords: ["distance", "autonomie"],
      tip: "Remets à zéro au départ pour calculer une distance ou à chaque plein pour calculer ta conso.",
    },
    secours: {
      question: "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
      answer: "Si la victime ne répond pas, ne réagit pas et respire.",
      keywords: ["ne répond pas", "respire", "PLS"],
      tip: "Si elle ne respire PAS = pas de PLS mais massage cardiaque ! Vérifie toujours la respiration d'abord.",
    },
  },
  {
    id: 46,
    verification: {
      type: "VE",
      question: "Contrôlez l'état et le serrage apparent des roues.",
      answer: "Les boulons doivent être présents et serrés.",
      tip: "Vérifie visuellement : tous les boulons présents, pas de traces de rouille anormale, pas de jeu visible.",
    },
    securite: {
      question: "Quelle peut être la conséquence de boulons de roues mal serrés ?",
      answer: "La roue peut se détacher en roulant.",
      keywords: ["roue", "détacher"],
      tip: "Après un changement de roue, revérifie le serrage après 50-100 km. Les boulons peuvent se desserrer !",
    },
    secours: {
      question: "Quels sont les numéros d'urgence à composer ?",
      answer: "Le 18 (sapeurs-pompiers), le 15 (SAMU), le 112 (urgence européen).",
      keywords: ["18", "15", "112", "pompiers", "SAMU"],
      tip: "En cas de doute, appelle le 112 : il te redirigera vers le bon service. Fonctionne dans toute l'Europe.",
    },
  },
  {
    id: 47,
    verification: {
      type: "VI",
      question: "Montrez la commande du régulateur ou du limiteur de vitesse.",
      answer: "Le candidat montre la commande.",
      tip: "Boutons sur le volant ou commodo, marqués 'CRUISE', 'LIM' ou 'SET'. Régulateur = maintient la vitesse, Limiteur = empêche de dépasser.",
    },
    securite: {
      question: "Quelle est la différence entre le régulateur et le limiteur de vitesse ?",
      answer: "Le régulateur maintient la vitesse choisie automatiquement. Le limiteur empêche de dépasser la vitesse programmée.",
      keywords: ["maintient", "empêche dépasser"],
      tip: "Régulateur : pédale d'accélérateur automatique. Limiteur : tu accélères mais bloques à la limite fixée.",
    },
    secours: {
      question: "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
      answer: "Il se compose de deux codes distincts : le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. Le signal de fin d'alerte, signal continu.",
      keywords: ["deux codes", "SNA", "trois cycles", "continu"],
      tip: "Alerte = son modulé qui monte et descend (1 min 41 sec x 3). Fin = son continu (30 sec). Si tu entends l'alerte hors test = danger réel !",
    },
  },
  {
    id: 48,
    verification: {
      type: "VE",
      question: "Montrez où s'effectue le contrôle du niveau de direction assistée (si équipé).",
      answer: "Le candidat montre le bocal de direction assistée.",
      tip: "Bocal avec bouchon noir ou rouge, liquide rouge ou vert. Pas tous les véhicules en ont (direction électrique = pas de liquide).",
    },
    securite: {
      question: "Quelle est la conséquence d'un niveau insuffisant du liquide de direction assistée ?",
      answer: "Une direction plus dure et un risque de détérioration du système.",
      keywords: ["direction dure", "détérioration"],
      tip: "Direction qui devient dure = vérifie le niveau. Si fuite = répare vite, sinon pompe grillée = réparation coûteuse.",
    },
    secours: {
      question: "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Se mettre en sécurité. S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. Respecter les consignes des autorités.",
      keywords: ["sécurité", "médias", "consignes", "autorités"],
      tip: "Ne téléphone pas (sature les réseaux). Ne va pas chercher tes enfants (école = lieu sûr). Confine-toi et attends les infos officielles.",
    },
  },
  {
    id: 49,
    verification: {
      type: "VI",
      question: "Montrez le réglage des rétroviseurs extérieurs.",
      answer: "Le candidat montre la commande de réglage.",
      tip: "Joystick ou boutons sur la portière conducteur. Souvent un sélecteur gauche/droite + croix directionnelle.",
    },
    securite: {
      question: "Comment doit-on régler les rétroviseurs extérieurs ?",
      answer: "Pour voir l'horizon et une petite partie du flanc du véhicule.",
      keywords: ["horizon", "flanc"],
      tip: "Règle assis normalement. Tu dois voir un tout petit bout de ta voiture (repère) et surtout la route derrière.",
    },
    secours: {
      question: "Qu'est-ce qu'une perte de connaissance ?",
      answer: "C'est lorsque la victime ne répond pas et ne réagit pas mais respire.",
      keywords: ["ne répond pas", "ne réagit pas", "respire"],
      tip: "Inconscient qui respire = PLS. Inconscient qui ne respire pas = arrêt cardiaque = massage. La distinction est CRUCIALE.",
    },
  },
  {
    id: 50,
    verification: {
      type: "VE",
      question: "Vérifiez le bon état de fonctionnement des essuie-glaces arrière (si équipé).",
      answer: "Le candidat fait fonctionner l'essuie-glace arrière.",
      tip: "Commodo ou bouton dédié. Vérifie qu'il balaye bien et que le caoutchouc n'est pas craquelé.",
    },
    securite: {
      question: "Pourquoi est-il important de maintenir la lunette arrière propre ?",
      answer: "Pour garantir une bonne visibilité vers l'arrière.",
      keywords: ["visibilité", "arrière"],
      tip: "Lunette sale = angle mort agrandi. Important pour les marches arrière et le suivi du trafic derrière toi.",
    },
    secours: {
      question: "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
      answer: "Dans un endroit suffisamment éloigné du danger et de ses conséquences.",
      keywords: ["éloigné", "danger"],
      tip: "Le minimum nécessaire pour être hors danger. Évite de trop la déplacer pour ne pas aggraver d'éventuelles blessures.",
    },
  },
  {
    id: 51,
    verification: {
      type: "VI",
      question: "Montrez le voyant de ceinture de sécurité non attachée.",
      answer: "Le candidat montre le voyant ceinture.",
      tip: "Symbole personne avec ceinture. Rouge clignotant + bip si conducteur ou passager non attaché.",
    },
    securite: {
      question: "Quel est le risque de ne pas attacher sa ceinture de sécurité ?",
      answer: "En cas de choc, être projeté contre le pare-brise, le volant ou hors du véhicule.",
      keywords: ["projeté", "pare-brise", "hors véhicule"],
      tip: "À 50 km/h, le choc = chute du 4e étage. La ceinture divise par 3 le risque de mort. Même à l'arrière !",
    },
    secours: {
      question: "Comment vérifier la respiration d'une victime ?",
      answer: "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
      keywords: ["ventre", "poitrine", "soulèvent", "air", "expiration"],
      tip: "Bascule la tête en arrière pour libérer les voies aériennes. 10 secondes max pour vérifier !",
    },
  },
  {
    id: 52,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement de tous les clignotants côté route.",
      answer: "Vérification des clignotants propres, en bon état et fonctionnent.",
      tip: "Avant + arrière côté conducteur. Active le clignotant gauche pour vérifier les 2.",
    },
    securite: {
      question: "Pourquoi les clignotants sont-ils essentiels à la sécurité ?",
      answer: "Ils permettent d'indiquer ses intentions aux autres usagers.",
      keywords: ["indiquer", "intentions", "usagers"],
      tip: "Clignotant AVANT de tourner ou changer de voie, pas pendant ! Donne le temps aux autres de réagir.",
    },
    secours: {
      question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
      answer: "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
      keywords: ["moyens adaptés", "délai court"],
      tip: "Un enfant, une personne âgée, une femme enceinte = moyens différents. Sois précis !",
    },
  },
  {
    id: 53,
    verification: {
      type: "VI",
      question: "Montrez le dispositif de commande du frein de parking.",
      answer: "Le candidat montre le frein à main ou le bouton de frein électrique.",
      tip: "Levier entre les sièges OU bouton 'P' sur la console. Les deux font la même chose.",
    },
    securite: {
      question: "Quand doit-on utiliser le frein de parking ?",
      answer: "A chaque stationnement du véhicule.",
      keywords: ["stationnement"],
      tip: "Même sur terrain plat ! Le frein de parking bloque mécaniquement les roues arrière. Sécurité supplémentaire.",
    },
    secours: {
      question: "Quelles sont les trois informations à transmettre aux services de secours ?",
      answer: "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
      keywords: ["numéro", "nature", "localisation"],
      tip: "Donne ton numéro EN PREMIER au cas où l'appel coupe. Localisation = adresse exacte, point de repère visible.",
    },
  },
  {
    id: 54,
    verification: {
      type: "VE",
      question: "Vérifiez la présence de la roue de secours ou du kit de réparation.",
      answer: "Le candidat indique l'emplacement (généralement dans le coffre).",
      tip: "Sous le plancher du coffre généralement. Certains véhicules n'ont qu'un kit anti-crevaison (bombe + compresseur).",
    },
    securite: {
      question: "Quelles vérifications doit-on faire concernant la roue de secours ?",
      answer: "Vérifier la pression et l'état du pneu.",
      keywords: ["pression", "état"],
      tip: "Roue de secours galette = max 80 km/h ! Vérifie la pression régulièrement (souvent plus élevée que les autres).",
    },
    secours: {
      question: "Comment arrêter une hémorragie ?",
      answer: "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
      keywords: ["appuyer", "tissu propre", "plaie"],
      tip: "Mets des gants si tu en as (protection). Si le sang traverse, ajoute un autre tissu PAR-DESSUS, ne retire pas le premier.",
    },
  },
  {
    id: 55,
    verification: {
      type: "VI",
      question: "Actionnez la commande de lave-glace.",
      answer: "Le candidat actionne le lave-glace.",
      tip: "Tire ou pousse le commodo des essuie-glaces vers toi. Le liquide gicle, les balais se mettent en marche.",
    },
    securite: {
      question: "Pourquoi faut-il maintenir le réservoir de lave-glace rempli ?",
      answer: "Pour pouvoir nettoyer le pare-brise en cas de projections et maintenir une bonne visibilité.",
      keywords: ["nettoyer", "projections", "visibilité"],
      tip: "Insectes en été, sel en hiver : sans lave-glace, tu ne vois plus rien ! Vérifie le niveau régulièrement.",
    },
    secours: {
      question: "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
      answer: "A partir de 10 ans.",
      keywords: ["10 ans"],
      tip: "PSC1 = Prévention et Secours Civiques niveau 1. 7h de formation. Tu peux sauver une vie !",
    },
  },
  {
    id: 56,
    verification: {
      type: "VE",
      question: "Contrôlez visuellement l'état des amortisseurs.",
      answer: "Pas de fuite d'huile visible, pas de corrosion excessive.",
      tip: "Regarde derrière les roues : traces d'huile sur l'amortisseur = fuite = à changer. Aussi : voiture qui rebondit trop après une bosse.",
    },
    securite: {
      question: "Quels sont les risques d'amortisseurs usés ?",
      answer: "Une tenue de route dégradée, un freinage moins efficace et une usure prématurée des pneus.",
      keywords: ["tenue de route", "freinage", "usure pneus"],
      tip: "Amortisseurs HS = la roue décolle plus facilement des bosses = moins d'adhérence. Distance de freinage allongée de 20% !",
    },
    secours: {
      question: "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
      answer: "ALERTER: alerter immédiatement les secours. MASSER: pratiquer une réanimation cardio-pulmonaire. DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.",
      keywords: ["alerter", "masser", "défibriller", "DAE"],
      tip: "DAE dans lieux publics (mairies, gares, centres commerciaux). Il parle et te guide pas à pas. Impossible de se tromper !",
    },
  },
  {
    id: 57,
    verification: {
      type: "VI",
      question: "Montrez où se trouve l'interrupteur permettant de condamner les vitres arrière.",
      answer: "Le candidat montre l'interrupteur (si équipé).",
      tip: "Bouton avec fenêtre barrée près des commandes de vitres conducteur. Empêche les enfants d'ouvrir les vitres arrière.",
    },
    securite: {
      question: "Pourquoi ce dispositif est-il important ?",
      answer: "Pour empêcher les enfants de manipuler les vitres arrière.",
      keywords: ["enfants", "vitres"],
      tip: "Sécurité enfants ! Un enfant peut se coincer le cou dans une vitre électrique. Toujours activer ce verrouillage.",
    },
    secours: {
      question: "Dans quelle situation peut-on déplacer une victime ?",
      answer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
      keywords: ["danger réel", "immédiat", "exceptionnel"],
      tip: "Si tu peux supprimer le danger sans déplacer la victime (couper le gaz, éteindre le feu...), fais-le plutôt !",
    },
  },
  {
    id: 58,
    verification: {
      type: "VE",
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de brouillard avant (si équipé).",
      answer: "Vérification des feux, propres, en bon état et fonctionnent.",
      tip: "En bas du pare-chocs. Symbole phare avec lignes ondulées. Pas tous les véhicules en sont équipés.",
    },
    securite: {
      question: "Quand peut-on utiliser les feux de brouillard avant ?",
      answer: "Par temps de brouillard, de chute de neige ou de forte pluie.",
      keywords: ["brouillard", "neige", "forte pluie"],
      tip: "Éclairent large et bas. N'éblouissent pas. Utiles mais pas obligatoires (contrairement aux AB arrière en brouillard).",
    },
    secours: {
      question: "Par quels moyens doit être réalisée l'alerte des secours ?",
      answer: "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'une borne d'appel d'urgence.",
      keywords: ["téléphone", "borne d'appel"],
      tip: "Bornes d'appel = repérage GPS intégré. Les secours savent EXACTEMENT où tu es.",
    },
  },
  {
    id: 59,
    verification: {
      type: "VI",
      question: "Montrez le témoin d'usure des plaquettes de frein (si équipé).",
      answer: "Le candidat montre le voyant.",
      tip: "Voyant avec cercle et segments de chaque côté. S'allume quand les plaquettes sont usées. Pas tous les véhicules l'ont.",
    },
    securite: {
      question: "Quel est le risque de circuler avec des plaquettes de frein usées ?",
      answer: "Une perte d'efficacité du freinage et un risque de détérioration des disques.",
      keywords: ["efficacité", "disques"],
      tip: "Plaquettes jusqu'au métal = bruit de crissement. Les disques s'abîment : réparation plus chère. Vérifie tous les 20 000 km.",
    },
    secours: {
      question: "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
      answer: "La placer en position stable sur le côté ou position latérale de sécurité. Alerter les secours. Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
      keywords: ["PLS", "position latérale", "alerter", "surveiller"],
      tip: "Surveille en permanence ! Si elle arrête de respirer, remets-la sur le dos et commence le massage cardiaque.",
    },
  },
  {
    id: 60,
    verification: {
      type: "VE",
      question: "Vérifiez l'état des vitres et des pare-brises.",
      answer: "Pas de fissure, pas d'impact important.",
      tip: "Impact < pièce de 2€ = réparable. Plus grand ou dans le champ de vision = remplacement obligatoire. L'assurance couvre souvent.",
    },
    securite: {
      question: "Pourquoi est-il dangereux de circuler avec un pare-brise fissuré ?",
      answer: "Risque d'éclatement en cas de choc et visibilité altérée.",
      keywords: ["éclatement", "visibilité"],
      tip: "Une fissure se propage (chaud/froid). Peut éclater au moindre choc. Contre-visite au contrôle technique si fissure dans le champ de vision.",
    },
    secours: {
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
      keywords: ["danger imminent", "événement grave"],
      tip: "Catastrophe industrielle, attentat, séisme... Si tu entends la sirène hors test mensuel = danger réel !",
    },
  },
  {
    id: 61,
    verification: {
      type: "VI",
      question: "Vérifiez le fonctionnement du témoin lumineux du système de gestion de l'airbag.",
      answer: "Le voyant s'allume au démarrage puis s'éteint.",
      tip: "Voyant 'AIRBAG' ou symbole personne avec ballon. S'il reste allumé = problème, l'airbag peut ne pas se déclencher en cas de choc.",
    },
    securite: {
      question: "Que signifie un témoin airbag qui reste allumé ?",
      answer: "Un dysfonctionnement du système airbag qui nécessite une vérification.",
      keywords: ["dysfonctionnement", "vérification"],
      tip: "L'airbag peut ne pas s'ouvrir OU s'ouvrir intempestivement. À faire vérifier rapidement en garage.",
    },
    secours: {
      question: "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
      answer: "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
      keywords: ["sirènes", "médias", "application SAIP"],
      tip: "Radio = source fiable. Évite les réseaux sociaux (fake news). France Info ou chaîne TV nationale.",
    },
  },
  {
    id: 62,
    verification: {
      type: "VE",
      question: "Montrez où s'effectue le réglage des phares.",
      answer: "Le candidat montre les vis de réglage sur le bloc optique.",
      tip: "Vis derrière le phare sous le capot. Réglage horizontal et vertical. À faire en garage avec un appareil spécial.",
    },
    securite: {
      question: "Pourquoi est-il important que les phares soient bien réglés ?",
      answer: "Pour bien éclairer la route sans éblouir les autres usagers.",
      keywords: ["éclairer", "éblouir"],
      tip: "Phares mal réglés = principal motif d'éblouissement. À vérifier après changement d'ampoule ou chargement du véhicule.",
    },
    secours: {
      question: "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
      answer: "Car les lésions du cerveau surviennent dès les premières minutes.",
      keywords: ["lésions cerveau", "premières minutes"],
      tip: "Le massage maintient un flux sanguin vers le cerveau. Même mal fait, c'est mieux que rien !",
    },
  },
  {
    id: 63,
    verification: {
      type: "VI",
      question: "Montrez le voyant de charge de la batterie.",
      answer: "Le candidat montre le voyant batterie.",
      tip: "Symbole batterie (rectangle avec + et -). S'allume au démarrage puis s'éteint. S'il reste allumé = alternateur HS.",
    },
    securite: {
      question: "Que faire si ce voyant s'allume en roulant ?",
      answer: "S'arrêter rapidement car la batterie ne se recharge plus.",
      keywords: ["arrêter", "ne recharge plus"],
      tip: "Tu roules sur la réserve de la batterie (30 min à 2h). Coupe tout ce qui consomme (clim, radio) et va au garage le plus proche.",
    },
    secours: {
      question: "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
      answer: "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
      keywords: ["30 mètres", "virage", "sommet de côte"],
      tip: "Place-le avec le gilet AVANT la zone dangereuse. Marche face au trafic pour voir les voitures arriver.",
    },
  },
  {
    id: 64,
    verification: {
      type: "VE",
      question: "Contrôlez l'état de la carrosserie.",
      answer: "Pas de déformation importante, pas de rouille perforante.",
      tip: "Tour du véhicule : pas de bosse, pas de trou de rouille. Les points de rouille s'agrandissent vite, à traiter.",
    },
    securite: {
      question: "Pourquoi l'état de la carrosserie est-il important pour la sécurité ?",
      answer: "La carrosserie absorbe les chocs en cas d'accident et protège les occupants.",
      keywords: ["absorbe", "chocs", "protège"],
      tip: "La carrosserie se déforme pour absorber l'énergie du choc. Une voiture déjà déformée protège moins bien.",
    },
    secours: {
      question: "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
      answer: "Il faut porter le gilet de haute visibilité avant de sortir du véhicule.",
      keywords: ["gilet", "haute visibilité"],
      tip: "Enfile-le assis dans la voiture. Sors par le côté opposé au trafic si possible.",
    },
  },
  {
    id: 65,
    verification: {
      type: "VI",
      question: "Montrez l'indicateur de rapport engagé (si boîte automatique).",
      answer: "Le candidat montre l'indicateur (P, R, N, D...).",
      tip: "Affichage au tableau de bord ou sur le levier. P=Parking, R=Reverse, N=Neutral, D=Drive.",
    },
    securite: {
      question: "A quoi correspond chaque position ?",
      answer: "P: stationnement, R: marche arrière, N: point mort, D: marche avant automatique.",
      keywords: ["P", "R", "N", "D"],
      tip: "Ne jamais mettre P ou R en roulant ! Attends l'arrêt complet. Pour démarrer : pied sur le frein + P ou N.",
    },
    secours: {
      question: "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
      answer: "Si la victime ne répond pas, ne réagit pas et respire.",
      keywords: ["ne répond pas", "respire", "PLS"],
      tip: "La PLS libère les voies aériennes et permet l'écoulement des liquides (vomi, sang). Position stable = tu peux aller chercher de l'aide.",
    },
  },
  {
    id: 66,
    verification: {
      type: "VE",
      question: "Vérifiez le bon fonctionnement de l'ouverture et de la fermeture du coffre.",
      answer: "Le candidat ouvre et ferme le coffre.",
      tip: "Vérifie le verrouillage et le déverrouillage. Pas de jeu, pas de grincement anormal. Le coffre doit rester fermé en roulant.",
    },
    securite: {
      question: "Quel est le risque d'un coffre mal fermé ?",
      answer: "Il peut s'ouvrir en roulant et créer un danger pour les autres usagers.",
      keywords: ["ouvrir", "danger"],
      tip: "Coffre qui s'ouvre = objets qui tombent sur la route. Danger pour les deux-roues notamment.",
    },
    secours: {
      question: "Quels sont les numéros d'urgence à composer ?",
      answer: "Le 18 (sapeurs-pompiers), le 15 (SAMU), le 112 (urgence européen).",
      keywords: ["18", "15", "112", "pompiers", "SAMU"],
      tip: "17 = police/gendarmerie. 114 = SMS pour sourds. Le 112 redirige vers le service adapté.",
    },
  },
  {
    id: 67,
    verification: {
      type: "VI",
      question: "Montrez la commande de recyclage d'air.",
      answer: "Le candidat montre le bouton recyclage.",
      tip: "Bouton avec voiture et flèche circulaire à l'intérieur. Coupe l'air extérieur, recycle l'air intérieur.",
    },
    securite: {
      question: "Dans quels cas utilise-t-on le recyclage d'air ?",
      answer: "Pour éviter l'entrée de mauvaises odeurs ou de pollution, ou pour accélérer le réchauffement/refroidissement de l'habitacle.",
      keywords: ["odeurs", "pollution", "réchauffement"],
      tip: "Utile dans les tunnels ou bouchons (pollution). Mais attention : air vicié = buée et somnolence. Ne pas laisser activé trop longtemps.",
    },
    secours: {
      question: "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
      answer: "Il se compose de deux codes distincts : le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. Le signal de fin d'alerte, signal continu.",
      keywords: ["deux codes", "SNA", "trois cycles", "continu"],
      tip: "Le test mensuel dure 1 min 41 sec. En vrai, les 3 cycles durent au total 5 minutes environ.",
    },
  },
  {
    id: 68,
    verification: {
      type: "VE",
      question: "Vérifiez la présence et l'état du dispositif d'attelage (si équipé).",
      answer: "Le candidat vérifie l'attache-remorque.",
      tip: "Boule d'attelage : pas de rouille, pas de jeu. Prise électrique : contacts propres, pas de corrosion.",
    },
    securite: {
      question: "Quelles vérifications faire avant de tracter une remorque ?",
      answer: "Vérifier l'attelage, le branchement électrique, le poids de la remorque et la pression des pneus.",
      keywords: ["attelage", "électrique", "poids", "pression"],
      tip: "Remorque + charge = poids accru. Augmente la pression des pneus selon les recommandations constructeur.",
    },
    secours: {
      question: "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Se mettre en sécurité. S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. Respecter les consignes des autorités.",
      keywords: ["sécurité", "médias", "consignes", "autorités"],
      tip: "Gouvernement.fr et interieur.gouv.fr = sources officielles. Pas de panique, reste à l'écoute.",
    },
  },
  {
    id: 69,
    verification: {
      type: "VI",
      question: "Montrez le voyant du système anti-démarrage.",
      answer: "Le candidat montre le voyant (souvent une clé ou une voiture avec une clé).",
      tip: "Symbole clé ou cadenas. Clignote quand le système est actif (normal). Reste fixe = problème de reconnaissance de la clé.",
    },
    securite: {
      question: "A quoi sert le système anti-démarrage ?",
      answer: "A empêcher le démarrage du véhicule sans la clé codée.",
      keywords: ["empêcher", "clé codée"],
      tip: "Antivol électronique. Même si un voleur force le neiman, le moteur ne démarre pas sans la puce de la clé.",
    },
    secours: {
      question: "Qu'est-ce qu'une perte de connaissance ?",
      answer: "C'est lorsque la victime ne répond pas et ne réagit pas mais respire.",
      keywords: ["ne répond pas", "ne réagit pas", "respire"],
      tip: "Causes : choc à la tête, malaise, intoxication, épilepsie... La PLS protège en attendant les secours.",
    },
  },
  {
    id: 70,
    verification: {
      type: "VE",
      question: "Contrôlez l'état de la fixation du rétroviseur extérieur côté conducteur.",
      answer: "Le rétroviseur doit être bien fixé, sans jeu.",
      tip: "Pousse légèrement le rétro : il ne doit pas bouger de sa base. Sinon = fixation à resserrer ou coque à changer.",
    },
    securite: {
      question: "Pourquoi le rétroviseur extérieur gauche est-il particulièrement important ?",
      answer: "Pour surveiller les angles morts à gauche lors des dépassements et changements de voie.",
      keywords: ["angles morts", "dépassements", "voie"],
      tip: "Avant tout dépassement : rétro + contrôle par-dessus l'épaule (angle mort). Un vélo peut s'y cacher !",
    },
    secours: {
      question: "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
      answer: "Dans un endroit suffisamment éloigné du danger et de ses conséquences.",
      keywords: ["éloigné", "danger"],
      tip: "Saisir les chevilles ou les poignets, tirer en ligne droite. Jamais par le milieu du corps (risque pour la colonne).",
    },
  },
  {
    id: 71,
    verification: {
      type: "VI",
      question: "Montrez l'emplacement du compte-tours (si équipé).",
      answer: "Le candidat montre le compte-tours.",
      tip: "Cadran avec 'x1000 tr/min' ou 'RPM'. Montre le régime moteur. Zone rouge = régime max à ne pas dépasser.",
    },
    securite: {
      question: "A quoi sert le compte-tours ?",
      answer: "A connaître le régime moteur pour optimiser les passages de vitesse et réduire la consommation.",
      keywords: ["régime", "vitesses", "consommation"],
      tip: "Passe la vitesse supérieure vers 2000-2500 tr/min. Économie de carburant + moins d'usure moteur.",
    },
    secours: {
      question: "Comment vérifier la respiration d'une victime ?",
      answer: "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
      keywords: ["ventre", "poitrine", "soulèvent", "air", "expiration"],
      tip: "Une respiration toutes les 3-5 secondes est normale. Gasps (respiration agonique) = pas une vraie respiration = massage !",
    },
  },
  {
    id: 72,
    verification: {
      type: "VE",
      question: "Vérifiez le bon fonctionnement de la commande d'ouverture du réservoir de carburant.",
      answer: "Le candidat ouvre et ferme la trappe à carburant.",
      tip: "Levier près du siège conducteur, ou bouton, ou simplement pousser sur la trappe. Vérifie aussi le bouchon.",
    },
    securite: {
      question: "Pourquoi la trappe à carburant doit-elle être bien fermée ?",
      answer: "Pour éviter l'infiltration d'eau ou de poussière et le vol de carburant.",
      keywords: ["infiltration", "vol"],
      tip: "Un bouchon mal fermé = évaporation d'essence + voyant moteur allumé sur certains véhicules.",
    },
    secours: {
      question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
      answer: "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
      keywords: ["moyens adaptés", "délai court"],
      tip: "Accident grave = SMUR (médecin), feu = pompiers, malaise = ambulance... La précision permet d'envoyer les bons moyens.",
    },
  },
  {
    id: 73,
    verification: {
      type: "VI",
      question: "Montrez le bouton de déverrouillage des portes.",
      answer: "Le candidat montre le bouton de verrouillage centralisé.",
      tip: "Sur la portière conducteur, bouton avec cadenas ouvert/fermé. Verrouille/déverrouille toutes les portes.",
    },
    securite: {
      question: "Pourquoi est-il recommandé de verrouiller les portes en roulant ?",
      answer: "Pour éviter l'ouverture accidentelle et empêcher les intrusions à l'arrêt.",
      keywords: ["ouverture accidentelle", "intrusions"],
      tip: "Sécurité enfants + évite les intrusions au feu rouge. Beaucoup de voitures se verrouillent automatiquement en roulant.",
    },
    secours: {
      question: "Quelles sont les trois informations à transmettre aux services de secours ?",
      answer: "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
      keywords: ["numéro", "nature", "localisation"],
      tip: "Reste calme, parle clairement. Le régulateur peut demander plus d'infos : nombre de blessés, état apparent...",
    },
  },
  {
    id: 74,
    verification: {
      type: "VE",
      question: "Montrez où s'effectue la vérification du niveau de liquide de frein.",
      answer: "Le candidat montre le bocal de liquide de frein.",
      tip: "Bocal transparent près du maître-cylindre, bouchon souvent jaune. Niveau visible entre MIN et MAX sans ouvrir.",
    },
    securite: {
      question: "A quelle fréquence doit être changé le liquide de frein ?",
      answer: "Tous les 2 ans ou selon les préconisations du constructeur.",
      keywords: ["2 ans", "constructeur"],
      tip: "Le liquide de frein absorbe l'humidité avec le temps. Eau = point d'ébullition plus bas = risque de vapor lock (pédale molle).",
    },
    secours: {
      question: "Comment arrêter une hémorragie ?",
      answer: "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
      keywords: ["appuyer", "tissu propre", "plaie"],
      tip: "Position allongée, jambes surélevées (si possible). Parle à la victime pour la rassurer et surveiller sa conscience.",
    },
  },
  {
    id: 75,
    verification: {
      type: "VI",
      question: "Montrez la commande permettant de faire fonctionner le klaxon.",
      answer: "Le candidat montre le klaxon au centre du volant.",
      tip: "Au centre du volant. Certains véhicules ont aussi un petit bouton sur un commodo.",
    },
    securite: {
      question: "Dans quels cas l'utilisation du klaxon est-elle autorisée ?",
      answer: "En cas de danger immédiat ou pour signaler sa présence.",
      keywords: ["danger immédiat", "présence"],
      tip: "Hors agglo : autorisé pour signaler ton approche (virage sans visibilité). En agglo : danger immédiat uniquement.",
    },
    secours: {
      question: "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
      answer: "A partir de 10 ans.",
      keywords: ["10 ans"],
      tip: "GQS (Gestes Qui Sauvent) = 2h, gratuit. PSC1 = 7h, payant mais complet. Le GQS peut se faire en collège.",
    },
  },
  {
    id: 76,
    verification: {
      type: "VE",
      question: "Vérifiez l'état du pare-chocs avant.",
      answer: "Pas de déformation importante, bien fixé.",
      tip: "Vérifie qu'il n'est pas décroché, pas de fissure large. Les petites rayures sont normales.",
    },
    securite: {
      question: "A quoi servent les pare-chocs ?",
      answer: "A absorber les chocs mineurs et protéger la structure du véhicule.",
      keywords: ["absorber", "protéger"],
      tip: "Les pare-chocs modernes ont aussi des capteurs (radar, caméra). Un pare-chocs abîmé peut fausser ces systèmes.",
    },
    secours: {
      question: "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
      answer: "ALERTER: alerter immédiatement les secours. MASSER: pratiquer une réanimation cardio-pulmonaire. DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.",
      keywords: ["alerter", "masser", "défibriller", "DAE"],
      tip: "Le massage crée un flux sanguin artificiel. Le DAE peut relancer un cœur qui fibrille. Les deux sont complémentaires.",
    },
  },
  {
    id: 77,
    verification: {
      type: "VI",
      question: "Montrez le voyant de pression des pneumatiques (si équipé).",
      answer: "Le candidat montre le voyant TPMS.",
      tip: "Symbole pneu avec point d'exclamation. S'allume si pression insuffisante. Certains véhicules affichent la pression de chaque roue.",
    },
    securite: {
      question: "Que faire si ce voyant s'allume ?",
      answer: "S'arrêter dès que possible et vérifier la pression des pneumatiques.",
      keywords: ["arrêter", "vérifier pression"],
      tip: "Peut indiquer une crevaison lente. Vérifie visuellement puis gonfle ou va au garage. Ne roule pas longtemps avec un pneu sous-gonflé !",
    },
    secours: {
      question: "Dans quelle situation peut-on déplacer une victime ?",
      answer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
      keywords: ["danger réel", "immédiat", "exceptionnel"],
      tip: "Risque de lésions de la colonne vertébrale si mal déplacée. Dans le doute, protège la zone plutôt que de déplacer.",
    },
  },
  {
    id: 78,
    verification: {
      type: "VE",
      question: "Montrez l'emplacement des fusibles.",
      answer: "Le candidat montre la boîte à fusibles.",
      tip: "Souvent sous le tableau de bord côté conducteur, ou sous le capot. Consulte le manuel pour le schéma des fusibles.",
    },
    securite: {
      question: "A quoi servent les fusibles ?",
      answer: "A protéger les circuits électriques en cas de surcharge.",
      keywords: ["protéger", "circuits", "surcharge"],
      tip: "Un fusible grillé = symptôme, pas cause. Si un fusible grille souvent, il y a un problème électrique à trouver.",
    },
    secours: {
      question: "Par quels moyens doit être réalisée l'alerte des secours ?",
      answer: "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'une borne d'appel d'urgence.",
      keywords: ["téléphone", "borne d'appel"],
      tip: "Le 112 localise ton appel par GPS. Si tu ne connais pas ta position, reste en ligne, ils te guideront.",
    },
  },
  {
    id: 79,
    verification: {
      type: "VI",
      question: "Montrez le voyant du filtre à particules (si équipé - diesel).",
      answer: "Le candidat montre le voyant FAP.",
      tip: "Symbole rectangle avec des points dedans. S'allume quand le FAP a besoin de se régénérer (rouler 15-20 min sur route).",
    },
    securite: {
      question: "Que faire si ce voyant s'allume ?",
      answer: "Rouler sur route ou autoroute pendant 15-20 minutes pour permettre la régénération du filtre.",
      keywords: ["route", "régénération"],
      tip: "La régénération brûle les suies accumulées. Trajets courts répétés = FAP bouché. De temps en temps, fais un long trajet !",
    },
    secours: {
      question: "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
      answer: "La placer en position stable sur le côté ou position latérale de sécurité. Alerter les secours. Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
      keywords: ["PLS", "position latérale", "alerter", "surveiller"],
      tip: "En PLS, la gravité aide à évacuer les sécrétions. La langue ne peut pas basculer et bloquer les voies aériennes.",
    },
  },
  {
    id: 80,
    verification: {
      type: "VE",
      question: "Vérifiez l'état du pare-chocs arrière.",
      answer: "Pas de déformation importante, bien fixé.",
      tip: "Mêmes vérifications qu'à l'avant. Attention aux capteurs de radar de recul intégrés.",
    },
    securite: {
      question: "Pourquoi les capteurs du pare-chocs arrière sont-ils importants ?",
      answer: "Ils aident à détecter les obstacles lors des manœuvres de recul.",
      keywords: ["détecter", "obstacles", "recul"],
      tip: "Les capteurs ne voient pas les objets très bas ou très fins (plot, chaîne...). Toujours vérifier aussi dans les rétros !",
    },
    secours: {
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
      keywords: ["danger imminent", "événement grave"],
      tip: "Le SAIP peut aussi utiliser les panneaux d'autoroute et les smartphones pour diffuser l'alerte.",
    },
  },
  {
    id: 81,
    verification: {
      type: "VI",
      question: "Montrez le bouton de désactivation de l'airbag passager (si équipé).",
      answer: "Le candidat montre le bouton ou contacteur.",
      tip: "Souvent dans la boîte à gants ou sur le côté du tableau de bord. Clé nécessaire pour le tourner.",
    },
    securite: {
      question: "Dans quel cas doit-on désactiver l'airbag passager ?",
      answer: "Lorsqu'un siège enfant dos à la route est installé à l'avant.",
      keywords: ["siège enfant", "dos à la route"],
      tip: "Airbag + bébé dos à la route = danger mortel ! Le déploiement projette le siège violemment. Désactive TOUJOURS l'airbag dans ce cas.",
    },
    secours: {
      question: "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
      answer: "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
      keywords: ["sirènes", "médias", "application SAIP"],
      tip: "11 000 sirènes en France. Les médias interrompent leurs programmes. L'app envoie une notification push.",
    },
  },
  {
    id: 82,
    verification: {
      type: "VE",
      question: "Contrôlez l'état des projecteurs antibrouillard avant (si équipé).",
      answer: "Propres, en bon état, pas de fissure.",
      tip: "En bas du pare-chocs. Vérifie qu'ils ne sont pas cassés, que les verres ne sont pas opaques.",
    },
    securite: {
      question: "Quand NE doit-on PAS utiliser les antibrouillards avant ?",
      answer: "Par temps clair, car ils peuvent éblouir les autres usagers.",
      keywords: ["temps clair", "éblouir"],
      tip: "Les AB avant éclairent large et bas. Par temps clair, ils sont inutiles et peuvent gêner les autres.",
    },
    secours: {
      question: "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
      answer: "Car les lésions du cerveau surviennent dès les premières minutes.",
      keywords: ["lésions cerveau", "premières minutes"],
      tip: "Sans massage, le cerveau meurt. Avec massage, tu gagnes du temps pour les secours et le DAE.",
    },
  },
  {
    id: 83,
    verification: {
      type: "VI",
      question: "Montrez la commande du système Stop and Start (si équipé).",
      answer: "Le candidat montre le bouton de désactivation.",
      tip: "Bouton avec 'A' entouré d'une flèche. Permet de désactiver le système si besoin (ex: manœuvres répétées).",
    },
    securite: {
      question: "A quoi sert le système Stop and Start ?",
      answer: "A couper automatiquement le moteur à l'arrêt pour économiser du carburant et réduire les émissions.",
      keywords: ["couper", "économiser", "émissions"],
      tip: "Le moteur s'arrête au feu rouge et redémarre quand tu relâches le frein. Économie : 5-10% en ville.",
    },
    secours: {
      question: "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
      answer: "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
      keywords: ["30 mètres", "virage", "sommet de côte"],
      tip: "De nuit ou mauvaise visibilité : place-le encore plus loin si possible. Le but = laisser le temps de réagir.",
    },
  },
  {
    id: 84,
    verification: {
      type: "VE",
      question: "Vérifiez l'état des rétroviseurs extérieurs rabattables.",
      answer: "Les rétroviseurs doivent se rabattre et se déployer correctement.",
      tip: "Électriques ou manuels. Vérifie qu'ils restent en position une fois déployés, pas de jeu anormal.",
    },
    securite: {
      question: "Quand les rétroviseurs rabattables sont-ils utiles ?",
      answer: "Pour le stationnement dans les espaces étroits ou dans les garages.",
      keywords: ["stationnement", "espaces étroits"],
      tip: "Certains véhicules les rabattent automatiquement au verrouillage. Attention à ne pas oublier de les redéployer avant de rouler !",
    },
    secours: {
      question: "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
      answer: "Il faut porter le gilet de haute visibilité avant de sortir du véhicule.",
      keywords: ["gilet", "haute visibilité"],
      tip: "La nuit, un piéton sans gilet est visible à 20m. Avec gilet : 150m. La différence peut sauver ta vie !",
    },
  },
  {
    id: 85,
    verification: {
      type: "VI",
      question: "Montrez la commande du système Start and Stop (bouton de démarrage).",
      answer: "Le candidat montre le bouton de démarrage.",
      tip: "Gros bouton 'START/STOP' ou 'ENGINE'. Avec la clé dans la poche, appuie pour démarrer (pied sur le frein).",
    },
    securite: {
      question: "Comment démarrer un véhicule équipé de ce système ?",
      answer: "Avoir la clé sur soi, appuyer sur le frein et presser le bouton de démarrage.",
      keywords: ["clé", "frein", "bouton"],
      tip: "Si la pile de la clé est morte : colle la clé contre le bouton, ça devrait fonctionner.",
    },
    secours: {
      question: "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
      answer: "Si la victime ne répond pas, ne réagit pas et respire.",
      keywords: ["ne répond pas", "respire", "PLS"],
      tip: "Femme enceinte visible : PLS sur le côté gauche (évite la compression de la veine cave).",
    },
  },
  {
    id: 86,
    verification: {
      type: "VE",
      question: "Contrôlez l'état de la plaque d'immatriculation arrière et de son éclairage.",
      answer: "Plaque propre, lisible, éclairage fonctionnel.",
      tip: "Allume les veilleuses pour vérifier l'éclairage de la plaque. Amende si illisible de nuit !",
    },
    securite: {
      question: "Pourquoi l'éclairage de la plaque est-il important ?",
      answer: "Pour permettre l'identification du véhicule de nuit.",
      keywords: ["identification", "nuit"],
      tip: "Plaque illisible = contravention. Aussi utile pour les radars automatiques (non, ce n'est pas une astuce pour les éviter !).",
    },
    secours: {
      question: "Quels sont les numéros d'urgence à composer ?",
      answer: "Le 18 (sapeurs-pompiers), le 15 (SAMU), le 112 (urgence européen).",
      keywords: ["18", "15", "112", "pompiers", "SAMU"],
      tip: "Dans le doute : 112. Ils t'orienteront. Les centrales sont interconnectées.",
    },
  },
  {
    id: 87,
    verification: {
      type: "VI",
      question: "Montrez le voyant de défaillance moteur.",
      answer: "Le candidat montre le voyant moteur (check engine).",
      tip: "Symbole moteur stylisé (bloc avec vagues). Orange = consulte un garage. Clignotant = problème grave, arrête-toi.",
    },
    securite: {
      question: "Que signifie ce voyant s'il s'allume ?",
      answer: "Un dysfonctionnement du système de gestion du moteur ou des émissions polluantes.",
      keywords: ["dysfonctionnement", "émissions"],
      tip: "Souvent : capteur défaillant, problème d'injection, bougies... Pas forcément grave mais à faire vérifier.",
    },
    secours: {
      question: "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
      answer: "Il se compose de deux codes distincts : le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. Le signal de fin d'alerte, signal continu.",
      keywords: ["deux codes", "SNA", "trois cycles", "continu"],
      tip: "Si tu entends la sirène hors du test mensuel (1er mercredi midi) : c'est réel ! Confine-toi et écoute les médias.",
    },
  },
  {
    id: 88,
    verification: {
      type: "VE",
      question: "Vérifiez le serrage du bouchon de réservoir de carburant.",
      answer: "Le bouchon doit être correctement vissé ou clipsé.",
      tip: "Tourne jusqu'au clic ou serre bien. Un bouchon mal fermé = voyant moteur allumé sur certains véhicules.",
    },
    securite: {
      question: "Quels risques si le bouchon est mal fermé ?",
      answer: "Évaporation de carburant, infiltration d'impuretés et risque d'allumage du voyant moteur.",
      keywords: ["évaporation", "impuretés", "voyant"],
      tip: "Le système doit être étanche pour contrôler les vapeurs. Un bouchon manquant ou mal fermé = fuite de vapeurs.",
    },
    secours: {
      question: "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Se mettre en sécurité. S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. Respecter les consignes des autorités.",
      keywords: ["sécurité", "médias", "consignes", "autorités"],
      tip: "Ferme portes, fenêtres, aérations. Bouche les ouvertures si risque chimique. N'utilise pas le téléphone (sature le réseau).",
    },
  },
  {
    id: 89,
    verification: {
      type: "VI",
      question: "Montrez comment fonctionne le verrouillage centralisé.",
      answer: "Le candidat montre la télécommande ou le bouton.",
      tip: "Télécommande sur la clé ou bouton sur la portière. Un appui = verrouille/déverrouille toutes les portes.",
    },
    securite: {
      question: "Quels sont les avantages du verrouillage centralisé ?",
      answer: "Verrouiller/déverrouiller toutes les portes en une seule action et éviter les oublis.",
      keywords: ["une action", "oublis"],
      tip: "Certains véhicules se reverrouillent automatiquement si tu ne montes pas dans les 30 secondes. Anti-vol passif.",
    },
    secours: {
      question: "Qu'est-ce qu'une perte de connaissance ?",
      answer: "C'est lorsque la victime ne répond pas et ne réagit pas mais respire.",
      keywords: ["ne répond pas", "ne réagit pas", "respire"],
      tip: "Pour vérifier : parle fort, secoue légèrement les épaules. Pas de réaction = inconscient. Vérifie alors la respiration.",
    },
  },
  {
    id: 90,
    verification: {
      type: "VE",
      question: "Vérifiez l'état de l'antenne du véhicule (si équipé).",
      answer: "Antenne présente et en bon état.",
      tip: "Antenne radio classique, requin (shark) ou intégrée. Vérifie qu'elle n'est pas tordue ou cassée.",
    },
    securite: {
      question: "A quoi sert l'antenne du véhicule ?",
      answer: "A capter les signaux radio (FM, DAB) et parfois les signaux GPS.",
      keywords: ["radio", "GPS"],
      tip: "Une antenne abîmée = mauvaise réception radio. Les antennes modernes intègrent souvent plusieurs fonctions.",
    },
    secours: {
      question: "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
      answer: "Dans un endroit suffisamment éloigné du danger et de ses conséquences.",
      keywords: ["éloigné", "danger"],
      tip: "Dégage vers un endroit sûr et accessible aux secours. Si possible, note l'heure du dégagement pour les secours.",
    },
  },
  {
    id: 91,
    verification: {
      type: "VI",
      question: "Montrez le voyant indiquant que les portes sont verrouillées.",
      answer: "Le candidat montre le voyant (cadenas).",
      tip: "Symbole cadenas fermé ou voiture avec serrure. S'allume brièvement au verrouillage ou reste affiché selon les modèles.",
    },
    securite: {
      question: "Pourquoi verrouiller les portes en stationnement ?",
      answer: "Pour éviter le vol du véhicule ou des objets à l'intérieur.",
      keywords: ["vol", "véhicule", "objets"],
      tip: "Ne laisse rien de visible dans l'habitacle (sac, GPS, téléphone). Les voleurs repèrent avant de casser.",
    },
    secours: {
      question: "Comment vérifier la respiration d'une victime ?",
      answer: "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
      keywords: ["ventre", "poitrine", "soulèvent", "air", "expiration"],
      tip: "Place ta joue près de sa bouche : tu sentiras l'air. Regarde son thorax bouger. 10 secondes max !",
    },
  },
  {
    id: 92,
    verification: {
      type: "VE",
      question: "Vérifiez le bon fonctionnement du troisième feu stop (feu de freinage surélevé).",
      answer: "Le feu doit s'allumer quand on appuie sur le frein.",
      tip: "En haut de la lunette arrière ou sur le hayon. Plus visible que les feux stop classiques.",
    },
    securite: {
      question: "Pourquoi ce feu supplémentaire a-t-il été rendu obligatoire ?",
      answer: "Pour améliorer la visibilité du freinage et réduire les collisions par l'arrière.",
      keywords: ["visibilité", "collisions", "arrière"],
      tip: "Positionné à hauteur des yeux du conducteur suivant. Plus rapide à percevoir que les feux bas.",
    },
    secours: {
      question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
      answer: "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
      keywords: ["moyens adaptés", "délai court"],
      tip: "Chaque seconde compte dans une urgence vitale. Les secours préparent le matériel en fonction de tes infos.",
    },
  },
  {
    id: 93,
    verification: {
      type: "VI",
      question: "Montrez la commande des phares automatiques (si équipé).",
      answer: "Le candidat montre la position AUTO sur le commodo.",
      tip: "Position 'AUTO' sur la molette des feux. Un capteur de luminosité allume/éteint les feux automatiquement.",
    },
    securite: {
      question: "Quels sont les avantages des phares automatiques ?",
      answer: "Ils s'allument automatiquement quand la luminosité baisse, évitant les oublis.",
      keywords: ["automatiquement", "oublis"],
      tip: "Pratique dans les tunnels ou à la tombée de la nuit. Mais vérifie quand même que tes feux sont bien allumés !",
    },
    secours: {
      question: "Quelles sont les trois informations à transmettre aux services de secours ?",
      answer: "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
      keywords: ["numéro", "nature", "localisation"],
      tip: "Si tu connais des points de repère (commerce, monument), donne-les. Ça aide à localiser plus vite.",
    },
  },
  {
    id: 94,
    verification: {
      type: "VE",
      question: "Vérifiez l'état des catadioptres (réflecteurs).",
      answer: "Propres, en bon état, présents aux endroits prévus.",
      tip: "Réflecteurs orange sur les côtés, rouges à l'arrière. Obligatoires ! Ils renvoient la lumière la nuit.",
    },
    securite: {
      question: "A quoi servent les catadioptres ?",
      answer: "A réfléchir la lumière des phares des autres véhicules et à signaler la présence du véhicule à l'arrêt.",
      keywords: ["réfléchir", "signaler", "arrêt"],
      tip: "Véhicule en panne la nuit sans batterie = les catadioptres te sauvent ! Les phares des autres les font briller.",
    },
    secours: {
      question: "Comment arrêter une hémorragie ?",
      answer: "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
      keywords: ["appuyer", "tissu propre", "plaie"],
      tip: "Garrot = dernier recours si compression impossible (membre coincé). Le garrot peut entraîner l'amputation.",
    },
  },
  {
    id: 95,
    verification: {
      type: "VI",
      question: "Montrez la commande des essuie-glaces automatiques (si équipé).",
      answer: "Le candidat montre la position AUTO sur le commodo.",
      tip: "Position 'AUTO' ou 'A' sur le commodo d'essuie-glace. Un capteur de pluie sur le pare-brise déclenche les balais.",
    },
    securite: {
      question: "Comment fonctionnent les essuie-glaces automatiques ?",
      answer: "Un capteur détecte les gouttes d'eau sur le pare-brise et adapte la vitesse d'essuyage.",
      keywords: ["capteur", "gouttes", "vitesse"],
      tip: "Le capteur est sur le rétroviseur intérieur. Si tu changes le pare-brise, vérifie que le capteur est recalibré.",
    },
    secours: {
      question: "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
      answer: "A partir de 10 ans.",
      keywords: ["10 ans"],
      tip: "Le PSC1 te permet d'être utile en cas d'accident. Tu peux sauver une vie : celle d'un proche, d'un inconnu...",
    },
  },
  {
    id: 96,
    verification: {
      type: "VE",
      question: "Vérifiez le bon état des balais d'essuie-glace.",
      answer: "Caoutchouc souple, pas craquelé, pas décollé.",
      tip: "Soulève le balai et passe le doigt sur le caoutchouc. Il doit être lisse et souple, pas dur ou fissuré.",
    },
    securite: {
      question: "A quelle fréquence faut-il changer les balais d'essuie-glace ?",
      answer: "Environ une fois par an ou dès qu'ils laissent des traces.",
      keywords: ["un an", "traces"],
      tip: "Change-les en septembre avant l'automne/hiver. En été, le soleil durcit le caoutchouc.",
    },
    secours: {
      question: "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
      answer: "ALERTER: alerter immédiatement les secours. MASSER: pratiquer une réanimation cardio-pulmonaire. DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.",
      keywords: ["alerter", "masser", "défibriller", "DAE"],
      tip: "Ne t'arrête pas de masser sauf si : la victime reprend connaissance, les secours te relaient, tu es épuisé(e), ou le DAE le demande.",
    },
  },
  {
    id: 97,
    verification: {
      type: "VI",
      question: "Montrez le voyant d'alerte de la température extérieure basse (si équipé).",
      answer: "Le candidat montre le voyant (souvent un flocon).",
      tip: "Symbole flocon de neige ou thermomètre. S'allume généralement en dessous de 3-4°C.",
    },
    securite: {
      question: "Pourquoi ce voyant est-il important ?",
      answer: "Il prévient du risque de verglas ou de gel sur la route.",
      keywords: ["verglas", "gel"],
      tip: "Même si le thermomètre indique 3°C, un pont ou une zone ombragée peut être à -1°C. Prudence !",
    },
    secours: {
      question: "Dans quelle situation peut-on déplacer une victime ?",
      answer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
      keywords: ["danger réel", "immédiat", "exceptionnel"],
      tip: "Exemples de danger : incendie, noyade imminente, éboulement. Fuite de gaz, fumée toxique.",
    },
  },
  {
    id: 98,
    verification: {
      type: "VE",
      question: "Vérifiez la fixation et l'état du pot d'échappement.",
      answer: "Bien fixé, pas de corrosion perforante, pas de bruit anormal.",
      tip: "Regarde sous la voiture (pas besoin de ramper). Pas de rouille qui traverse, pas de pièce qui pend.",
    },
    securite: {
      question: "Quels risques présente un pot d'échappement en mauvais état ?",
      answer: "Bruit excessif, pollution accrue et risque d'intoxication au monoxyde de carbone.",
      keywords: ["bruit", "pollution", "monoxyde de carbone"],
      tip: "Le CO est inodore et mortel. Un échappement percé peut faire entrer les gaz dans l'habitacle. DANGER !",
    },
    secours: {
      question: "Par quels moyens doit être réalisée l'alerte des secours ?",
      answer: "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'une borne d'appel d'urgence.",
      keywords: ["téléphone", "borne d'appel"],
      tip: "En forêt ou zone sans réseau : les bornes d'appel restent la solution. Elles sont reliées par fil ou satellite.",
    },
  },
  {
    id: 99,
    verification: {
      type: "VI",
      question: "Montrez comment activer les feux de croisement.",
      answer: "Le candidat tourne la molette sur la position feux de croisement.",
      tip: "Symbole phare avec rayons vers le bas et vers la gauche. 2ème position après les veilleuses généralement.",
    },
    securite: {
      question: "Quand doit-on utiliser les feux de croisement ?",
      answer: "La nuit hors agglomération, en cas de visibilité réduite, dans les tunnels.",
      keywords: ["nuit", "visibilité réduite", "tunnels"],
      tip: "Les feux de croisement éclairent à 30m et ne doivent pas éblouir. Passe en route (100m) si la route est libre devant toi.",
    },
    secours: {
      question: "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
      answer: "La placer en position stable sur le côté ou position latérale de sécurité. Alerter les secours. Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
      keywords: ["PLS", "position latérale", "alerter", "surveiller"],
      tip: "Couvre la victime pour éviter l'hypothermie. Parle-lui même si elle ne répond pas, elle peut t'entendre.",
    },
  },
  {
    id: 100,
    verification: {
      type: "VE",
      question: "Effectuez un tour du véhicule et signalez toute anomalie visible.",
      answer: "Le candidat fait le tour et signale les éventuelles anomalies.",
      tip: "Regarde : pneus (gonflage visuel), vitres, feux, carrosserie, sous le véhicule (fuite). C'est une habitude à prendre !",
    },
    securite: {
      question: "Pourquoi est-il recommandé de faire un tour du véhicule avant chaque départ ?",
      answer: "Pour détecter toute anomalie visible et s'assurer que le véhicule est en état de circuler.",
      keywords: ["anomalie", "état", "circuler"],
      tip: "Ça prend 30 secondes et peut te sauver la vie. Pneu crevé, feu cassé, fuite d'huile... Mieux vaut le voir au départ !",
    },
    secours: {
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      answer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
      keywords: ["danger imminent", "événement grave"],
      tip: "En cas d'alerte, ta sécurité prime. Les consignes varient selon le danger : confinement, évacuation, mise à l'abri...",
    },
  },
];
