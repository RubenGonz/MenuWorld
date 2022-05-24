import { Link } from 'react-router-dom';
import Logotype from '../../assets/images/Logotype.png';
import Footer from '../Footer/Footer';
import './Style.scss';

function Header() {
    return (
        <nav className='d-flex justify-content-between py-2'>
            <div className='d-flex align-items-center'>
                <Link to="/" className='d-flex justify-content-center align-items-center'>
                    <img src={Logotype} alt="MenuWorld logotype" className="imgLogotype mx-2" />
                    <span className='logotype mx-2'>MenuWorld</span>
                </Link>
            </div>
            <div className='pageInfoContainer'>
                <h3 data-bs-toggle="offcanvas" data-bs-target="#pageInfo" aria-controls="offcanvasBottom">Page info</h3>
            </div>
            <div class="offcanvas offcanvas-bottom" id="pageInfo" >
                <div class="offcanvas-body p-0 offcanvasContainer">
                <Footer></Footer>
                </div>
            </div>
        </nav>
    );
}

export default Header;