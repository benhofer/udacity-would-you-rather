import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapDispatchToProps = dispatch => ({
  loginUser: (username) => dispatch({ type: 'LOGIN', username })
})

const mapStateToProps = state => state;

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer;

