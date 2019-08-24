import {
  SET_FILTER
} from '../constants/constants'

const initialState = {
  Answered: false,
  Unanswered: true
}

export default function filtercb(state = initialState, action) {

  switch (action.type) {

    case SET_FILTER:
      let newstate = state;
      if (!!action.Answered) {
        newstate.Answered = !state.Answered;
      } else if (!!action.Unanswered) {
        newstate.Unanswered = !state.Unanswered;
      }
      return newstate;

    default: return initialState;
  }
}

