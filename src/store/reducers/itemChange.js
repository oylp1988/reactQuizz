import update from "immutability-helper"
import {SUCCESS_ADD_ITEM, SUCCESS_DELETE_ITEM, SUCCESS_GET_ITEMS, SUCCESS_SEARCH_ITEMS} from '../actions/actionTypes'

export default function reducer (state, action) {
  switch (action.type) {
    case SUCCESS_ADD_ITEM:
      return update(state, {list: {$push: [action.item]}})
    case SUCCESS_GET_ITEMS:
      return update(state, {list: {$set: action.list}})
    // the delete action only refresh the list to re-render the page after deleting item
    case SUCCESS_DELETE_ITEM:
      return update(state, {list: {$set: action.list}})
    case SUCCESS_SEARCH_ITEMS:
      return update(state, {searchedList: {$set: action.searchedList}})
  }
}