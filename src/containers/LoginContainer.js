import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { handleInitialData } from '../actions/shared';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return {
    getData: (id, addHistory) => dispatch(handleInitialData(id, addHistory)),
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)


export default LoginContainer;