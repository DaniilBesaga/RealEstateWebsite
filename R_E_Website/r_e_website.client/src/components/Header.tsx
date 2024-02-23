import '../style/Header.css';
import 'remixicon/fonts/remixicon.css';

function WelcomePage() {
    return (
        <header>
            <a className="logo" href="#">
                <img src="https://profirealt.com.ua/wp-content/themes/profirealt_child/access/images/Logo_PR_Profi_Realt_Colors.svg" />
            </a>
            <ul className="navlist">
                <li>
                    <a href="#">Каталог</a>
                    <i className="ri-arrow-down-s-fill"></i>
                </li>
                <li>
                    <a href="#">Послуги</a>
                    <i className="ri-arrow-down-s-fill"></i>
                </li>
                <li>
                    <a href="#">Про нас</a>
                    <i className="ri-arrow-down-s-fill"></i>
                </li>
                <li><a href="#">Контакти</a></li>
                <li>
                    <a href="#">Ще...</a>
                    <i className="ri-arrow-down-s-fill"></i>
                </li>
            </ul>

            <div className="social-media">
                <i className="ri-facebook-box-line"></i>
                <i className="ri-instagram-line"></i>
            </div>

            <p className="phone">+38 (098) 056-45-92</p>

            <ul className="langs">
                <li><a>Укр</a></li>
                <li><a>Ру</a></li>
            </ul>

            <button className="request">
                ЗАЛИШИТИ ЗАЯВКУ
            </button>

            <div className="bx bx-menu" id="menu-icon">

            </div>

            

        </header>
    );
}

export default WelcomePage;