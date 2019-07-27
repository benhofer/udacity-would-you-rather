import { connect } from 'react-redux'
import Home from '../components/Home'
import { ADD_QUESTION } from '../constants/constants';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addQuestion: (id, title, case1, case2, author) => dispatch({ type: ADD_QUESTION, id, title, case1, case2, author})
})

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default withRouter(HomeContainer);