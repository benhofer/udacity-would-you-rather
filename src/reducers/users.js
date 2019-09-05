import {
  LOGIN,
  VOTE,
  ADD_QUESTION
} from '../constants/constants'
import { getInitialData } from '../utils/api'

let newstate;
let newuser;
let newstateusers;

export default function users(state = {}, action) {
  switch (action.type) {

    case LOGIN:
      newstate = state;
      newstate.activeuser.id = action.id;
      newstate.activeuser.name = action.username;
      return newstate;

    case ADD_QUESTION:
      newstate = state;
      newuser = newstate.users.filter((u) => (action.author === u.id))[0];
      newstateusers = newstate.users.filter((u) => action.author !== u.id);

      newuser.numquestions++;

      return {
        activeuser: {
          name: newstate.activeuser.name,
          id: newstate.activeuser.id
        },
        users: [
          newuser,
          ...newstateusers
        ]
      }

    case VOTE:
      newstate = state;
      newuser = newstate.users.filter((u) => action.user === u.name);
      newstateusers = newstate.users.filter((u) => action.user !== u.name);
      newuser[0].votes[action.id] = action.vote;
      newuser[0].numvotes++;

      return {
        activeuser: {
          name: newstate.activeuser.name,
          id: newstate.activeuser.id
        },
        users: [
          newuser[0],
          ...newstateusers
        ]
      }
    default: return state;

  }
}