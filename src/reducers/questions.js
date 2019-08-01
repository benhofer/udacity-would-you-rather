import {
 ADD_QUESTION, 
 ANSWER_QUESTION,
 VOTE
} from '../constants/constants'

const initialState = [{
  id: 1,
  description: 'Pizza Toppings',
  author: 'Ben',
  case1: {
    text: 'Pepperoni and mushrooms',
    votes: 4
  },
  case2: {
    text: 'Ham and pineapple',
    votes: 8
  },
  time: '9:34pm',
  date: '9/23/2019'
}]

let newstate;

export default function questions(state = initialState, action) {
  let newstate;

  switch (action.type) {

    case ADD_QUESTION:
      let newquestion = {
        id: action.id,
        description: action.title,
        time: new Date().getTime(),
        author: action.author,
        case1: {
          text: action.case1,
          votes: 0
        },
        case2: {
          text: action.case1,
          votes: 0
        }
      }
      return [...state, newquestion];

    case ANSWER_QUESTION: 
      
      return newstate;

    case VOTE: 
      
      return newstate;

    default: return state;
  }
}

