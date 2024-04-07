import React from 'react';
import '../style/Header.css';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

function WelcomePage() {

    const [displaySubMenu, setDisplaySubMenu] =
        React.useState({ showCatalog: false, showServices: false, showAbout: false, showElse: false });

    const handleMouseEnter = (property: string) => {
        setDisplaySubMenu(prevState => ({ ...prevState, [property]:true }));
    }

    const handleMouseLeave = (property: string) => {
        setDisplaySubMenu(prevState => ({ ...prevState, [property]: false }));
    }

    return (
        <header>
            <a className="logo" href="#">
                <img src="https://profirealt.com.ua/wp-content/themes/profirealt_child/access/images/Logo_PR_Profi_Realt_Colors.svg" />
            </a>
            <ul className="navlist">
                <li onMouseEnter={()=>handleMouseEnter('showCatalog')}
                    onMouseLeave={()=>handleMouseLeave('showCatalog')}>
                    <div style={{ background: displaySubMenu.showCatalog ? "#f1f1f0" : 'white' }}>
                        <Link to="#">
                            Каталог
                        </Link>
                        <i className={displaySubMenu.showCatalog ? "ri-arrow-down-s-line rotated" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showCatalog ? "block" : 'none' }}>
                        <li><Link to="/catalog">
                            Квартири
                        </Link></li>
                        <li><Link to="/catalog">
                            Будинки
                        </Link></li>
                        <li><Link to="/catalog">
                            Земля
                        </Link></li>
                        <li><Link to="/catalog">
                            Комерційна нерухомість
                        </Link></li>
                    </ul>
                </li>
                <li onMouseEnter={() => handleMouseEnter('showServices')}
                    onMouseLeave={() => handleMouseLeave('showServices')}>
                    <div style={{ background: displaySubMenu.showServices ? "#f1f1f0" : 'white' }}>
                        <a href="#">Послуги</a>
                        <i className={displaySubMenu.showServices ? "ri-arrow-down-s-line rotated" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showServices ? "block" : 'none' }}>
                        <li><Link to="/pokupka-neruhomosti">
                            Купівля
                        </Link></li>
                        <li><Link to="/prodazh-neruhomosti">
                            Продаж
                        </Link></li>
                        <li><Link to="/services">
                            Інші послуги
                        </Link></li>
                    </ul>
                </li>
                <li onMouseEnter={() => handleMouseEnter('showAbout')}
                    onMouseLeave={() => handleMouseLeave('showAbout')}>
                    <div style={{ background: displaySubMenu.showAbout ? "#f1f1f0" : 'white' }}>
                        <a href="#">Про нас</a>
                        <i className={displaySubMenu.showAbout ? "ri-arrow-down-s-line rotated" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showAbout ? "block" : 'none' }}>
                        <li><Link to="/about">
                            Інформація
                        </Link></li>
                        <li><a>Вакансії</a></li>
                        <li><a>Відгуки</a></li>
                    </ul>
                </li>
                <li style={{ paddingBottom: 15, paddingTop: 15 }}>
                    <li><Link to="/contact">
                        Контакти
                    </Link></li>
                </li>
                <li onMouseEnter={() => handleMouseEnter('showElse')}
                    onMouseLeave={() => handleMouseLeave('showElse')}>
                    <div style={{ paddingRight: 15, background: displaySubMenu.showElse ? "#f1f1f0" : 'white' }}>
                        <a href="#">Ще...</a>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showElse ? "block" : 'none' }}>
                        <li><Link to="/conpendium">
                            Корисна інформація
                        </Link></li>
                    </ul>
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