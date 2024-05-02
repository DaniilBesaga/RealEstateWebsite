import '../../style/services_style/Invest.css';
import '../../style/BuyEstateInfo.css';
import '../../style/services_style/Help.css';

function Invest() {
    return (
        <div className="invest-container" id="credit">
            <p className="inner-title-ul"><b>Інвестиція самостійно</b> - це:</p>
            <ul className="ul-buy-for">
                <li>
                    <i className="ri-check-line"></i>
                    <p>можливість придбання неліквідного об'єкта</p>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>інвестиція під впливом емоцій, без будь-яких розрахунків</p>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>інвестиція під впливом реклами забудовника, без аналізу ринку</p>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>інвестиція, під впливом «доброзичливих»людей і рекомендацій друзів</p>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>ймовірність старту продажу об'єкта інвестиції в «несприятливий період»</p>
                </li>
            </ul>

            <p className="inner-title-ul"><b>Інвестиції з нами </b> - це:</p>
            <ul className="ul-buy-for">
                <li>
                    <i className="ri-check-line"></i>
                    <p>аналіз ринку:</p>
                    <ul>
                        <li> - вибір кращих варіантів для інвестиції з точки зору капіталізації</li>
                        <li> - динаміка зростання вартості квадратного метра на різних етапах будівництва</li>
                    </ul>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>аналіз ризиків по кожному об'єкту інвестиції</p>
                    <ul>
                        <li> - юридичний супровід</li>
                        <li> - вивчення документів та історії забудовника</li>
                        <li> - перевірка дозвільної документації на будівництво</li>
                    </ul>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>продаж Вашого об'єкту інвестиції з гарантованим заробітком</p>
                    <ul>
                        <li> - вибір кращого періоду для реалізації об'єкта</li>
                        <li> - продаж за максимальною ринковою вартістю</li>
                    </ul>
                </li>
            </ul>
            <p style={{ fontSize:18 }}>Всі етапи супроводжуються при підтримці наших фахівців і постійного зв'язку з інвестором,
                що призводить до прибутковості від 10 до 30% річних від суми інвестиції.</p>
        </div>
    )
}

export default Invest;