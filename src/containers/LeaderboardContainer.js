import { connect } from 'react-redux'
import Leaderboard from '../components/Leaderboard'

const mapStateToProps = state => state;

const LeaderboardContainer = connect(
  mapStateToProps
)(Leaderboard)

export default LeaderboardContainer