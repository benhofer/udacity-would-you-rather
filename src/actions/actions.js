import * as types from '../constants/constants'

// Users
export const loginUser = (username) => ({ type: 'LOGIN', username })

// Questions
export const addQuestion = (id, description) => ({ type: types.ADD_QUESTION, id, description })
export const answerQuestion = (id, answerid) => ({ type: types.ANSWER_QUESTION, id, answerid })
