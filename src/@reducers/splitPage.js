import { SUBMIT_MESSAGE, CHANGE_NUMBER_OF_SPLIT_KEYS } from '@constants'
import { generateHexKeys } from '@helpers'

const copied = (state = [], action) => {
  switch (action.type) {
    case CHANGE_NUMBER_OF_SPLIT_KEYS:
      const num = action.payload
      return Array(num).fill(false)
    default:
      return state
  }
}

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
        message: msg,
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