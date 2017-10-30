import { CHANGE_KEY_FIELD_VALUE, SUBMIT_KEY, DELETE_KEY } from '@constants'
import { produceMessage } from '@helpers'

function handleSubmitKey(state) {
  const enteredKey = state.keyField.value
  const stateWithError = (errorMessage) => ({
    ...state,
    keyField: {
      ...state.keyField,
      errorMessage
    }
  })

  if (enteredKey.length % 4) {
    return stateWithError('Invalid key length!')
  }

  if (state.keys.length && state.keys[0].length !== enteredKey.length) {
    return stateWithError('Key does not match the length of previously entered keys!')
  }

  if (state.keys.includes(enteredKey)) {
    return stateWithError('Such key is already present!')
  }

  const newKeys = [ enteredKey, ...state.keys ]
  return {
    message: produceMessage(newKeys),
    keyField: {
      value: '',
      errorMessage: null
    },
    keys: newKeys
  }
}


const combinePage = (state = {
  message: '',
  keyField: {
    value: '',
    errorMessage: null
  },
  keys: []
}
, action) => {
  switch (action.type) {
    case CHANGE_KEY_FIELD_VALUE:
      return {
        ...state,
        keyField: {
          value: action.payload,
          errorMessage: null
        }
      }
    case SUBMIT_KEY:
      return handleSubmitKey(state, action)
    case DELETE_KEY:
      const newKeys = state.keys.slice()
      newKeys.splice(action.payload, 1)
      console.log(produceMessage(newKeys))
      return {
        message: produceMessage(newKeys),
        ...state,
        keys: newKeys
      }
    default:
      return state
  }
}

export default combinePage