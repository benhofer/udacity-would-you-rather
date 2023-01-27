import {
  _getUsers,
  _getQuestions,
  _getFilters,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions(), _getFilters()]).then(
    ([users, questions, filters]) => ({
      users,
      questions,
      filters,
    })
  );
}

export function saveQuestionAPI(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}
