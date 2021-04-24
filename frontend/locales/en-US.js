export default {
  hi: 'Hello, {name}',
  datapatch: {
    intro: 'Welcome to Data Patch',
    introUser: 'Welcome back to Data Patch, {name}',
    pitch: 'Data Patch is (almost) an open source alternative to airtable.',
    infos: 'For more information on Data Patch, check out the ',
    repo: "Github repository",
    codemos: "an open source project by co-demos",
  },
  buttons: {
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
  },
  imports: {
    blank: 'Start from an empty table',
    copyPaste: 'Copy-paste your data',
    csv: 'Csv file',
    excel: 'Excel file',
    json: 'Json file',
    csvGithub: 'Link to a csv file in github',
    gSheet: 'Link to Google Sheet file',
  },
  pages: {
    home: 'Home',
    me: 'My infos',
    groups: 'My groups',
    notifications: 'My notifications',
    documentation: 'Documentation',
    workspaces: 'Workspaces',
    workspacesOpen: 'Open workspaces',
    dataset: 'Dataset',
    schemas: 'Schemas',
    schemasOpen: 'Open schemas',
    myworkspaces: 'My workspaces',
    myschemas: 'My schemas',
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
  me: {
    save: 'Save my changes',
    deleteMe: 'Delete my account',
    username: 'Username',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    description: 'Description',
    avatar: 'Avatar',
  },
  rules: {
    valEnter: 'Please enter a value',
    emailRequired: 'An e-mail is required',
    emailValid: 'E-mail must be valid',
    pwdType: 'Please type a password.',
    pwdChars: 'Minimum 6 characters',
    pwdConfirmType: 'Type confirm password',
    pwdConfirmMatch: 'The password confirmation does not match.',
    checkAgree: 'You must agree to continue',
  },
  tabs: {
    infos: 'Infos',
    auth: 'Authorizations',
    prefs: 'Preferences',
    meta: 'Meta',
  },
  auth: {
    ownerOnly: 'Owner only',
    groups: 'Groups',
    users: 'Users',
    public: 'Public',
    read: 'Read',
    comment: 'Comment',
    patch: 'Patch',
    write: 'Write',
    manage: 'Manage',
  },
  dataPackage: {
    workspace: 'Workspace', 
    dataset: 'Dataset', 
    datasets: 'Datasets', 
    table: 'Table', 
    tables: 'Tables', 
    schema: 'Schema', 
    schemas: 'Schemas',
    field: 'Field',
    fields: 'Fields',
    fieldType: 'Field type :',
    owner: 'Owner',
    owner_id: 'Owner ID',
    id: 'Id',
    url: 'URL',
    name: 'Name',
    title: 'Title',
    color: 'Color', 
    description: 'Description', 
    creationDate: 'Creation date',
    icon: 'Icon', 
    licence: 'Licence',
    type: 'Type',
  },
  workspaces: {
    defaultHelp: 'You can now create a new workspace to begin ...',
    defaultTitle: 'My new workspace',
    defaultDescription: 'My workspace description',
    myWorkspaces: 'My workspaces',
    inviteWorkspace: 'Invite people or group',
    prefsWorkspace: 'Workspace preferences',
    renameWorkspace: 'Rename the workspace',
    addWorkspace: 'Add a workspace',
    searchDataset: 'Search a dataset',
    addDataset: 'Add a dataset',
    editWorkspace: 'Edit workspace infos',
    deleteWorkspace: 'Delete this workspace',
    deleteWorkspaceConfirm: 'Are you sure you want to delete this workspace and all its related datasets ?',
  },
  datasets: {
    defaultTitle: 'My new dataset',
    defaultDescription: 'My dataset description',
    prefsDataset: 'Dataset preferences',
    inviteDataset: 'Invite people or group',
    editDataset: 'Edit dataset infos',
    renameDataset: 'Rename the dataset',
    newDataset: 'Create a new dataset',
    copyDataset: 'Copy the dataset',
    importDataCsv: 'Import a dataset from a csv file',
    blankDataset: 'Create a blank dataset',
    pasteDataset: 'Copy-paste a table',
    deleteDataset: 'Delete this dataset',
    deleteDatasetConfirm: 'Are you sure you want to delete this dataset ?',

    stepChoose: "Choose an import format",
    stepImport: "Import your data",
    stepMeta: "Metadata",
    stepCreateEnd: "Create your dataset",
  },
  tables: {

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
  },

  row: {
    edit: 'Edit the row',
  }
}
