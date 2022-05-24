import { Link } from 'react-router-dom';
import './Style.scss';

function SignIn() {
  return (
    <>
      <main className='signIn'>
        <div className='imagen'>
        </div>
        <section>
          <div className='signInCard'>
            <div className='signInTitle'>Sign in</div>
            <div className='input-control'>
              <label htmlFor='fullName'>Full name</label>
              <input type='text' id='fullName' />
            </div>
            <div className='input-control'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className='input-control'>
              <label htmlFor='tel'>Mobile number</label>
              <input type='number' id='tel' />
            </div>
            <div className='input-control'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <Link to="/home" className='signInButton'>
              <button id='signIn'>Sign in</button>
            </Link>
          </div>
        </section>
        <div className='imagen'>
        </div>
      </main>
    </>
  );
}

export default SignIn;