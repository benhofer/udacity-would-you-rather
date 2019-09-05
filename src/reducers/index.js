import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authedUser'

const reducer = combineReducers({
  authedUser,
  users,
  questions
})

export default reducer;
