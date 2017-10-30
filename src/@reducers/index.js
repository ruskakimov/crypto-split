import { combineReducers } from 'redux'
import splitPage from './splitPage'
import combinePage from './combinePage'

const rootReducer = combineReducers({
  split: splitPage,
  combine: combinePage
})

export default rootReducer