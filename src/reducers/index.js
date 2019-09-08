import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

const reducer = combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})

export default reducer;
