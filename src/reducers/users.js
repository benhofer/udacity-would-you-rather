import {
  LOGIN,
  VOTE,
  ADD_QUESTION,
  RECEIVE_USERS
} from '../constants/constants'
import { getInitialData } from '../utils/api'

let newstate;
let newuser;
let newstateusers;

export default function users(state = {}, action) {
  switch (action.type) {
    
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }

    case LOGIN:
      newstate = state;
      newstate.activeuser.id = action.id;
      newstate.activeuser.name = action.username;
      return newstate;

    case ADD_QUESTION:
      return {
        ...state,
        numquestions: state.numquestions + 1
      }

    case VOTE:
      console.log(action);
      return {
        ...state,
        [action.user] : {
          ...state[action.user],
          numvotes: state[action.user].numvotes+1,
          votes: {
            ...state[action.user].votes,
            [action.id]: action.vote
          },
        }
      }

    default: return state;

  }
}