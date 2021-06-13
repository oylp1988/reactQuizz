import {SUCCESS_ADD_ITEM, SUCCESS_GET_ITEMS, SUCCESS_DELETE_ITEM, SUCCESS_SEARCH_ITEMS} from './actionTypes'
function successAddItem (item) {
  return {
    type: SUCCESS_ADD_ITEM,
    item: item
  }
}
function successGetItems (list) {
  return {
    type: SUCCESS_GET_ITEMS,
    list: list
  }
}
function successDeleteItem (list) {
  return {
    type: SUCCESS_DELETE_ITEM,
    list
  }
}
function successSearchItems (searchedList) {
  return {
    type: SUCCESS_SEARCH_ITEMS,
    searchedList
  }
}
const itemChangeActions = {successAddItem, successGetItems, successDeleteItem, successSearchItems}
export default itemChangeActions