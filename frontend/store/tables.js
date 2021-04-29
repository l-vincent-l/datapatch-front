import { Field, helpHeadersFields, endHeadersFields } from '@/utils/utilsFields'
import { TableMetadata } from '@/utils/utilsTables.js' 


export const state = () => ({
  helpersHs: helpHeadersFields, //.map( h => h.dataHelper ),
  addColHs: endHeadersFields, //.map( h => h.dataHelper ),

  currentTableId: undefined,

  currentTables: undefined,
  // currentTable: undefined,
})

export const getters = {
  getCurrentTableId: (state) => {
    // console.log('S-tables > getCurrentTables > state.currentTables : ', state.currentTables)
    return state.currentTableId
  },
  getCurrentTables: (state) => {
    // console.log('S-tables > getCurrentTables > state.currentTables : ', state.currentTables)
    return state.currentTables
  },
  getCurrentTable: (state) => {
    console.log('S-tables > getCurrentTable > state.currentTables : ', state.currentTables)
    console.log('S-tables > getCurrentTable > state.currentTableId : ', state.currentTableId)
    return state.currentTables.find(t => t.id === state.currentTableId)
  },
  getTableById: (state) => (tableId) => {
    // console.log('S-tables > getCurrentTableById > state.currentTables : ', state.currentTables)
    return state.currentTables.find( t => t.id === tableId)
  },
  getTableMetadataById: (state, getters) => (tableId) => {
    // console.log('S-tables > getCurrentTableMetadata > state.currentTable : ', state.currentTable)
    const filterOutKeys = ['tableData', 'tableFields']
    let table = getters.getTableById(tableId)
    const filtered = Object.keys(table)
      .filter(key => !filterOutKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = table[key]
        return obj
      }, {})
    return filtered
  },

  // FIELDS - DATA - getters
  getCurrentTableFieldsDataLength: (state, getters) => {
    let currentTable = getters.getCurrentTable
    return currentTable.tableFields.length
  },
  getCurrentTableFieldsData: (state, getters) => {
    // console.log('S-tables > getCurrentTableFieldsData > state.currentTable.tableFields : ', state.currentTable.tableFields)
    let currentTable = getters.getCurrentTable
    let dataFields = currentTable.tableFields.map( h => (h instanceof Field ? h.data : h) )
    // console.log('S-tables > getCurrentTableFieldsData > dataFields : ', dataFields)
    return dataFields
  },
  getCurrentTableFields: (state, getters) => {
    // console.log('S-tables > getCurrentTableFields > state.currentTable.tableFields : ', state.currentTable.tableFields)
    let helpersHs = state.helpersHs.map( h => h.dataHelper )
    let addColHs = state.addColHs.map( h => h.dataHelper )
    let dataFields = getters.getCurrentTableFieldsData
    // console.log('S-tables > getCurrentTableFields > dataFields : ', dataFields)
    let tableHeaders = [ ...helpersHs, ...dataFields, ...addColHs ]
    // console.log('S-tables > getCurrentTableFields > tableHeaders : ', tableHeaders)
    return tableHeaders
  },
  getCurrentTableRowsLength: (state, getters) => {
    let currentTable = getters.getCurrentTable
    return currentTable.tableData.length
  },
  getCurrentTableRows: (state, getters) => {
    let currentTable = getters.getCurrentTable
    return currentTable.tableData
  },
}

export const mutations = {
  setCurrentTableId (state, tableId) {
    state.currentTableId = tableId
  },
  setItems (state, {space, items}) {
    // console.log('S-tables > setItems > items : ', items)
    state[space] = items
  },

  addItem (state, {space, item}) {
    // console.log('S-tables > addItem > item : ', item)
    state[space].push(item)
  },
  updateItem (state, {space, item}) {
    // console.log('S-tables > updateItem > item : ', item)
    state[space] = [ ...state[space].map(obj => obj.id !== item.id ? obj : {...obj, ...item})]
  },
  removeItem (state, {space, item}) {
    // console.log('S-tables > removeItem > space : ', space)
    // console.log('S-tables > removeItem > item : ', item)
    let removeIndex = state[space].findIndex(ws => ws.id == item.id)
    // console.log('S-tables > removeItem > removeIndex : ', removeIndex)
    state[space].splice(removeIndex, 1)
    // console.log('S-datasets > removeItem > state[space] : ', state[space])
  },
  resetItems (state, {space}) {
    // console.log('S-tables > resetItems > space : ', space)
    state[space] = undefined
  },

  // FIELDS-DATA - currrent table mutations
  appendToCurrentTable (state, {space, item}) {
    let table = state.currentTables.find( t => t.id === state.currentTableId)
    table[space].push(item)
  },
  updateInCurrentTable (state, {space, item}) {
    // console.log('S-tables > updateInCurrentTable > space : ', space)
    // console.log('S-tables > updateInCurrentTable > item : ', item)
    // console.log('S-tables > updateInCurrentTable > state.currentTableId : ', state.currentTableId)
    let table = state.currentTables.find( t => t.id === state.currentTableId)
    let matchKey = space === 'tableFields' ? 'value' : 'id'
    // console.log('S-tables > updateInCurrentTable > matchKey : ', matchKey)
    table[space] = [ ...table[space].map(obj => obj[matchKey] !== item[matchKey] ? obj : {...obj, ...item} ) ]
    // console.log('S-tables > updateInCurrentTable > state.currentTable[space] : ', state.currentTable[space])
  },

  deleteInCurrentTable (state, {space, itemId}) {
    let table = state.currentTables.find( t => t.id === state.currentTableId)
    table[space] = table[space].filter(r => r.id !== itemId)
  },

}

export const actions = {

  // CURRENT TABLE
  setCurrentTables ({ commit }, tables) {
    commit('setItems', {space: 'currentTables', items: tables})
  },
  setCurrentTableId ({ commit }, tableId) {
    commit('setCurrentTableId', tableId)
  },

  // TABLES LIST
  appendTable ({ commit }, table) {
    commit('addItem', {space: 'currentTables', item: table})
  },
  updateTables ({ commit }, table) {
    commit('updateItem', {space: 'currentTables', item: table})
  },
  removeTable ({ commit }, table) {
    commit('removeItem', {space: 'currentTables', item: table})
  },

  resetCurrentTables ({ commit }) {
    commit('resetItems', {space: 'currentTables'})
  },

  // FIELDS - currrent table actions
  appendColumnToCurrentTableFields ({ commit }, newCol) {
    commit('appendToCurrentTable', {space: 'tableFields', item: newCol})
  },
  updateColumnInCurrentTableFields ({ commit }, col) {
    commit('updateInCurrentTable', {space: 'tableFields', item: col})
  },
  deleteColumnInCurrentTableFields ({ commit }, colId) {
    commit('deleteInCurrentTable', {space: 'tableFields', item: colId})
  },

  // DATA - currrent table actions
  appendRowToCurrentTableData ({ commit, getters }, newRow) {
    commit('appendToCurrentTable', {space: 'tableData', item: newRow})
  },
  updateRowInCurrentTableData ({ commit, getters }, row) {
    commit('updateInCurrentTable', {space: 'tableData', item: row})
  },
  updateCellValueInTableData ({ commit, getters }, cellData) {
    const table = getters.getCurrentTable
    let row = { ...table.tableData.find( r => r.id === cellData.rowId) }
    row[cellData.headerValue] = cellData.value
    commit('updateInCurrentTable', {space: 'tableData', item: row} )
  },
  deleteRowInCurrentTableData ({ commit, getters }, rowId) {
    commit('deleteInCurrentTable', {space: 'tableData', itemId: rowId})
  },
}
