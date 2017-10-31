import { SUBMIT_MESSAGE, CHANGE_NUMBER_OF_SPLIT_KEYS } from '@constants'
import { generateHexKeys } from '@helpers'

const copied = (state = [], action) => {
  switch (action.type) {
    case CHANGE_NUMBER_OF_SPLIT_KEYS:
      const num = action.payload
      return Array(num).fill(false)
    case SUBMIT_MESSAGE:
      return state.slice().fill(false)
    default:
      return state
  }
}

const message = (state = '', action) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return action.payload
    default:
      return state
  }
}

const number = (state = 2, action) => {
  switch (action.type) {
    case CHANGE_NUMBER_OF_SPLIT_KEYS:
      return action.payload
    default:
      return state
  }
}

const keys = (state = ['', ''], action, message) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return generateHexKeys(action.payload, state.length)
    case CHANGE_NUMBER_OF_SPLIT_KEYS:
      return generateHexKeys(message, action.payload)
    default:
      return state
  }
}

export default (state = {}, action) => {
  return {
    message: message(state.message, action),
    number: number(state.number, action),
    keys: keys(state.keys, action, state.message),
    copied: copied(state.copied, action),
  }
}