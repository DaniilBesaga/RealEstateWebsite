import '../style/SellEstateInfo.css';
import '../style/BuyEstateInfo.css';
import 'remixicon/fonts/remixicon.css';
import OrderService from '../components/OrderService'

function SellEstateInfo() {
    return (
        <div className="sell-estate-container">
            <div className="page-nav">
                <div>
                    <i className="ri-arrow-left-s-line"></i>
                    <a>Головна</a>
                </div>
                <span>/</span>
                <p>Продаж нерухомості</p>
            </div>
            <div className="buy-estate-grid" style={{ marginTop: 0 }}>
                
                <div className="buy-estate-grid-item">
                    <h2>У нас вже є покупці на Вашу квартиру!</h2>
                    <p>Продати квартиру в Києві ви можете і самі, але <b>з нами ви продасте її швидше та дорожче.</b></p>
                    <p>Ми з’ясували, що власники квартир у Києві витрачають на продаж самотужки на
                        30-60% більше зусиль та часу, ніж це дійсно необхідно.</p>
                    <p>Проблема в тому, що продаж своєї квартири часто доручають кільком агентам.</p>
                    <p>Тим самим запускають гонку, в якій перемагає той агент, який пропонує найменшу вартість покупцю.</p>
                    <p>У результаті ви втрачаєте свій час та гроші</p>
                    <h3>МИ ПРОДАЄМО КВАРТИРИ В КИЄВІ ШВИДКО, ТОМУ ЩО
                        У НАС ВЖЕ Є ПОКУПЦІ НА ВАШУ КВАРТИРУ!</h3>
                </div>
                <div className="buy-estate-grid-item"
                    style={{ backgroundImage: 'url(https://profirealt.com.ua/wp-content/uploads/2024/01/photo_2023-07-24_13-36-35.jpg)' }}>

                </div>
            </div>

            <div className="grid-3-container">
                <h2>Як ми продаємо квартири в Києві дорого і швидко:</h2>
                <div className="grid-3">
                    <p>
                        <b>Маркетинговий план</b>
                        Створюємо високий попит на вашу квартиру, рекламуючи її не тільки на порталах.
                    </p>
                    <p>
                        <b>Обширна реклама</b>
                        Застосовуємо індивідуальні стратегії рекламного просування. Своя база «гарячих» покупців.
                    </p>
                    <p>
                        <b>Управління попитом</b>
                        Досягаємо високої ціни продажу, вміло проводячи переговори.
                    </p>
                    <p>
                        <b>Гарна подача</b>
                        Підвищуємо вартість квартири за технологією Home Staging.
                    </p>
                    <p>
                        <b>Партнерські продажі</b>
                        Залучаємо понад 70 агентств до продажу вашої квартири та ділимося з ними комісією.
                    </p>
                    <p>
                        <b>Безпечні угоди</b>
                        Досвідчені юристи ведуть угоди, контролюють реєстрацію та розрахунки.
                    </p>
                </div>
            </div>

            <div className="grid-odd-even-container">
                <h2>Чому інші агенції не можуть продавати так дорого і швидко, як ми?</h2>
                <div className="grid-odd-even">
                    <div>
                        <p>Беруть багато квартир і не продають, а лише рекламують</p>
                    </div>
                    <div>
                        <p>Не вміють готувати квартиру до продажу, красиво «упаковувати»</p>
                    </div>
                    <div>
                        <p>Не знають як створити попит, створити чергу з покупців квартир</p>
                    </div>
                    <div>
                        <p>Мають слабкі навички переговорів для захисту інтересів власника</p>
                    </div>
                    <div>
                        <p>Не мотивовані продати дорого через гостру потребу в комісії</p>
                    </div>
                </div>
            </div>

            <div className="buy-estate-grid">

                <div className="buy-estate-grid-item"
                    style={{ backgroundImage: 'url(https://profirealt.com.ua/wp-content/uploads/2024/01/photo_2023-07-24_13-32-53_1.jpg)' }}>
                </div>

                <div className="buy-estate-grid-item right">
                    <h2 className="not-style-h2">З ким ми працюємо?</h2>
                    <p className="inner-title-ul">Ми працюємо з власникам, які</p>
                    <ul className="ul-buy-for">
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Хочуть продати свою нерухомість вигідно;</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Готові віддати продаж до рук спеціаліста, а не намагаються бути фахівцями;</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Готові платити за результат винагороду, гідну професіоналів;</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Впевнені в результаті та прислухаються до свого експерта.</p>
                        </li>
                    </ul>
                    <p className="inner-title-ul">З ким ми НЕ працюємо?</p>
                    <p className="inner-title-ul">Ми не працюємо з тими, хто:</p>
                    <ul className="ul-buy-for">
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Не впевнені, що зараз слушний час для продажу нерухомості;</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Хочуть продати квартиру за завищеною ціною, ігноруючи думку експерта;</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Не бажають оплачувати послуги, тому що вважають, що рієлтор нічого не робить;</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Вважають, що знають як продати нерухомість краще за експерта, не довіряють його досвіду.</p>
                        </li>
                    </ul>

                </div>

                
                <div className="buy-estate-grid-item left" style={{ marginTop: 50 }}>
                    <p className="inner-title-ul">Як продає нерухомість більшість?</p>
                    <ul className="ul-buy-for">
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Пилососять об’єкти в інтернеті, беруть фото власника (зрідка приїжджають на перегляд та
                                роблять фото самостійно на телефон).</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Подають рекламу об’єкта на кілька ресурсів в інтернеті та чекають на дзвінок
                                від потенційного покупця.</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Зрідка, коли з’являється клієнт, телефонують продавцю.</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>На показах стоять біля дверей, бо розповісти про плюси об’єкта не можуть.</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Проводять презентації на пальцях.</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Не представляють нічиї інтереси, крім своїх.</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Урізають вартість об’єкта з метою швидкого продажу.</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Торгуються із продавцями за вартістю, але ніяк не на суму своїх комісійних.</p>
                        </li>
                        <li>
                            <i className="ri-check-line"></i>
                            <p>Не співпрацюють ні з ким, не бажаючи ділитися комісійними.</p>
                        </li>
                    </ul>
                    
                </div>

                <div className="buy-estate-grid-item"
                    style={{ backgroundImage: 'url(https://profirealt.com.ua/wp-content/uploads/2024/01/photo_2023-07-24_13-32-54-2.jpg)' }}>
                </div>
                
            </div>

            <div className="grid-2-container">
                <h2>Як ми продаємо Вашу квартиру в Києві</h2>
                <div className="grid-2">
                    <div>
                        <p className="inner-title-ul">1 етап</p>
                        <ul className="ul-buy-for">
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Перевірка правовстановлюючих документів.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Експрес оцінка методом порівняння.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Професійна консультація щодо покращення стану об’єкта (home staging).</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Складання покрокового плану продажу.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Розміщення інформації про об’єкт у БД компанії.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Аналіз цільової аудиторії покупців.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Написання тексту оголошення для розміщення у мережі Internet.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Написання тексту листа ключовим партнерам (e-mail, sms).</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Написання тексту розсилки потенційним покупцям.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Написання тексту оголошення (флаєр).</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Обдзвон гарячих клієнтів та пропозиція об’єкта (база відкладеного попиту).</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Обдзвон партнерів.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Проміжні висновки.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="inner-title-ul">2 етап</p>
                        <ul className="ul-buy-for">
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Фото та відеозйомка.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Обробка фотоматеріалів.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>SMS розсилка потенційним покупцям.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>SMS розсилка партнерам.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Індивідуальне розсилання інформації щодо продажу агентам компанії.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Розміщення об’єкта в соцмережах.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Розміщення оголошення на топ 30 найкращих сайтах.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Преміум-розміщення оголошення в інтернеті.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Створення шаблону landing page*.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Прийом дзвінків, відповіді, консультації.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Проміжні висновки.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="inner-title-ul">3 етап</p>
                        <ul className="ul-buy-for">
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Аналіз локації (для розклеювання) та замовлення розклеювача.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Просування об’єкта в соцмережах*.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Інформування консьєржів, керуючих компаній, сусідів та ін.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Замовлення розклеювання оголошень (хенгерів).</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Розміщення банера*.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Створення та публікація landing page*.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Прийом дзвінків, відповіді, консультації.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Проміжні висновки.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="inner-title-ul">4 етап</p>
                        <ul className="ul-buy-for">
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Оптимізація відео (слайдшоу) для YouTube.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Публікація відео (слайдшоу) на YouTube.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Перевірка розміщення оголошень на 30 найкращих сайтах.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Поклейка оголошень (хенгерів).</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Контрольна перевірка landing page (працездатність усіх віджетів)*.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Налаштування та запуск контекстної реклами*.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Перевірка розклеювання оголошень та хенгерів*.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Прийом дзвінків, відповіді, консультації.</p>
                            </li>
                            <li>
                                <i className="ri-checkbox-blank-circle-fill"></i>
                                <p>Підготовка та надсилання звіту клієнту (оголошення в мережі Internet+e-mail та
                                    SMS розсилання+landing page).</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="grid-4-container">
                <h2 className="not-style-h2">З чого почати роботу з Profi Realt<br />
                    Почати працювати з нами просто як 1, 2, 3</h2>
                <div className="grid-4">
                    <div>
                        <p><b>1. Запропонуйте свою нерухомість</b></p>
                        <p>Заповніть заявку і наш співробітник, який спеціалізується на Вашому типі нерухомості,
                            зв’яжеться з Вами.</p>
                    </div>
                    <div>
                        <p><b>2. Ми знайдемо покупців</b></p>
                        <p>Ми зробимо пропозицію обраним покупцям із нашої бази. Розмістимо рекламу об’єкта на великому
                            переліку рекламних майданчиків.</p>
                    </div>
                    <div>
                        <p><b>3. Ви отримуєте вигідну угоду</b></p>
                        <p>Ви підтверджуєте згоду на угоду з покупцем, а ми проведемо її безоплатно та вигідно для Вас.</p>
                    </div>
                </div>
            </div>

            <h2 className="not-style-h2" style={{ textAlign: 'center', marginTop:100 }}>Телефонуйте нам прямо зараз<br/>
                І дізнайтеся як продати квартиру<br />
                на 10% дорожче ринку</h2>

            <OrderService />

        </div>
    )
}

export default SellEstateInfo