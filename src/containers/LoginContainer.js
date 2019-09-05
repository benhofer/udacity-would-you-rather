import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => state;

const LoginContainer = connect(
  mapStateToProps
)(LoginForm)

export default LoginContainer;