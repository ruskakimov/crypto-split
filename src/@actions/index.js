import {
  SUBMIT_MESSAGE,
  CHANGE_NUMBER_OF_SPLIT_KEYS,
  CHANGE_KEY_FIELD_VALUE,
  SUBMIT_KEY,
} from '@constants'

export const submitMessage = (message) => {
  return {
    type: SUBMIT_MESSAGE,
    payload: message
  }
}

export const changeNumberOfSplitKeys = (number) => {
  return {
    type: CHANGE_NUMBER_OF_SPLIT_KEYS,
    payload: number
  }
} 

export const changeKeyFieldValue = (value) => {
  return {
    type: CHANGE_KEY_FIELD_VALUE,
    payload: value
      .toLowerCase()
      .replace(/[^0-9a-f]/g, '')
  }
}

export const submitKey = () => {
  return {
    type: SUBMIT_KEY
  }
}