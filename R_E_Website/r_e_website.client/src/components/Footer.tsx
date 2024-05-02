import { useState } from 'react';
import '../style/Footer.css';
import 'remixicon/fonts/remixicon.css';
import SuccessLabel from './SuccessLabel';
import { Link } from 'react-router-dom';

interface Newsletter {
    email: string,
    estateType: string,
    roomsCountFrom: number,
    roomsCountTo: number,
    totalSquareFrom: number,
    totalSquareTo: number,
    priceRangeFrom: number,
    priceRangeTo: number
}

enum EstateType {
    Flat,
    House,
    Land,
    Commerce
}
function Footer() {

    const [showAdd, setShowAdd] = useState(false);

    const [estateType, setEstateType] = useState<EstateType[]>([]);

    const [success, setSuccess] = useState(false);

    
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>,
        selectedEstateType: EstateType) => {
        if (e.target.checked) {
            setEstateType([...estateType, selectedEstateType])
            setEstateType(estateType => {
                setFormData(newsletter => ({ ...newsletter, estateType: estateType.map(type => EstateType[type]).join(", ") }))
                return estateType;
            });
        }
        else {
            setEstateType(estateType.filter(type => type != selectedEstateType))
        }
        
    }
    const validEstateTypes = [
        EstateType.Flat,
        EstateType.House,
        EstateType.Land,
        EstateType.Commerce
    ];

    async function postNewsletter() {

        const requestData: Newsletter = {
            email: formData.email,
            estateType: formData.estateType.length > 0 ? formData.estateType :
                validEstateTypes.map(type => EstateType[type]).join(", "),
            roomsCountFrom: formData.priceRangeFrom,
            roomsCountTo: formData.priceRangeTo,
            totalSquareFrom: formData.totalSquareFrom,
            totalSquareTo: formData.totalSquareTo,
            priceRangeFrom: formData.priceRangeFrom,
            priceRangeTo: formData.priceRangeTo
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        }
        const response = await fetch('/api/newsletter', requestOptions);
        setSuccess(response.ok ? true : false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postNewsletter();
    }

    const [formData, setFormData] = useState({
        email: '',
        estateType: EstateType[EstateType.Flat],
        roomsCountFrom: 0,
        roomsCountTo: 0,
        totalSquareFrom: 0,
        totalSquareTo: 0,
        priceRangeFrom: 0,
        priceRangeTo: 0
    });
    
    return (
        <footer className="footer">
            {success ? <SuccessLabel success={success} /> : null}
            <div className="section-subsc">
                <span>Підпишіться на нашу розсилку</span>
                <div className="subsc-form">
                    <form onSubmit={handleSubmit}>
                        <div className="part_form_inner">
                            <input type="email" placeholder="Ваш email_"
                                value={formData.email}
                                onChange={e => setFormData(newsletter => ({ ...newsletter, email: e.target.value }))}>
                            </input>
                            <button type="submit">ПІДПИСАТИСЯ</button>
                        </div>
                        <div className="part_form_checkboxes">
                            <span>
                                <input type="checkbox" value="Квартири" id="flats" onChange={(e) => handleCheckboxChange(e, EstateType.Flat)} />
                                <label htmlFor="flats"> Квартири </label>
                            </span>
                            <span>
                                <input type="checkbox" value="Будинки" id="houses" onChange={(e) => handleCheckboxChange(e, EstateType.House)} />
                                <label htmlFor="houses"> Будинки </label>
                            </span>
                            <span>
                                <input type="checkbox" value="Земля" id="land" onChange={(e) => handleCheckboxChange(e, EstateType.Land)} />
                                <label htmlFor="land"> Земля </label>
                            </span>
                            <span>
                                <input type="checkbox" value="Комерція" id="commerce" onChange={(e) => handleCheckboxChange(e, EstateType.Commerce)} />
                                <label htmlFor="commerce"> Комерція </label>
                            </span>
                        </div>
                        <div className="add-params">
                            <span onClick={() => setShowAdd(!showAdd)}>
                                <p>Додаткові параметри</p>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                            <div className={showAdd ? "add-params-grid show" : "add-params-grid hide"}>
                                <span>
                                    <label>Кіл-сть кімнат:</label>
                                    <input type="number" placeholder="0"
                                        value={formData.roomsCountFrom}
                                        onChange={e => setFormData(newsletter => ({ ...newsletter, roomsCountFrom: parseInt(e.target.value) }))}></input>
                                    <input type="number" placeholder="до"
                                        value={formData.roomsCountTo}
                                        onChange={e => setFormData(newsletter => ({ ...newsletter, roomsCountTo: parseInt(e.target.value) }))}></input>
                                </span>
                                <span>
                                    <label>Заг. площа(кв.м):</label>
                                    <input type="number" placeholder="від"
                                        value={formData.totalSquareFrom}
                                        onChange={e => setFormData(newsletter => ({ ...newsletter, totalSquareFrom: parseInt(e.target.value) }))}></input>
                                    <input type="number" placeholder="до"
                                        value={formData.totalSquareTo}
                                        onChange={e => setFormData(newsletter => ({ ...newsletter, totalSquareTo: parseInt(e.target.value) }))}></input>
                                </span>
                                <span>
                                    <label>Ціна($):</label>
                                    <input type="number" placeholder="від"
                                        value={formData.priceRangeFrom}
                                        onChange={e => setFormData(newsletter => ({ ...newsletter, priceRangeFrom: parseInt(e.target.value) }))}></input>
                                    <input type="number" placeholder="до"
                                        value={formData.priceRangeTo}
                                        onChange={e => setFormData(newsletter => ({ ...newsletter, priceRangeTo: parseInt(e.target.value) }))}></input>
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
                                <li><Link to="/catalog">
                                    Квартири
                                </Link></li>
                                <li><Link to="/catalog-house">
                                    Будинки
                                </Link></li>
                                <li><Link to="/catalog-land">
                                    Земля
                                </Link></li>
                                <li><Link to="/catalog-commerce">
                                    Комерційна нерухомість
                                </Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-item">
                                <li><span><b>Послуги</b></span></li>
                                <li><Link to="/pokupka-neruhomosti">
                                    Купуємо
                                </Link></li>
                                <li><Link to="/services#consult">
                                    Консультуємо
                                </Link></li>
                                <li><Link to="/services#exchange">
                                    Міняємо
                                </Link></li>
                                <li><Link to="/services#help">
                                    Допомагаємо
                                </Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-item">
                                <li style={{ opacity:0 }}><span><b>Послуги</b></span></li>
                                <li><Link to="/prodazh-neruhomosti">
                                    Продаємо
                                </Link></li>
                                <li><Link to="/services#invest">
                                    Iнвестуємо
                                </Link></li>
                                <li><Link to="/services#credit">
                                    Кредитуємо
                                </Link></li>
                                <li><Link to="/compendium">
                                    Корисна інформація
                                </Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-item">
                                <li><span><b>Про компанію</b></span></li>
                                <li><Link to="/contact">Контакти</Link></li>
                                <li><Link to="/about">Про нас</Link></li>
                                <li><Link to="/vakansii">Вакансії</Link></li>
                                <li><Link to="/reviews">Відгуки</Link></li>
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
                    <p>ProfiRealt © 2019 - 2024, <Link to="ugoda">Угода користувача</Link></p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;