export default {
  hi: 'Hello, {name}',
  datapatch: {
    intro: 'Bienvenue sur Data Patch',
    introUser: 'Bienvenue sur Data Patch, {name}',
    pitch: 'Data Patch est (bientôt) une alternative originale, indépendante et open source à des outils de gestion de base de données en ligne propriétaires type Airtable ou Google Sheet.',
    pitch_bis: "Data Patch vous permet d'importer vos fichiers de données, d'en créer de nouveaux, de les éditer en ligne, de collaborer sur ces jeux de données, de gérer vos schémas de données, de les publier via l'API ou sous forme de tableur, et surtout de permettre à votre communauté de les améliorer sans avoir à se créer de compte.",
    infos: "Pour plus d'informations vous pouvez également consulter <br>l'ensemble du code et de la documentation sur le ",
    repo: "repo sur Github",
    testSearch: 'Faire une recherche',
    codemos: "un projet libre et original par co-demos",
    ademe: "White paper",
  },
  legal: {
    editorInfos: "Informations sur l’éditeur du site",
    legalName: "Dénomination ou raison sociale",
    legalAdress: "Adresse du siège social",
    legalTel: "Numéro de téléphone",
    legalCode: "N° SIREN",
    providerInfos: "Informations sur le prestataire d’hébergement",
    providerSite: "Site internet",
  },
  footer: {
    github: "Le code source de Data Patch sur Github",
    twitter: "Contactez le développeur principal sur Twittter",
    tipee: "Aidez-nous en allant sur notre page Tipee !"
  },
  features: {
    featuresTitle: 'Fonctionnalités',
    featuresHeader: 'Les principales fonctionnalités de Data Patch sont les suivantes :',
    
    edit: 'Editer des jeux de données en ligne ;',
    relationalDb: 'Base de données relationnelle persistente ;',
    oauth: 'Authentification sécurisée (protocole Oauth 2) ;', 
    auths: 'Gestion fine des droits des utilisateurs et des internautes sur les jeux de données : lecture, écriture, amélioration, commentaires... ;',
    collaboration: 'collaboration en temps réel sur des jeux de données ;', 
    dragdrop: 'Glisser/déposer pour organiser ses espaces de travail ;', 
    emailing: "Envoi automatique d'emails lors de propositions d'amélioration, d'invitations à un groupe, etc... ;", 
    share: 'Partage de jeux de données avec un groupe de travail ;', 
    publish: "Publication de jeux de données soit par intégation de widget dans un site tiers ou via l'API, ainsi que gestion des métadonnées sur un jeu ou une table particulière ;",
    api: 'API documentée (swagger) ;',
    moderation: 'Permission à des internautes de proposer des améliorations sur un jeu de données et interface simple de modération de ces propositions ;',
    imports: 'Importer et exporter des données sous différents formats (csv, xls, gsheet, ...) ;',
    sovereign: 'Un outil souverain et indépendant de toute plateforme ;',

    editTables: 'Editez vos tables',
    importData: 'Importez vos données depuis différentes sources',
    manageDatasets: 'Gérez vos jeux de données',
    dragDropDatasets: 'Manipulez vos données en glisser-déposer',
    collaborate: 'Collaborez sur vos jeux de données',
  },
  usecases: {
    title: "Cas d'usages",
    text: "Le projet Data Patch a pour intention générale de faciliter la publication de données ouvertes (open data) pour des acteurs clés de ce mouvement mais qui sont actuellement limités techniquement ou financièrement dans leur adoption d'outils adaptés à leurs besoins.",
    text_bis: "Pourtant de nombreuses collectivités ou structures para-publiques produisent aujourd'hui des données et sont dans l'obligation légale de les publier. Malheureusement les outils à leur disposition actuellement sont souvent propriétaires et majoritairement centralisateurs.",
    text_ter: "Data Patch a une approche 'no-code' de la donnée, tout en permettant une réelle maîtrise des producteurs de leurs propres données et de leur outil. Sans connaissances techniques spécifiques notre outil doit pouvoir répondre aux cas d'usage typiques de ces acteurs de l'open data :",
    publish: "Publier des jeux de données d'intérêt général et permettre leur réutilisation ou leur re-publication sur des services ou des sites tiers ;",
    contribute: "Permettre à sa communauté de contribuer librement (sans création de compte) afin d'améliorer un jeu de données ;",
    edit: "Editer en ligne des jeux de données dans un environnement sécurisé ;",
    catalog: "Cataloguer, organiser et éditorialiser des groupes de jeux de données ouverts ;",
  },
  roadmap: {
    new: 'Nouveau',
    title: 'Notre feuille de route',
    roadmapTxt: "Le projet Data Patch est un projet ouvertement ambitieux, à la fois dans ce qu'il porte comme intentions pour soutenir le mouvement de l'open data, que dans sa volonté de rester open source, ou encore dans les spécificités techniques qu'il implique de développer. ",
    roadmapTxt_bis: "Cette feuille de route indicative n'est donc pas gravée dans le marbre, mais elle a pour but d'indiquer une voie cohérente avec les valeurs et les intentions fondatrices de l'équipe tout en anticipant un besoin d'agilité dans certains cycles de développement.",
    roadmapTxt_ter: "La méthodologie de développement de ce projet pourrait se décomposer en deux phases principales : une phase de développement visant la mise en production d'une preuve de concept suffisamment fonctionnelle, puis une phase de retours plus agile pour permettre de repenser le projet dans sa globalité (ux, architecture, priorisations, parties prenantes, modèle économique...) ",
    inCode: 'réalisé',
    inDev: 'en développement',
    inRoadmap: 'en prévision',
    inLongRun: 'vision à terme',
    coreFunctions: 'Fonctions essentielles',
    coreFunctionsTxt: "Mise en place des fonctions essentielles : API backend, frontend, base de données PostgreSQL, authentification et gestion des utilisateurs, principes généraux d'UX, modèles de données des différents types d'objets (espace de travail, jeu de données, tables, metadonnées, utilisateurs), interrnationalisation...",
    authFunctions: 'Gestion des groupes',
    authFunctionsTxt: "Mise en place des différents droits d'écriture sur les types d'objets, des groupes, des invitations... ",
    collaboration: 'Fonctions de collaboration',
    collaborationTxt: "Mise en place de l'édition collaborative en temps réel avec SocketIO / Y.js.",
    moderation: 'Fonctions de modération',
    moderationTxt: "Mise en place des fonctions permettant à des internautes de contribuer de manière anonyme, des notifications frontend et emails, et aux producteurs de données de modérer les propositions d'amélioration des jeux de données.",
    schemas: 'Modèles de données',
    schemasTxt: "Mise en place des modèles de données génériques perrmettant de gérer et valider les champs : standards data packages par Frictionless Data, schémas de données, validation de valeurs dans une colonne, rapports d'erreurs...",
    tutos: 'Tutoriels',
    tutosTxt: "Pages d'aide, FAQ, et de tutoriels d'utilisation.",
    unitTests: 'Consolidation dev',
    unitTestsTxt: "Ajout de tests unitaires front et back, factorisation...",
    betaVersion: 'Première version beta',
    betaVersionTxt: 'Première version en production et premiers beta-testeurs',
    feedbacks: 'Retours beta-testeurs',
    feedbacksTxt: 'Debugging et intégration des retours des premiers beta-testeurs...',
    v1Version: 'Première version stable',
    v1VersionTxt: 'Première version en production stable en production, ajout des mentions légales, cadrage RGPD, pages équipe et qui sommes-nous, cadrage du modèle économique...',
    docSite: "Site de documentation technique",
    docSiteTxt: "Mise en place d'un site statique de documentation technique à l'attention des développeurs. Mise en place d'un blog.",
    versionning: "Gestion des versions",
    versionningTxt: "Système de gestion des versions d'un document : git, diff, repo github/Gitlab de backup...",
    decentralized: "Décentralisation",
    decentralizedTxt: "Mise en place d'une architecture type ActivityPub pour un partage des données entre instances, sur le modèle de PeerTube ou Mastodon. Réflexions sur la modularisation de l'architecture du projet.",
    templates: "Templates & dataviz",
    templatesTxt: "Intégration de modèles de visualisation (kanban, formulaires, calendriers) et de data-visualisation (cartographie interactive, graphiiques...).",
    admin: "Backoffice admin",
    adminTxt: "Ajout d'une interface de type backoffice pour la gestion d'une instance particulière de Data Patch",
  },
  stack: {
    title: 'Technologies',
    stackText: "Les outils que nous utilisons dans le cadre de ce projet sont toutes sous licence libre. Le projet Data Patch est lui-même 100% open source. Nous cherchons à le développer comme un véritable produit et comme un logiciel libre : libre d'être utilisé, édité, amélioré, partagé...",
  },
  buttons: {
    drawer: 'Ouvrir le tiroir de menu',
    prev: 'Précédent',
    continue: 'Continuer',
    submit: 'Envoyer',
    showDetails: 'Voir les détails',
    close: 'Fermer',
    back: 'Retour',
    options: 'Options',
    save: 'Enregister',
    update: 'Mettre à jour',
    create: 'Créer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    deleteConfirm: 'Oui, je supprime',
    accept: 'Accepter',
    refuse: 'Refuser',
    searchCheckboxes: "Filtrer les types d'objets",
    searchText: 'Rechercher un élément (jeu de données, table, espace de travail...)',
    searchNoData: 'Aucun résultat',
    queryText: "Entrer l'email ou le nom d'un utilisateur, d'un groupe, d'un espace de travail, d'un jeu de données, ... ",
    searchIn: 'Rechercher parmi :',
    askToJoin: "Demander l'accès à l'élément",
    inviteUser: "Inviter un utilisateur",
    searchUser: 'Rechercher un utilisateur',
    queryUser: "Entrer un nom ou un email",
    inviteUserGroup: "Inviter un utilisateur ou un groupe",
    searchUserGroup: 'Rechercher un utilisateur ou un groupe',
    queryUserGroup: "Entrer un nom ou un email",
    searchWorkspaceDataset: 'Rechercher un espace de travail ou un jeu de données',
    queryWorkspaceDataset: "Entrer un titre ou un élément de description",
    yourSelection: "Votre sélection",
    needSelect: "Sélectionner un ou plusieurs élements",
    selectedOptions: "Options de cet élément",
    groupedActions: "Actions groupées",
    selectionFilters: "Filtres de sélection",
    link: "Ouvrir la page de l'élément",
    add: "Ajouter cet élément aux votres",
    addToGroup: "Ajouter cet utilisateur au groupe",
    share: "Partager cet élément avec des personnes ou des groupes",
    join: "Demander l'accès à cet élément",
    invite: "Inviter une personne ou un groupe",
    message: "Envoyer un message",
    comment: "Commenter",
    edit: "Editer",
    remove: "Supprimer",
    removeFromList: "Enlever de la liste",
    chooseAction: 'Choisir une action',
  },
  sorts: {
    sortResults: 'Trier les résultats',
    asc: 'croissant',
    desc: 'décroissant',
    byDate: 'par date',
    byUser: 'par utilisateur',
    byStatus: 'par statut',
    byItemType: "par type d'objet",
  },
  imports: {
    example: 'Exemple',
    examples: 'Exemples',
    blank: "Commencer à partir d'un modèle vide",
    blank_full: "Commencer à partir d'un jeu de données vide",
    blank_helper: "Vous pouvez éditer directement vos tables ici avant la création de votre jeu de données.",
    copyPaste: 'Copier-coller vos données',
    copyPaste_full: 'Copier-coller vos données (soit de type csv ou copiées depuis votre tableur)',
    copyPaste_helper: 'Collez vos données directement dans le cadre puis cliquez sur le bouton pour les prévisualiser.',
    copyPaste_helper_bis: 'Pensez à sélectionner également la première ligne contenant les noms de vos colonnes.',
    copyPaste_placeholder: 'Copiez-collez vos données ici',
    csv: 'Fichiers .csv',
    csv_full: 'Importer un ou plusieurs fichiers au format .csv',
    csv_helper: "Choisissez votre ou vos fichers csv sur votre ordinateur puis vérifez la validité de l'import dans la prévisualisation.",
    csv_placeholder: "Cliquez ici pour choisir votre ou vos fichers csv",
    excel: 'Fichiers excel',
    excel_full: 'Importer un fichier de type excel',
    excel_helper: 'Importer un fichier de type excel',
    excel_placeholder: "Cliquez ici pour choisir votre ficher excel",
    json: 'Fichiers json',
    json_full: 'Importer un ou plusieurs fichiers json',
    json_helper: 'Importer un ou plusieurs fichiers json',
    json_placeholder: "Cliquez ici pour choisir votre ficher json",
    csvGithub: 'Lien vers un fichier csv sur github',
    csvGithub_full: 'Importer un fichier csv hébergé sur github',
    csvGithub_helper: 'Copiez ici le lien vers votre fichier csv sur Github.',
    csvGithub_placeholder: 'Url de votre fichier sur Github',
    gSheet: 'Lien vers un fichier Google Sheet',
    gSheet_full: 'Importer un tableur publié sur Google Sheet',
    gSheet_helper: 'Importer un tableur publié sur Google Sheet',
    gSheet_placeholder: 'Url publique de votre tableur dans Google Sheet',
    gSheet_sheet: 'feuille n°',
    gSheet_addSheet: 'Ajouter un numéro de feuille',
    resume: 'Résumé des informations',
    sep_helper: "Si le résultat n'est pas satisfaisant vous pouvez changer le type de séparateur puis re-cliquer sur le bouton.",
    sep_prefix: "Séparateur de type",
    comma: 'virgule',
    semicolon: 'point-virgule',
    tab: 'tabulation',
    pipe: 'pipe',
    colon: 'deux points',
    selectFile: 'Choisir votre fichier',
    selectFiles: 'Choisir vos fichiers',
    selectSep: 'Séparateur',
    readData: 'Lire les données',
  },
  pages: {
    home: 'Accueil',
    back: 'Retour à la page précédente',
    me: 'Mes infos',
    groups: 'Groupes',
    invitations: 'Invitations',
    notifications: 'Notifications',
    messages: 'Messages',
    documentation: 'Documentation',
    workspaces: 'Espaces de travail',
    dataset: 'Jeu de données',
    workspacesOpen: 'Espaces de travail partagés',
    schemas: 'Schémas',
    schemasOpen: 'Schémas partagés',
    myWorkspaces: 'Mes espaces de travail',
    mySchemas: 'Mes schémas',
    myMessages: 'Mes messages',
    legal: 'Mentions légales',
  },
  errors: {
    errorTxt: 'oups',
    errorCode: 'erreur {code}',
    pageNotFound: "Cette page n'existe pas !<br>(ou pas encore)",
    otherError: "Oups c'est une erreur",
    backHome: "Retour à l'accueil",
    emptySelection: "Aucun élément sélectionné"
  },
  login: {
    in: 'Se connecter',
    inMsg: 'Connexion...',
    out: 'Se déconnecter',
    outMsg: 'Déconnexion...',
    sign: 'Créer un compte',
    signBtn: 'Créer mon compte',
    forgotpwd: "Mot de passe oublié ?",
    forgotpwdBack: "Retour au login",
    resetpwd: "M'envoyer un lien pour créer un nouveau mot de passe",
    newpwd: "Entrer un nouveau mot de passe",
    newpwdFor: "utilisateur : {email}",
    newpwdSend: "Enregistrer mon nouveau mot de passe",
    newpwdSent: "Un mail vous a été envoyé pour créer votre nouveau mot de passe.",
    newpwdOk: "Votre nouveau mot de passe est enregistré, vous pouvez vous connecter",
    isAccount: 'Déjà un compte ?',
    formUsername: 'Pseudo',
    formName: 'Prénom',
    formSurname: 'Nom',
    formEmail: 'Votre adresse email',
    formEmailLabel: 'Email',
    formPwd: 'Votre mot de passe',
    formPwdChoose: 'Choose a password',
    formPwdLabel: 'Mot de passe',
    formCheckLabel: "J'accepte les conditions générales d'utilisation",
    emailSent: 'Un email de vérification vous a été envoyé.',
    checkEmail: 'Consultez votre boîte mail et cliquez sur le lien afin de vérifier votre email',
    verifyEmail: 'Vérification de votre email...',
    verifyOk: 'Votre email a bien été vérifié.',
    verifyOk2: 'Votre compte est maintenant actif.',
    failVerify: 'Echec de la vérification...',
  },
  notifications: {
    yourNotifs: 'Vos notifications',
    notifsCount: "Vous n'avez pas de nouvelles notifications | Vous avez {count} nouvelle notification | Vous avez {count} nouvelles notifications",
    userInvitationsResp: 'pas de nouvelles invitations | Vous avez {count} nouvelle invitation | Vous avez {count} nouvelles invitations',
    userMessagesReceived: 'pas de nouveaux messages | Vous avez {count} nouveau message | Vous avez {count} nouveaux messages',
    userModerationResp:  'pas de nouvelles demandes de modération | Vous avez {count} nouvelle demande de modération | Vous avez {count} nouvelles demandes de modération',
    userCommentResp: 'pas de nouveaux commentaires | Vous avez {count} nouveau commentaire | Vous avez {count} nouveaux commentaires',
  },
  me: {
    save: 'Enregistrer mes changements',
    deleteMe: 'Supprimer mon compte',
    username: 'Pseudo',
    name: 'Prénom',
    surname: 'Nom',
    email: 'Email',
    description: 'Description',
    avatar: 'Avatar',
    visibility: 'Visibilité',
  },
  rules: {
    valEnter: "Merci d'entrer une valeur",
    minChars: 'Minimum 3 caractères',
    emailRequired: 'Un email est obligatoire',
    emailValid: "L'email n'est pas valide",
    pwdType: 'Entrer un mot de passe',
    pwdChars: 'Minimum 6 caractères',
    pwdConfirmType: 'Confirmer le mot de passe',
    pwdConfirmMatch: 'Les mots de passe ne correspondent pas',
    checkAgree: 'Vous devez accepter pour continuer',
    urlRequired: 'Une url est obligatoire',
    urlValid: "L'url n'est pas valide",
  },
  tabs: {
    infos: 'Infos',
    auth: 'Autorisations',
    prefs: 'Préférences',
    meta: 'Meta',
    share: 'Partage',
  },
  auth: {
    authLevels: "Niveaux d'autorisation",
    authTypesRead: 'Niveaux de permission en lecture',
    ownerOnly: 'Propriétaire uniquement',
    ownerOnlyHelp: "Seul le propriétaire de cet objet a la permission",
    groups: 'Groupes',
    groupsAndShared: 'Groupes et utilisateurs invités',
    groupsHelp: 'Seuls le propriétaire de cet objet et les groupes ou utilisateurs invités ont la permission',
    users: 'Utilisateurs',
    usersHelp: 'Le propriétaire de cet objet, les groupes ou utilisateurs invités, ainsi que les utilisateurs enregistrés, ont la permission',
    public: 'Public',
    publicHelp: 'Tout le monde, y compris des internautes non enregistrés, ont la permission',

    read: 'Permission de lire',
    readTooltip: 'Qui peut lire les informations de cet objet',
    comment: 'Permission de commenter',
    commentTooltip: 'Qui peut ajouter un commentaire lié à cet objet',
    patch: 'Permission de contribution',
    patchTooltip: 'Qui peut proposer une contribution à cet objet',
    write: "Permission d'écrire",
    writeTooltip: 'Qui peut écrire/modifier directement cet objet',
    manage: 'Permission de gérer',
    manageTooltip: "Qui peut gérer cet objet (invitations, suppression de l'objet, changer les permissions...)",
  },
  roles: {
    reader: 'Lecteur',
    commenter: 'Commentateur',
    patcher: 'Proposant',
    writer: 'Rédacteur',
    manager: 'Manager',
    readerHelp: 'Peut uniquement lire',
    commenterHelp: 'Peut lire et apporter des commentaires',
    patcherHelp: 'Peut lire, commenter et proposer des améliorations',
    writerHelp: 'Peut lire, commenter, proposer des améliorations, et écrire directement dans les données',
    managerHelp: 'Peut lire, commenter, proposer des améliorations, écrire, et gérer les métadonnées (gestion des invités et autorisation de supprimer les données...)',
  },
  share: {
    invitePrefs: 'Inviter un groupe ou des personnes à contribuer',
    sharePrefs: 'Préférences de partage',
    shared: 'partagé',
  },
  dataPackage: {
    itemTypeSingular: "Type d'élément", 
    itemType: "Types d'élément", 
    group: 'Groupe', 
    groups: 'Groupes', 
    groupsHint: 'Séparez les id des groupes avec un espace ou une virgule',
    user: 'Utilisateur',
    users: 'Utilisateurs',
    usersPending: 'Utilisateurs en attente',
    usersHint: 'Séparez les emails des utilisateurs avec un espace ou une virgule',
    authorizedUsers: 'Utilisateurs.trices autorisés',
    authorizedGroups: 'Groupes autorisés',
    invitation: 'Invitation',
    invitations: 'Invitations',
    invitee: 'Invité.e',
    invitees: 'Invité.e.s',
    message: 'Message',
    workspace: 'Espace de travail',
    workspaces: 'Espaces de travail',
    dataset: 'Jeu de données', 
    datasets: 'Jeux de données', 
    table: 'Table | Tables', 
    tables: 'Tables', 
    schema: 'Schema', 
    schemas: 'Schemas',
    field: 'Champ', 
    fieldValue: 'Clé du champ', 
    fieldName: 'Nom du champ', 
    fields: 'Champs', 
    fieldType: 'Champ de type :', 
    fieldTypeShort: 'Type',
    row: 'Ligne',
    rows: 'Lignes',
    owner: 'Propriétaire',
    owner_id: 'ID propriétaire',
    id: 'Id',
    url: 'URL',
    name: 'Nom',
    title: 'Titre',
    color: 'Couleur',
    description: 'Description',
    tags: 'Etiquettes',
    tagsHint: 'Séparez vos étiquettes avec un espace ou une virgule',
    creationDate: 'Date de création',
    icon: 'Icône', 
    licence: 'License',
    hide: 'Cacher',
  },
  groups: {
    member: 'membre | membres',
    memberPending: 'membre en attente | membres en attente',
    defaultHelp: 'Vous pouvez désormais créer un nouveau groupe ...',
    defaultTitle: 'Mon nouveau groupe',
    defaultDescription: 'Mon groupe',
    myGroups: 'Mes groupes',
    sharedGroups: 'Groupes en partage',
    commentGroup: 'Envoyer un commentaire',
    inviteGroup: 'Inviter une personne à rejoindre le groupe',
    askJoinGroup: 'Demander à rejoindre le groupe',
    prefsGroup: 'Préférences du groupe',
    renameGroup: 'Renommer le groupe',
    addGroup: 'Créer un nouveau groupe',
    editGroup: 'Editer les information du groupe',
    deleteGroup: 'Supprimer ce groupe',
    deleteGroupConfirm: 'Etes-vous sûr.e de vouloir supprimer ce groupe ?',
  },
  messages: {
    recipients: 'Destinataire | Destinataires',
    userMessagesSent: 'Messages envoyés',
    userMessagesReceived: 'Messages reçus',
  },
  invitations: {
    invitTitle: "Titre de l'invitation",
    invitees: 'Invité.e | Invité.e.s',
    defaultHelp: 'Vous pouvez désormais créer une nouvelle invitation ...',
    defaultTitle: 'Ma nouvelle invitation',
    defaultMessage: 'Mon invitation',
    myInvitations: 'Mes invitations',
    commentInvitation: 'Envoyer un commentaire',
    addInvitation: 'Ajouter une invitation',
    editInvitation: "Editer les information de l'invitation",
    selectItemType: "Sélectionner le type d'invitation",
    deleteInvitation: 'Supprimer cette invitation',
    deleteInvitationConfirm: 'Etes-vous sûr.e de vouloir supprimer cette invitation ?',
    messageTitle: 'Invitation à rejoindre "{itemTitle}"',
    messageDefault: '{username} vous a invité à rejoindre "{itemTitle}" ({itemtype})',
    userInvitationsSent: 'Invitations envoyées',
    userInvitationsReceived: 'Invitations reçues',
    search: 'Rechercher',
    status: 'Statut',
    all: 'Tout',
    pending: 'En attente',
    accepted: 'Acceptée',
    refused: 'Refusée',
    sentBy: 'Envoyée par',
    sentTo: 'Envoyée à',
    sentToUser: 'Cette invitation a été envoyée à un utilisateur',
    sentToGroup: 'Cette invitation a été envoyée à un groupe',
    sentDate: 'Envoyée le',
    sentTime: "Heure de l'envoi",
    details: "Détails de l'invitation",
    detailsClose: "Fermer le panneau des détails de l'invitation",
  },
  comments: {
    comments: "Commentaires",
    addComment: "Ajouter un commentaire",
    from: "De",
    sent: "Envoyé le {date} à {time}",
    alertItemOwner: "Alerter le propriétaire de l'objet",
    reply: "Répondre",
  },
  workspaces: {
    defaultHelp: 'Vous pouvez désormais créer un nouvel espace de travail...',
    defaultTitle: 'Mon nouvel espace de travail',
    defaultDescription: 'La description de mon espace de travail',
    myWorkspaces: 'Mes espaces de travail',
    sharedWorkspaces: 'Espaces de travail partagés',
    commentWorkspace: 'Envoyer un commentaire',
    inviteWorkspace: 'Inviter une personne ou un groupe',
    prefsWorkspace: "Préférences de l'espace de travail",
    renameWorkspace: "Renommer l'espace de travail",
    addWorkspace: 'Créer un espace de travail',
    searchWorkspace: 'Rechercher un espace de travail',
    searchDataset: 'Rechercher une base de données',
    addDataset: 'Ajouter une base de données',
    editWorkspace: "Editer les informations de l'espace de travail",
    deleteWorkspace: 'Supprimer cet espace de travail',
    deleteWorkspaceConfirm: 'Etes-vous sûr.e de vouloir supprimer cet espace de travail ainsi que tous ses jeux de données associés ?',
  },
  datasets: {
    preview: 'Aperçu du jeu de données',
    defaultTitle: 'Mon nouveau jeu de données',
    defaultDescription: 'La description de mon jeu de données',
    prefsDataset: 'Préférences du jeu de données',
    commentDataset: 'Envoyer un commentaire',
    inviteDataset: 'Inviter une personne ou un groupe',
    editDataset: 'Editer les informations du jeu de données',
    renameDataset: 'Renommer le jeu de données',
    newDataset: 'Créer un nouveau jeu de données',
    copyDataset: 'Copier le jeu de données',
    importDataCsv: 'Importer des tables au format csv dans le jeu de données',
    blankDataset: 'Créer un jeu de données vide',
    pasteDataset: 'Copier-coller une table',
    deleteDataset: 'Supprimer ce jeu de données',
    deleteDatasetConfirm: 'Etes-vous sûr.e de vouloir supprimer ce jeu de données ?',

    stepChoose: "Choisir un format d'import",
    stepImport: "Importer vos données",
    stepMeta: "Métadonnées",
    stepCreateEnd: "Créer votre jeu de données",

    btnNotifications: 'Voir les notifications liées à ce jeu de données',
  },
  pagination: {
    page: "page {page} sur {pages}",
    perPage: "entrées par page",
    nextPage: "page suivante",
    prevPage: "page précédente",
    searchPlaceholder: "recherche dans cette table",
  },
  tables: {
    title: 'Titre de la table',
    enterTitle: 'Entrez le titre de votre nouvelle table',
    defaultTitle: 'Ma nouvelle table',
    defaultDescription: 'La description de ma table',
    prefsTable: 'Préférences de la table',
    commentTable: 'Envoyer un commentaire',
    inviteTable: 'Inviter une personne ou un groupe',
    editTable: 'Editer les informations de la table',
    renameTable: 'Renommer la table',
    addTable: 'Ajouter une nouvelle table',
    newTable: 'Créer une nouvelle table',
    copyTable: 'Copier la table',
    importDataCsv: 'Importer une table au format csv',
    blankTable: 'Créer une table vide',
    pasteTable: 'Copier-coller une table',
    deleteTable: 'Supprimer cette table',
    deleteTableConfirm: 'Etes-vous sûr.e de vouloir supprimer cette table ?',

    stepChoose: "Choisir un format d'import",
    stepImport: "Importer vos données",
    stepMeta: "Métadonnées",
    stepCreateEnd: "Créer votre table",

    btnSidebar: 'Choisir ou créer une vue',
    btnSettings: 'Préférences de la table',
    btnFilter: 'Filtrer les résultats',
    btnUsers: 'Gérer les accès',
    btnDownload: 'Télécharger la table ou le jeu de données',
    btnTablelink: 'Partager le lien vers cette table',
    btnComment: 'Ecrire un commentaire',
    btnTrash: 'Supprimer cette table',
  },
  fields: {
    newField: 'champ',
    newFieldTitle: 'titre du nouveau champ',
    commentField: 'Envoyer un commentaire',
    str: 'texte',
    longStr: 'texte long',
    bool: 'booléen',
    int: 'nombre entier',
    float: 'nombre décimal',
    date: 'date',
    json: 'json',
    tag: 'tag',
    rating: 'notation',
    html: 'html',
    md: 'markdown',
    url: 'url',
    email: 'email',
    ref: 'référence',
    refs: 'liste de références',
    color: 'couleur',
    curr: 'monnaie',
    latlon: 'latitude-longitude',
    shownField: 'le champ est affiché',
    hiddenField: 'le champ est caché',
  },

  row: {
    edit: 'Editer la ligne',
    commentRow: 'Envoyer un commentaire',
  },
  cell: {
    commentCell: 'Envoyer un commentaire',
  }
}
