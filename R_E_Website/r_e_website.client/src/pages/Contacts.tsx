import Header from '../components/Header';
import '../style/Contacts.css';
import '../style/BuyEstateInfo.css';
import Footer from '../components/Footer';

function Contacts() {
    return (
        <div>
            <Header />

            <div className="contacts-container">
                <div className="page-nav">
                    <div>
                        <i className="ri-arrow-left-s-line"></i>
                        <a>Головна</a>
                    </div>
                    <span>/</span>
                    <p>Контакти</p>
                    <h2>Наш офіс на карті</h2>
                </div>

                <article className="info-contact-container">
                    <div>
                        <h2>Наш офіс:</h2>
                        <ul>
                            <li>
                                <i className="ri-building-line"></i>
                                м. Київ, вул. Саксаганського, б. 119 , оф. 27
                            </li>
                            <li>
                                <i className="ri-phone-line"></i>
                                Відділ Житлової нерухомості: +38 067 692-67-07
                            </li>
                            <li>
                                <i className="ri-mail-send-line"></i>
                                <a href="mailto:profirealt@profirealt.com.ua" itemProp="email">profirealt@profirealt.com.ua</a>
                            </li>
                        </ul>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1355495193507!2d30.502767854330852!3d50.438575798336586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef755a66127%3A0x721d202b935261c9!2z0LLRg9C70LjRhtGPINCh0LDQutGB0LDQs9Cw0L3RgdGM0LrQvtCz0L4sINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1710694891958!5m2!1suk!2sro"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps">
                    </iframe>
                </article>
            </div>
            <div style={{ marginTop:-100 }}>
                <Footer />
            </div>
        </div>
        
    )
}

export default Contacts;