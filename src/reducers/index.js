import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'

const reducer = combineReducers({
  questions,
  users
})

export default reducer;
