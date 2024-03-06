import React from 'react';
import '../style/Header.css';
import 'remixicon/fonts/remixicon.css';

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
                        <a href="#">Каталог</a>
                        <i className={displaySubMenu.showCatalog ? "ri-arrow-down-s-line rotated" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showCatalog ? "block" : 'none' }}>
                        <li><a>Квартири</a></li>
                        <li><a>Будинки</a></li>
                        <li><a>Земля</a></li>
                        <li><a>Комерційна нерухомість</a></li>
                    </ul>
                </li>
                <li onMouseEnter={() => handleMouseEnter('showServices')}
                    onMouseLeave={() => handleMouseLeave('showServices')}>
                    <div style={{ background: displaySubMenu.showServices ? "#f1f1f0" : 'white' }}>
                        <a href="#">Послуги</a>
                        <i className={displaySubMenu.showServices ? "ri-arrow-down-s-line rotated" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showServices ? "block" : 'none' }}>
                        <li><a>Купівля</a></li>
                        <li><a>Продаж</a></li>
                        <li><a>Інші послуги</a></li>
                    </ul>
                </li>
                <li onMouseEnter={() => handleMouseEnter('showAbout')}
                    onMouseLeave={() => handleMouseLeave('showAbout')}>
                    <div style={{ background: displaySubMenu.showAbout ? "#f1f1f0" : 'white' }}>
                        <a href="#">Про нас</a>
                        <i className={displaySubMenu.showAbout ? "ri-arrow-down-s-line rotated" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showAbout ? "block" : 'none' }}>
                        <li><a>Інформація</a></li>
                        <li><a>Вакансії</a></li>
                        <li><a>Відгуки</a></li>
                    </ul>
                </li>
                <li style={{ paddingBottom: 15, paddingTop: 15 }}>
                    <a href="#">Контакти</a>
                </li>
                <li onMouseEnter={() => handleMouseEnter('showElse')}
                    onMouseLeave={() => handleMouseLeave('showElse')}>
                    <div style={{ paddingRight: 15, background: displaySubMenu.showElse ? "#f1f1f0" : 'white' }}>
                        <a href="#">Ще...</a>
                    </div>
                    <ul className="sub-menu" style={{ display: displaySubMenu.showElse ? "block" : 'none' }}>
                        <li><a>Корисна інформація</a></li>
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