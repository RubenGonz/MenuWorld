import './Style.scss';
import { Link } from 'react-router-dom';
import Logotype from '../../assets/images/Logotype.png';

function NoPage() {
  return (
    <>
      <main className='noPage'>
        <div className='imagen'>
        </div>
        <section>
          <div className='alert-box p-2'>
            <div>
              <div className='error-message'>¿Are you lost?</div>
              <div className='error-type'>Error 404</div>
            </div>
            <Link to="/" className='link'>
              <div className='linkText'>Back to home page</div>
              <img src={Logotype} alt="Logotype" className='linkedImg' />
            </Link>
          </div>
        </section>
        <div className='imagen'>
        </div>
      </main>
    </>
  );
}

export default NoPage;