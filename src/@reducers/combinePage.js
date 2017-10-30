import { CHANGE_KEY_FIELD_VALUE, SUBMIT_KEY } from '@constants'
import { produceMessage } from '@helpers'

function handleSubmitKey(state, action) {
  if (state.keys.length === 0 ||
      state.keys[0].length === action.payload.length)
  {
    const newKeys = [ action.payload, ...state.keys ]
    return {
      message: produceMessage(newKeys),
      keyField: {
        value: '',
        errorMessage: null
      },
      keys: newKeys
    }
  }
  return {
    ...state,
    keyField: {
      ...state.keyField,
      errorMessage: `Key does not match the length of previously entered keys!`
    }
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
    default:
      return state
  }
}

export default combinePage