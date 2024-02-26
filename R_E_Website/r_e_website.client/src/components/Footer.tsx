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
                            <ul></ul>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer;