import {
 ADD_QUESTION, 
 VOTE
} from '../constants/constants'

const initialState = [];

export default function questions(state = initialState, action) {

  switch (action.type) {

    case ADD_QUESTION:
      let newquestion = {
        id: action.id,
        description: action.title,
        time: new Date().toString(),
        utctime: (new Date).getTime(), 
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
      return [...state, newquestion];

    case VOTE: 
      let newstate = state.filter((q) => q.id !== action.id);
      let newquestionstate = state.filter((q) => q.id === action.id)
      
      switch (action.vote) {
        case 'case1': 
          newquestionstate[0].case1.numvotes++;
          newquestionstate[0].case1.votes.push(action.user);
          break;
        case 'case2': 
          newquestionstate[0].case2.numvotes++;
          newquestionstate[0].case2.votes.push(action.user);
      }

      return [...newstate, ...newquestionstate];

    default: return state;
  }
}

