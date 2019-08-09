import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = state => state;

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;