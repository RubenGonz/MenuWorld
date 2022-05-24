import './Style.scss';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className="loginCard">
      <div className='loginTitle'>Log in</div>
      <div className='input-control'>
        <label htmlFor="userName">User name</label>
        <input type="text" id="userName" />
      </div>
      <div className='input-control'>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className='ask-control'>
        <a href="mailto:ruben30303030@gmail.com?subject=Recover%20Password">Forgotten your password?</a>
      </div>
      <Link to="/home" className='loginButton'>
        <button>Log in</button>
      </Link>
      <div>Don't have an account? <Link to="/sign_in" className='linkText'>Sign in</Link>
      </div>
    </div>
  );
}

export default LogIn;