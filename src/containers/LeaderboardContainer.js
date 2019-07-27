import { connect } from 'react-redux'
import Leaderboard from '../components/Leaderboard'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => state;

const LeaderboardContainer = connect(
  mapStateToProps
)(Leaderboard)

export default withRouter(LeaderboardContainer)