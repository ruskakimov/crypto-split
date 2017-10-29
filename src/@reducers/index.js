import { combineReducers } from 'redux'
import splitPage from './splitPage'

const rootReducer = combineReducers({
  split: splitPage
})

export default rootReducer