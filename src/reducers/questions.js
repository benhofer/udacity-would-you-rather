import {
 ADD_QUESTION, 
 VOTE
} from '../constants/constants'

const initialState = [{
  id: 123456789,
  description: 'Pizza Toppings',
  author: 'Ben',
  case1: {
    text: 'Have a pizza with pepperoni and mushrooms',
    numvotes: 4,
    votes: ['Ben', 'Julie', 'Lauren', 'Kate']
  },
  case2: {
    text: 'Have a pizza with ham and pineapple',
    numvotes: 8,
    votes: ['Ben', 'Julie', 'Lauren', 'Kate', 'Winter', 'Jim', 'Oswald', 'John']
  },
  time: '9:34pm',
  date: '9/23/2019'
}]

export default function questions(state = initialState, action) {

  switch (action.type) {

    case ADD_QUESTION:
      let newquestion = {
        id: action.id,
        description: action.title,
        time: new Date().getTime(),
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

