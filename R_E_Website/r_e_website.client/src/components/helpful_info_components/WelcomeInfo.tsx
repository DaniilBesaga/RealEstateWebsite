import '../../style/helpful_info/WelcomeInfo.css';
import '../../style/BuyEstateInfo.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

function WelcomeInfo() {

    const [showSubmenu, setShowSubmenu] = useState(false);

    return (
        <div className="welcome_info_container">

            <Navigation url={"/, /compendium"} urlTitle={"Головна/Корисна інформація"} />
            <div className="welcome_info_content">
                <div className="inpage-nav">
                    <a onMouseEnter={() => setShowSubmenu(true)}>Серії житлових будинків</a>
                    <Link to="/residential-complexes">
                        Житлові комлекси Києва
                    </Link>
                </div>
                <div className="welcome-hello"  onMouseLeave={() => setShowSubmenu(false)}>
                    <div className="welcome-sub-menu" style={{
                        visibility: showSubmenu ? 'visible' : 'hidden',
                        opacity: showSubmenu ? '1' : '0',
                        marginLeft: showSubmenu ? '-59px' : '-100px'
                    }}>
                        <ul>
                            <li><a>АППС</a></li>
                            <li><a>Гостинка</a></li>
                            <li><a>КТ</a></li>
                        </ul>
                        <ul>
                            <li><a>АППС-ЛЮКС</a></li>
                            <li><a>ЕС</a></li>
                            <li><a>КТУ</a></li>
                        </ul>
                        <ul>
                            <li><a>Б-5</a></li>
                            <li><a>Коробочка</a></li>
                            <li><a>Серія 134</a></li>
                        </ul>
                    </div>
                    <h2>Раді вітати Вас в розділі корисної інформації.</h2>
                    <p>У цьому інформаційному блоці ми зібрали серії будинків з їхніми плюсами і недоліками, роками
                        споруди, прикладами планувань і фотографіями будинків, а також житлові комплекси введені в
                        експлуатацію і на етапі будівництва, які розташовані в Києві та Київській області,
                        з детальним описом, характеристиками, фото та інформацією, хто забудовник, щоб ви не
                        витрачали час на пошуки в Google, а отримали її у нас і сміливо могли приступити до
                        вибору об’єктів.</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeInfo;