import { connect } from "react-redux";
import Leaderboard from "../components/Leaderboard";
import { withRouter } from "react-router-dom";
import { VOTE } from "../constants/constants";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  vote: (rank, id, user, vote) =>
    dispatch({ type: VOTE, rank, id, user, vote }),
});

const LeaderboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);

export default withRouter(LeaderboardContainer);
