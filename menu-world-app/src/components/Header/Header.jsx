import { Link } from 'react-router-dom';
import Logotype from '../../assets/images/Logotype.png';
import './Style.scss';

function Header() {
    return (
        <nav className='d-flex justify-content-between py-2'>
            <div className='d-flex align-items-center'>
                <Link to="/home" className='d-flex justify-content-center align-items-center'>
                    <img src={Logotype} alt="MenuWorld logotype" class="imgLogotype mx-2" />
                    <span className='logotype mx-2'>MenuWorld</span>
                </Link>
            </div>
            <div className='d-flex align-items-center'>
                <button>Hola</button>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/nopage" class="nav-link">Otra pagina</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/nopage" class="nav-link">Otra pagina</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;