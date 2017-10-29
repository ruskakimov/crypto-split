import { SUBMIT_MESSAGE } from '@constants'

export const submitMessage = (message) => {
  return {
    type: SUBMIT_MESSAGE,
    payload: message
  }
}