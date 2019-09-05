import {
  ADD_QUESTION,
  VOTE
} from '../constants/constants';
import { getInitialData } from '../utils/api'

const initialData = getInitialData();

const initialState = {
  ...initialData.questions
};

export default function questions(state = initialState, action) {

  switch (action.type) {

    case ADD_QUESTION:
      let newquestion = {
        id: action.id,
        description: action.title,
        time: new Date().toString(),
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
      // _saveQuestion(newquestion);
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

      // _saveQuestionAnswer(action.user, action.id, action.vote);

      return [...newstate, ...newquestionstate];

    default: return state;
  }
}

