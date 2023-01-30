import { VOTE, ADD_QUESTION, RECEIVE_USERS } from "../constants/constants";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          numquestions: state[action.author].numquestions + 1,
        },
      };

    case VOTE:
      // console.log(action);
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          numvotes: state[action.user].numvotes + 1,
          votes: {
            ...state[action.user].votes,
            [action.id]: action.vote,
          },
        },
      };

    default:
      return state;
  }
}
