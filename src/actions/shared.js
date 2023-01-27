import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { receiveFilters } from "../actions/filters";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData(id, cb) {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions, filters }) => {
        dispatch(hideLoading());
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(receiveFilters(filters));
        dispatch(setAuthedUser(id));
      })
      .then(() => cb());
  };
}
