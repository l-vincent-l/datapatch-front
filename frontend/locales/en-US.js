export default {
  hi: 'Hello, {name}',
  datapatch: {
    intro: 'Welcome to Data Patch',
    introUser: 'Welcome back on Data Patch, {name}',
    pitch: 'Data Patch is (soon) an original, independent and open source alternative to online databse management tools like Airtable or Google Sheet.',
    pitch_bis: "Data Patch allows you to import dataset files, to create new ones, edit them online, collaborate with other users or team, manage schemas, publish via the API or as tables, and finally to engage youur community to enhance the datasets without having them creating an account.",
    infos: 'For more information on Data Patch, <br>check out the ',
    repo: "Github repository",
    testSearch: 'Make a search',
    codemos: "an original and open source project by co-demos",
  },
  footer: {
    github: "Data Patch repo on Github",
    twitter: "Contact the lead developer on Twitter",
    tipee: "Help us out on our Tipee crowdfunding page !"
  },
  features: {
    featuresTitle: 'Main features',
    featuresHeader: 'The main features of Data Patch are the following :',

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
    sovereign: 'un outil souverain et indépendant de toute plateforme ;',

    editTables: 'Edit your table data',
    importData: 'Import data from many sources',
    manageDatasets: 'Manage your datasets easily',
    dragDropDatasets: 'Drag and drop your items',
    collaborate: 'Collaborate on datasets',
  },
  usecases: {
    title: "Use cases",
    text: "Le projet Data Patch a pour intention générale de faciliter la publication de données ouvertes (open data) pour des acteurs clés de ce mouvement mais qui sont actuellement limités techniquement ou financièrement dans leur adoption d'outils efficaces.",
    text_bis: "De nombreuses collectivités ou structures para-publiques produisent aujourd'hui des données et sont dans l'obligation légale de les publier. Toutefois les outils à leur disposition actuellement sont souvent propriétaires et majoritairement centralisateurs.",
    text_ter: "Data Patch a une approche 'no-code' de la donnée. Sans connaissances techniques spécifiques notre outil doit pouvoir répondre aux cas d'usage typiques de ces acteurs de l'open data :",
    publish: "Publier des jeux de données d'intérêt général et permettre leur réutilisation ou leur re-publication sur des services ou des sites tiers;",
    contribute: "Permettre à sa communauté de contribuer librement (sans création de compte) afin d'améliorer un jeu de données;",
    edit: "Editer en ligne des jeux de données dans un environnement sécurisé;",
    catalog: "Cataloguer et éditorialiser des groupes de jeux de données ouverts;",
  },
  roadmap: {
    new: 'New',
    title: 'Our roadmap',
    roadmapTxt: 'The Data Patch project is openly an ambitious one. We are aware ',
    roadmapTxt_bis: "Cette feuille de route indicative n'est donc pas gravée dans le marbre, elle a pour but d'indiquer une voie cohérente avec les valeurs et les intentions fondatrices.",
    roadmapTxt_ter: "La méthodologie de développement de ce projet pourrait se décomposer en deux phases principales : une phase de développement visant la mise en production d'une preuve de concept suffisamment fonctionnelle, puis une phase de retours plus agile pour permettre de repenser le projet dans sa globalité (ux, architecture, priorisations, parties prenantes, modèle économique...) ",
    inCode: 'realised',
    inDev: 'in development',
    inRoadmap: 'in backlog',
    inLongRun: 'long run vision',
    coreFunctions: 'Core functions',
    coreFunctionsTxt: 'Core functions',
    authFunctions: 'Groups management',
    authFunctionsTxt: "Mise en place des droits d'écriture, des groupes ",
    collaboration: 'Collaboration',
    collaborationTxt: "Mise en place de l'édition collaborative en temps réel avec SocketIO / Y.js.",
    moderation: 'Moderation functions',
    moderationTxt: "Mise en place des fonctions permettant à des internautes de contribuer de manière anonyme et aux producteurs de données de modérer les propositions d'amélioration des jeux de données.",
    schemas: 'Data models',
    schemasTxt: "Mise en place des modèles de données génériques perrmettant de gérer les champs : data packages, schémas de données, validation...",
    tutos: 'Tutorials',
    tutosTxt: 'Première version en production et premiers beta-testeurs',
    unitTests: 'Consolidation dev',
    unitTestsTxt: "Ajout de tests unitaires front et back, factorisation...",
    betaVersion: 'First beta version',
    betaVersionTxt: 'First beta version',
    feedbacks: 'Beta-testers feedbacks',
    feedbacksTxt: 'Debugging et intégration des retours des premiers beta-testeurs...',
    v1Version: 'First stable version',
    v1VersionTxt: 'Première version en production stable en production',
    docSite: "Technical documentation website",
    docSiteTxt: "Mise en place d'un site statique de documentation technique à l'attention des développeurs.",
    versionning: "Versionning",
    versionningTxt: "Système de gestion des versions d'un document : git, diff, repo github/Gitlab de backup...",
    decentralized: "Decentralization",
    decentralizedTxt: "Mise en place d'une architecture type ActivityPub pour un partage des données entre instances, sur le modèle de PeerTube ou Mastodon",
    templates: "Templates & dataviz",
    templatesTxt: "Intégration de modèles de visualisation (kanban, formulaires, calendriers) et de data-visualisation (cartographie interactive, graphiiques...).",
  },
  stack: {
    title: 'Technologies',
    stackText: 'Les outils que nous utilisons dans le cadre de ce projet sont toutes sous licence libre. Le projet Data Patch est lui-même 100% open source et nous cherchons à le développer comme un véritable produit et logiciel libre.',
  },
  buttons: {
    drawer: 'Open the menu drawer',
    prev: 'Previous',
    continue: 'Continue',
    submit: 'Submit',
    showDetails: 'Show details',
    close: 'Close',
    back: 'Back',
    options: 'Options',
    save: 'Save',
    update: 'Update',
    create: 'Create',
    cancel: 'Cancel',
    delete: 'Delete',
    deleteConfirm: 'Yes, I delete',
    accept: 'Accept',
    refuse: 'Refuse',
    searchCheckboxes: "Filter objects by types",
    searchText: 'Search for an element (user, group, dataset, table, workspace...)',
    queryText: 'Enter the email or the name of an element (user, group, workspace, dataset, table...)',
    searchNoData: 'No results',
    searchIn: 'Search within :',
    askToJoin: "Ask for access to the element",
    inviteUser: "Invite an user",
    searchUser: 'Search for an user',
    queryUser: "Enter a name or an email",
    inviteUserGroup: "Invite an user or a group",
    searchUserGroup: 'Search for an user or a group',
    queryUserGroup: "Enter a name or an email",
    searchWorkspaceDataset: 'Search for a workspace or a dataset',
    queryWorkspaceDataset: "Enter a title or a element of the description",
    yourSelection: "Your selection",
    needSelect: "Select one or several elements",
    selectedOptions: "Options for this element",
    groupedActions: "Grrouped actions",
    selectionFilters: "Selection filters",
    link: "Open this element's page",
    add: "Add this element to yours",
    addToGroup: "Add this user to the group",
    share: "Share this element with a person or a group",
    join: "Ask the access for this element",
    invite: "Invite a person or a group",
    message: "Send a message",
    comment: "Comment",
    edit: "Edit",
    remove: "Remove",
    removeFromList: "Remove from the list",
    chooseAction: 'Choose an action',
  },
  sorts: {
    sortResults: 'Sort results',
    asc: 'ascendant',
    desc: 'descendant',
    byDate: 'by date',
    byUser: 'by user',
    byStatus: 'by status',
    byItemType: 'by item type',
  },
  imports: {
    example: 'Example',
    examples: 'Examples',
    blank: 'Start from an empty dataset',
    blank_full: 'Start from an empty dataset',
    blank_helper: "Here you can directly edit your tables before creating your dataset.",
    copyPaste: 'Copy-paste your data',
    copyPaste_full: 'Copy-paste your data (either csv-like or copied from your table editor)',
    copyPaste_helper: 'You can paste your data in the frame and then click on the button to get a preview',
    copyPaste_helper_bis: 'Remember to also select the first row containing the columns names.',
    copyPaste_placeholder: 'Copy-paste your data here',
    csv: 'Csv files',
    csv_full: 'Import one or several .csv files',
    csv_helper: "Choose your csv file(s) from your computer and check the result in the preview.",
    csv_placeholder: "Click here pour select your csv file(s)",
    excel: 'Excel files',
    excel_full: 'Import one excel file',
    excel_helper: 'Import one excel file',
    excel_placeholder: "Click here pour select your excel file",
    json: 'Json files',
    json_full: 'Import one or several .json files',
    json_helper: 'Import one or several .json files',
    json_placeholder: "Click here pour select your json file",
    csvGithub: 'Link to a csv file in github',
    csvGithub_full: 'Import a csv file hosted on Github',
    csvGithub_helper: 'Paste here the link to you csv file on Github.',
    csvGithub_placeholder: 'Url of your csv file on Github',
    gSheet: 'Link to Google Sheet file',
    gSheet_full: 'Import a dataset hosted and published on Google Sheet',
    gSheet_helper: 'Import a dataset hosted and published on Google Sheet',
    gSheet_sheet: 'sheet n°',
    gSheet_placeholder: 'Public url of your table in Google Sheet',
    gSheet_addSheet: 'Add a sheet number',
    resume: 'Resume of the import data',
    sep_helper: 'If you are not satisfied by the result try changing the separator type and clickk on the button again to read the data.',
    sep_prefix: "Separator type",
    comma: 'virgule',
    semicolon: 'semicolon',
    tab: 'tabulation',
    pipe: 'pipe',
    colon: 'colon',
    selectFile: 'Select your file',
    selectFiles: 'Select your files',
    selectSep: 'Separator',
    readData: 'Read the data',
  },
  pages: {
    home: 'Home',
    back: 'Back to the previous page',
    me: 'My infos',
    groups: 'Groups',
    invitations: 'Invitations',
    notifications: 'Notifications',
    messages: 'Messages',
    documentation: 'Documentation',
    workspaces: 'Workspaces',
    workspacesOpen: 'Open workspaces',
    dataset: 'Dataset',
    schemas: 'Schemas',
    schemasOpen: 'Open schemas',
    myWorkspaces: 'My workspaces',
    mySchemas: 'My schemas',
    myMessages: 'My messages',
  },
  errors: {
    errorTxt: 'oops',
    errorCode: 'error {code}',
    pageNotFound: "This page doesn't exist !<br>(or not yet)",
    otherError: 'An error occurred',
    backHome: "Bring me back home",
    emptySelection: "No element is selected"
  },
  login: {
    in: 'Log in',
    inMsg: 'Connection...',
    out: 'Log out',
    outMsg: 'Disconnection...',
    sign: 'Sign in',
    signBtn: 'Create my account',
    forgotpwd: 'Password forgotten ?',
    forgotpwdBack: "Back to login",
    resetpwd: 'Send me a link to reset my password',
    newpwd: "Enter a new password",
    newpwdFor: "user : {email}",
    newpwdSend: "Save my new password",
    newpwdSent: "An email has been sent to you to create your new password.",
    newpwdOk: "Your new password is now saved, you can login",
    isAccount: 'Already an account ?',
    formUsername: 'Pseudo',
    formName: 'Name',
    formSurname: 'Surname',
    formEmail: 'Your email adress',
    formEmailLabel: 'Email',
    formPwd: 'Your password',
    formPwdChoose: 'Choose a password',
    formPwdLabel: 'Password',
    formCheckLabel: "I accept the general conditions of use",
    emailSent: 'A verification email has been sent to you.',
    checkEmail: 'Please check your mailbox and click on the link to verify your email.',
    verifyEmail: 'Verifying your email...',
    verifyOk: 'Your email has been verified.',
    verifyOk2: 'Your account is now activated.s',
    failVerify: 'Verification failed...',
  },
  notifications: {
    yourNotifs: 'Your notifications',
    notifsCount: "You have don't have new notifications | You have {count} new notification | You have {count} new notifications",
    userInvitationsResp: 'no new invitations | You have {count} invitation | You have {count} invitations',
    userMessagesReceived: 'no new messages | You have {count} message | You have {count} messages',
    userModerationResp:  'no new moderations | You have {count} moderation | You have {count} moderations',
    userCommentResp: 'no new comments | You have {count} comment | You have {count} comments',
  },
  me: {
    save: 'Save my changes',
    deleteMe: 'Delete my account',
    username: 'Username',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    description: 'Description',
    avatar: 'Avatar',
    visibility: 'Visibility',
  },
  rules: {
    valEnter: 'Please enter a value',
    minChars: 'Minimum 3 characters',
    emailRequired: 'An e-mail is required',
    emailValid: 'E-mail must be valid',
    pwdType: 'Please type a password.',
    pwdChars: 'Minimum 6 characters',
    pwdConfirmType: 'Type confirm password',
    pwdConfirmMatch: 'The password confirmation does not match.',
    checkAgree: 'You must agree to continue',
    urlRequired: 'An url is mandatory',
    urlValid: "The url is not valid",
  },
  tabs: {
    infos: 'Infos',
    auth: 'Authorizations',
    prefs: 'Preferences',
    meta: 'Meta',
    share: 'Sharing',
  },
  auth: {
    authLevels: "Auth levels",
    authTypesRead: 'Auth levels for reading',
    ownerOnly: 'Owner only',
    ownerOnlyHelp: 'Only owner is authorized',
    groups: 'Groups',
    groupsAndShared: 'Invited groups and users',
    groupsHelp: 'Owner and invited groups or users are authorized',
    users: 'Users',
    usersHelp: 'Owner, invited groups, and registred users are authorized',
    public: 'Public',
    publicHelp: 'Owner, invited groups, registred and non-registerd users are authorized',
    
    read: 'Auth to read',
    readTooltip: 'Who can read the informations of this object',
    comment: 'Auth to comment',
    commentTooltip: 'Who can add a comment related to this object',
    patch: 'Auth to patch',
    patchTooltip: 'Who can propose a contribution to this object',
    write: 'Auth to write',
    writeTooltip: 'Who can directly write/modify this object',
    manage: 'Auth to manage',
    manageTooltip: 'Who can manage this object (invitations, delete the object, change permissions...)',
  },
  roles: {
    reader: 'Reader',
    commenter: 'Commenter',
    patcher: 'Patcher',
    writer: 'Writer',
    manager: 'Manager',
    readerHelp: 'Can only read the data',
    commenterHelp: 'Can read and add comments to the data',
    patcherHelp: 'Can read, comment and propose to patch the data',
    writerHelp: 'Can read, comment, patch, and write directly in the data',
    managerHelp: 'Can read, comment, patch, write, and manage the metadata (manage the invited people, delete the data...)',
  },
  share: {
    invitePrefs: 'Invitate group or people to contribute',
    sharePrefs: 'Sharing preferences',
    shared: 'shared',
  },
  dataPackage: {
    itemTypeSingular: "Element type", 
    itemType: "Element types", 
    group: 'Group', 
    groups: 'Groups', 
    groupsHint: "Separate the groups' id with a space or a coma",
    user: 'User', 
    users: 'Users', 
    usersPending: 'Users pending',
    usersHint: "Separate the users' email with a space or a coma",
    authorizedUsers: 'Authorized users',
    authorizedGroups: 'Authorized groups',
    invitation: 'Invitation',
    invitations: 'Invitations',
    invitee: 'Invitee',
    invitees: 'Invitees',
    message: 'Message',
    workspace: 'Workspace', 
    workspaces: 'Workspaces', 
    dataset: 'Dataset', 
    datasets: 'Datasets', 
    table: 'Table | Tables', 
    tables: 'Tables', 
    schema: 'Schema', 
    schemas: 'Schemas',
    field: 'Field',
    fieldValue: 'Field key', 
    fieldName: 'Field name', 
    fields: 'Fields',
    fieldType: 'Field type :',
    fieldTypeShort: 'Type',
    row: 'Row',
    rows: 'Rows',
    owner: 'Owner',
    owner_id: 'Owner ID',
    id: 'Id',
    url: 'URL',
    name: 'Name',
    title: 'Title',
    color: 'Color', 
    description: 'Description',
    tags: 'Tags',
    tagsHint: 'Separate your tags with a space or a coma',
    creationDate: 'Creation date',
    icon: 'Icon', 
    licence: 'Licence',
    hide: 'Hide',
  },
  groups: {
    member: 'member | members',
    memberPending: 'member pending | members pending',
    defaultHelp: 'You can now create a new group to begin ...',
    defaultTitle: 'My new group',
    defaultDescription: 'My group description',
    myGroups: 'My groups',
    sharedGroups: 'Shared groups',
    inviteGroup: 'Invite people to the group',
    askJoinGroup: 'Ask to join the group',
    prefsGroup: 'Group preferences',
    renameGroup: 'Rename the group',
    addGroup: 'Create a new group',
    editGroup: 'Edit group infos',
    deleteGroup: 'Delete this group',
    deleteGroupConfirm: 'Are you sure you want to delete this group ?',
  },
  messages: {
    recipients: 'Recipient | Recipients',
    userMessagesSent: 'Messages sent',
    userMessagesReceived: 'Messages received',
  },
  invitations: {
    invitTitle: 'Invitation title',
    invitees: 'Invitee | Invitees',
    defaultHelp: 'You can now create a new invitation to begin ...',
    defaultTitle: 'My new invitation',
    defaultMessage: 'My invitation message',
    myInvitations: 'My invitations',
    addInvitation: 'Add a invitation',
    editInvitation: 'Edit invitation infos',
    selectItemType: "Select the invitation type",
    deleteInvitation: 'Delete this invitation',
    deleteInvitationConfirm: 'Are you sure you want to delete this invitation ?',
    messageTitle: 'Invitation to join "{itemTitle}"',
    messageDefault: '{username} has invited you to join "{itemTitle}" ({itemtype})',
    userInvitationsSent: 'Invitations sent',
    userInvitationsReceived: 'Invitations received',
    search: 'Search',
    status: 'Status',
    all: 'All',
    pending: 'Pending',
    accepted: 'Accepted',
    refused: 'Refused',
    sentBy: 'Sent by',
    sentTo: 'Sent to',
    sentToUser: 'This invitation was sent to an user',
    sentToGroup: 'This invitation was sent to a group',
    sentDate: 'Sent date',
    sentTime: 'Time of send',
    details: 'Invitation details',
    detailsClose: 'Close invitation details panel',
  },
  workspaces: {
    defaultHelp: 'You can now create a new workspace to begin ...',
    defaultTitle: 'My new workspace',
    defaultDescription: 'My workspace description',
    myWorkspaces: 'My workspaces',
    sharedWorkspaces: 'Shared workspaces',
    inviteWorkspace: 'Invite people or group',
    prefsWorkspace: 'Workspace preferences',
    renameWorkspace: 'Rename the workspace',
    addWorkspace: 'Add a workspace',
    searchWorkspace: 'Search for a workspace',
    searchDataset: 'Search a dataset',
    addDataset: 'Add a dataset',
    editWorkspace: 'Edit workspace infos',
    deleteWorkspace: 'Delete this workspace',
    deleteWorkspaceConfirm: 'Are you sure you want to delete this workspace and all its related datasets ?',
  },
  datasets: {
    preview: 'Dataset preview',
    defaultTitle: 'My new dataset',
    defaultDescription: 'My dataset description',
    prefsDataset: 'Dataset preferences',
    inviteDataset: 'Invite people or group',
    editDataset: 'Edit dataset infos',
    renameDataset: 'Rename the dataset',
    newDataset: 'Create a new dataset',
    copyDataset: 'Copy the dataset',
    importDataCsv: 'Import tables from some csv files to the dataset',
    blankDataset: 'Create a blank dataset',
    pasteDataset: 'Copy-paste a table',
    deleteDataset: 'Delete this dataset',
    deleteDatasetConfirm: 'Are you sure you want to delete this dataset ?',

    stepChoose: "Choose an import format",
    stepImport: "Import your data",
    stepMeta: "Metadata",
    stepCreateEnd: "Create your dataset",

    btnNotifications: 'Check the notifications related to this dataset',
  },
  pagination: {
    page: "page {page} of {pages}",
    perPage: "entries per page",
    nextPage: "next page",
    prevPage: "previous page",
    searchPlaceholder: "search within this table",
  },
  tables: {
    title: 'Table title',
    enterTitle: 'Enter a title for your new table',
    defaultTitle: 'My new table',
    defaultDescription: 'My table description',
    prefsTable: 'Table preferences',
    inviteTable: 'Invite people or group',
    editTable: 'Edit table infos',
    renameTable: 'Rename the table',
    addTable: 'Add a new table',
    newTable: 'Create a new table',
    copyTable: 'Copy the table',
    importDataCsv: 'Importer une table au format csv',
    blankTable: 'Create a blank table',
    pasteTable: 'Copy-paste a table',
    deleteTable: 'Delete this table',
    deleteTableConfirm: 'Are you sure you want to delete this table ?',

    stepChoose: "Choose an import format",
    stepImport: "Import your data",
    stepMeta: "Metadata",
    stepCreateEnd: "Create your table",

    btnSidebar: 'Choose or create a view',
    btnSettings: 'Table preferences',
    btnFilter: 'Filter out results',
    btnUsers: "Manage users' access",
    btnDownload: 'Download this table or the dataset',
    btnTablelink: 'Share a link to table',
    btnComment: 'Write a comment',
    btnTrash: 'Delete this table',
  },
  fields: {
    newField: 'field',
    newFieldTitle: "new field's title",
    str: 'string',
    longStr: 'long string',
    bool: 'boolean',
    int: 'integer',
    float: 'float',
    date: 'date',
    json: 'json',
    tag: 'tag',
    rating: 'rating',
    html: 'html',
    md: 'markdown',
    url: 'url',
    email: 'email',
    ref: 'reference',
    refs: 'references list',
    color: 'color',
    curr: 'currency',
    latlon: 'latitude-longitude',
    shownField: 'field is shown',
    hiddenField: 'field is hidden',
  },

  row: {
    edit: 'Edit the row',
  }
}
