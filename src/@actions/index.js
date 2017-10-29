import { SUBMIT_MESSAGE, CHANGE_NUMBER_OF_SPLIT_KEYS } from '@constants'

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