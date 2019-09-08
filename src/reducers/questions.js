import {
  ADD_QUESTION,
  VOTE,
  RECEIVE_QUESTIONS
} from '../constants/constants';
import { getInitialData } from '../utils/api'

const initialData = getInitialData();

const initialState = {
  ...initialData.questions
};

export default function questions(state = initialState, action) {

  switch (action.type) {

    case RECEIVE_QUESTIONS: 
      return {
        ...state,
        ...action.questions,
      }

    case ADD_QUESTION:
      let newquestion = {
        id: action.id,
        description: action.title,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        ts: Date.now(),
        author: action.author,
        case1: {
          text: action.case1,
          numvotes: 0,
          votes: []
        },
        case2: {
          text: action.case2,
          numvotes: 0,
          votes: []
        }
      }
      return {
        ...state, 
        [action.id]: newquestion
      }

    case VOTE:
     return {
       ...state,
       [action.id] : {
          ...state[action.id],
          [action.vote]: {
            ...state[action.id][action.vote],
            votes: [
              ...state[action.id][action.vote].votes, 
              action.user
            ],
            numvotes: state[action.id][action.vote].numvotes+1
          }
       }
     }

    default: return state;
  }
}

