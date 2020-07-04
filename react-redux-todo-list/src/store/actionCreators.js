import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM  } from './actionTypes'

export function getChangeInputValueAction(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export function getAddItemAction() {
  return {
    type: ADD_ITEM
  }
}

export function getDeleteItemAction(value) {
  return {
    type: DELETE_ITEM,
    value
  }
}