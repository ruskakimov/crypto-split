import {
  SUBMIT_MESSAGE,
  CHANGE_NUMBER_OF_SPLIT_KEYS,
  CHANGE_KEY_FIELD_VALUE,
  SUBMIT_KEY,
  DELETE_KEY,
  COPY_KEY,
} from '@/constants'

export const submitMessage = (message) => {
  return {
    type: SUBMIT_MESSAGE,
    payload: message
  }
}

export const changeNumberOfSplitKeys = (number) => {
  return {
    type: CHANGE_NUMBER_OF_SPLIT_KEYS,
    payload: parseInt(number, 10)
  }
} 

export const copyKey = (index) => {
  return {
    type: COPY_KEY,
    payload: index
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

export const deleteKey = (index) => {
  return {
    type: DELETE_KEY,
    payload: index
  }
}