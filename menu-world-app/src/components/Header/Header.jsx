import { Link } from 'react-router-dom';
import logo from './Logo.png';
import './Style.scss';

function Header() {
    return (
        <nav className='d-flex justify-content-between py-2'>
            <div className='d-flex align-items-center'>
                <Link to="/home" className='d-flex justify-content-center align-items-center'>
                    <img src={logo} alt="Logo de MenuWorld" class="imgLogo" />
                    <div className='d-inline-block fw-bold text-center'>
                        <span className='nombreLogo'>Menu</span>
                        <hr className='m-1 mb-0'/>
                        <span className='nombreLogo'>World</span>
                    </div>
                </Link>
            </div>
            <div>
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