import {
 ADD_QUESTION, 
 ANSWER_QUESTION,
 VOTE
} from '../constants/constants'

const initialState = [{
  id: new Date().getTime(),
  description: 'Pizza Toppings',
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
  switch (action.type) {

    case ADD_QUESTION:
     
      return newstate;

    case ANSWER_QUESTION: 
      
      return newstate;

    case VOTE: 
      
      return newstate;

    default: return state;
  }
}

