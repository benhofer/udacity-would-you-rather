import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import filtercb from './filter'

const reducer = combineReducers({
  questions,
  users,
  filtercb
})

export default reducer;
