import { Link } from 'react-router-dom';
import Logotype from '../../assets/images/Logotype.png';
import Facebook from '../../assets/images/Facebook.png';
import Telegram from '../../assets/images/Telegram.png';
import Instagram from '../../assets/images/Instagram.png';
import GitHub from '../../assets/images/GitHub.png';
import './Style.scss';

function Footer() {
    return (
        <footer>
            <div className='my-3'>
                <Link to="/home" className='d-flex justify-content-center align-items-center'>
                    <img src={Logotype} alt="MenuWorld logotype" class="imgLogotype mx-2" />
                    <span className='logotype mx-2'>MenuWorld</span>
                </Link>
            </div>
            <div class="personalInformation">
                <ul class="socialMediaBar my-3">
                    <li>
                        <div><a href="https://www.facebook.com/people/Rub%C3%A9n-Gonz%C3%A1lez-Rodr%C3%ADguez/100011142169001/"><img src={Facebook} alt="Facebook logotype" /></a></div>
                        <div><a href="https://www.facebook.com/people/Rub%C3%A9n-Gonz%C3%A1lez-Rodr%C3%ADguez/100011142169001/">Rubén González Rodríguez</a></div>
                    </li>
                    <li>
                        <div><a href="https://t.me/RubenGon"><img src={Telegram} alt="Telegram logotype" /></a></div>
                        <div><a href="https://t.me/RubenGon">RubenGon</a></div>
                    </li>
                    <li>
                        <div><a href="https://www.instagram.com/ruben_gonzalezz00/?hl=es"><img src={Instagram} alt="Instagram logotype" /></a></div>
                        <div><a href="https://www.instagram.com/ruben_gonzalezz00/?hl=es">ruben_gonzalezz00</a></div>
                    </li>
                    <li>
                        <div><a href="https://github.com/RubenGonz"><img src={GitHub} alt="GitHub logotype" /></a></div>
                        <div><a href="https://github.com/RubenGonz">RubenGonz</a></div>
                    </li>
                </ul>

                <ul class="ayudaUsuario my-3">
                    <li>Ayuda</li>
                    <li>¿Cómo funciona?</li>
                    <li>Términos y condiciones</li>
                    <li>Información legal</li>
                    <li>Aviso de privacidad</li>
                    <li>Mapa del sitio</li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;