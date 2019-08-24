import { connect } from 'react-redux'
import QuestionDetails from '../components/QuestionDetails'
import { ADD_QUESTION, VOTE } from '../constants/constants';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, { match }) => {
  const question = state.questions.filter((q) => q.id == match.params.question_id);
  return {
    q: question,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => ({
  addQuestion: (id, title, case1, case2, author) => dispatch({ type: ADD_QUESTION, id, title, case1, case2, author }),
  vote: (id, user, vote) => dispatch({ type: VOTE, id, user, vote })
})

const QuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetails)

export default withRouter(QuestionContainer);