import { connect } from "react-redux";
import { FILTERS } from "../constants/constants";
import { withRouter } from "react-router-dom";
import FilterControls from "../components/FilterControls";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  changeFilters: (filters) => dispatch({ type: FILTERS, filters }),
});

const FilterControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterControls);

export default withRouter(FilterControlsContainer);
