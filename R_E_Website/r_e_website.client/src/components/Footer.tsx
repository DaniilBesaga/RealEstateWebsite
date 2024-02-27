import '../style/Footer.css';
import 'remixicon/fonts/remixicon.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="section-subsc">
                <span>Підпишіться на нашу розсилку</span>
                <div className="subsc-form">
                    <form>
                        <div className="part_form_inner">
                            <input type="email" placeholder="Ваш email_">
                            </input>
                            <button>ПІДПИСАТИСЯ</button>
                        </div>
                        <div className="part_form_checkboxes">
                            <span>
                                <input type="checkbox" value="Квартири" id="flats" />
                                <label htmlFor="flats"> Квартири </label>
                            </span>
                            <span>
                                <input type="checkbox" value="Будинки" id="houses" />
                                <label htmlFor="houses"> Будинки </label>
                            </span>
                            <span>
                                <input type="checkbox" value="Земля" id="ground" />
                                <label htmlFor="ground"> Земля </label>
                            </span>
                            <span>
                                <input type="checkbox" value="Комерція" id="commerc" />
                                <label htmlFor="commerc"> Комерція </label>
                            </span>
                        </div>
                        <div className="add-params">
                            <span>
                                <p>Додаткові параметри</p>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                            <div className="add-params-grid">
                                <span>
                                    <label>Кіл-сть кімнат:</label>
                                    <input type="number" placeholder="0"></input>
                                    <input type="number" placeholder="до"></input>
                                </span>
                                <span>
                                    <label>Заг. площа(кв.м):</label>
                                    <input type="number" placeholder="від"></input>
                                    <input type="number" placeholder="до"></input>
                                </span>
                                <span>
                                    <label>Ціна($):</label>
                                    <input type="number" placeholder="від"></input>
                                    <input type="number" placeholder="до"></input>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>   
            </div>

            <div className="footer-info-links">
                <div className="footer-info-part-1">
                    <img src="https://profirealt.com.ua/wp-content/themes/profirealt_child/access/images/PR_Profi_Realt_footer.svg" />
                </div>

                <div className="footer-info-part-2">
                    <ul>
                        <li>
                            <ul className="menu-item">
                                <li><a>Квартири</a></li>
                                <li><a>Будинки</a></li>
                                <li><a>Земля</a></li>
                                <li><a>Комерційна нерухомість</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-item">
                                <li><span><b>Послуги</b></span></li>
                                <li><a>Купуємо</a></li>
                                <li><a>Консультуємо</a></li>
                                <li><a>Міняємо</a></li>
                                <li><a>Допомагаємо</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-item">
                                <li style={{ opacity:0 }}><span><b>Послуги</b></span></li>
                                <li><a>Продаємо</a></li>
                                <li><a>Інвестуємо</a></li>
                                <li><a>Кредитуємо</a></li>
                                <li><a>Корисна інформація</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-item">
                                <li><span><b>Про компанію</b></span></li>
                                <li><a>Контакти</a></li>
                                <li><a>Про нас</a></li>
                                <li><a>Вакансії</a></li>
                                <li><a>Відгуки</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-other">
                <div className="section-other-part-1">
                    <div className="lang-switch">
                        <span>мова:</span>
                        <span>
                            <a className="active-link">Укр</a>
                            <a>Ру</a>
                        </span>
                    </div>
                    <div className="soc-media">
                        <p>Будьте на зв'язку</p>
                        <div>
                            <a><i className="ri-facebook-box-line"></i></a>
                            <a><i className="ri-instagram-line"></i></a>
                        </div>
                    </div>
                    <div className="partners">
                        <a href="https://address.ua/" target="_blank">
                            <img src="https://profirealt.com.ua/wp-content/uploads/2020/07/nfgtelkh.png"></img>
                        </a>
                        <a href="https://www.country.ua/" target="_blank">
                            <img src="https://profirealt.com.ua/wp-content/uploads/2020/07/kc5o5ciy.png" />
                        </a>
                        <a href="https://flatfy.ua/uk/нерухомість-київська-область" target="_blank">
                            <img src="https://profirealt.com.ua/wp-content/uploads/2020/09/Logo_black_tr-2x.png" />
                        </a>
                        <a href="https://domik.ua/" target="_blank">
                            <img src="https://profirealt.com.ua/wp-content/uploads/2020/07/9qdwl2z4.png" />
                        </a>

                    </div>
                </div>
                <div className="section-other-part-2">
                    <p>ProfiRealt © 2019 - 2024, <a>Угода користувача</a></p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;