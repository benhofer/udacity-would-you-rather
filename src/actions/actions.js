import * as types from '../constants/constants'

// Users
export const loginUser = (username) => ({ type: 'LOGIN', username })

// Questions
export const answerQuestion = (id, answerid) => ({ type: types.ANSWER_QUESTION, id, answerid })
