import { FILTERS } from "../constants/constants";

export default function filters(
  state = { answered: false, unanswered: true },
  action
) {
  switch (action.type) {
    case FILTERS:
      return action;
    default:
      return state;
  }
}
