import { combineReducers } from 'redux'
import { CHANGE_NUMBER_OF_SPLIT_KEYS, SUBMIT_MESSAGE } from '@constants'
import { generateHexKeys } from '@helpers'

const splitPage = (state = {
  message: '',
  number: 2,
  keys: []
}, action) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      const msg = action.payload
      return {
        ...state,
        keys: generateHexKeys(msg, state.number),
      }
    case CHANGE_NUMBER_OF_SPLIT_KEYS:
      const num = action.payload
      return {
        ...state,
        number: num,
        keys: generateHexKeys(state.message, num),
      }
    default:
      return state
  }
}

export default splitPage