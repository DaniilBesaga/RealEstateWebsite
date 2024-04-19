import { useState } from "react";
import FlatDetails from "./details_components/FlatDetails";


function EstateItem() {

    const [firstReviewNumber, setFirstReviewNumber] = useState(0);

    const handleSlideButton = (num: number) => {
        setFirstReviewNumber(num);
    }

    return (
        <div className="r-c-item-grid">
            <div>
                <div className="item" style={{
                    backgroundImage: `url(${imgArray[firstReviewNumber]})`, backgroundPosition: firstReviewNumber == 0 ?
                        'right 0px top -200px' : ""
                }}>
                    <div className="prev-arrow" style={{ display: firstReviewNumber == 0 ? "none" : "initial" }}>
                        <i className="ri-arrow-left-s-line" onClick={() => handleSlideButton(firstReviewNumber - 1)}></i>
                    </div>
                    <div className="next-arrow" style={{ display: firstReviewNumber == 3 ? "none" : "initial" }}>
                        <i className="ri-arrow-right-s-line" onClick={() => handleSlideButton(firstReviewNumber + 1)}></i>
                    </div>
                    <div className="reviews-button-slides">
                        <ul>
                            <li><button type="button" className={firstReviewNumber == 0 ? "active-button" : ""}
                                onClick={() => handleSlideButton(0)}></button></li>
                            <li><button type="button" className={firstReviewNumber == 1 ? "active-button" : ""}
                                onClick={() => handleSlideButton(1)}></button></li>
                            <li><button type="button" className={firstReviewNumber == 2 ? "active-button" : ""}
                                onClick={() => handleSlideButton(2)}></button></li>
                            <li><button type="button" className={firstReviewNumber == 3 ? "active-button" : ""}
                                onClick={() => handleSlideButton(3)}></button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="r-c-item-2">
                <div>
                    <span className="title">Деталі<i className="ri-add-line"></i></span>
                    <FlatDetails/>
                </div>
                <div>
                    <span className="title">Опис<i className="ri-add-line"></i></span>
                    <div className="prghps-container">
                        <p style={{ fontSize: 19 }}>Краще подивитися наживо, щоб оцінити затишну світлу 2 кімнатну квартиру з хорошим ремонтом у
                            Голосіївському районі! Продається з меблями та технікою, навіть картини залишаються новому
                            власнику. Величезний утеплений балкон з панорамними вікнами (батарея і освітлення).
                            Площа: 45/29/6. Поверховість: 5/5. Цегляний будинок 1963 року, у середині.
                            Планування суміжне. У спальні містка вбиральня. Кондиціонер. ЖЕК. Поруч ліцей,
                            дитячий садок, супермаркети, магазини, аптеки, відділення пошти, банк, Горіхатські ставки,
                            Голосіївський парк. До метро Голосіївська 8 хвилин пішки.
                            ID: 75389</p>
                    </div>
                </div>
            </div>
            <div className="item-on-map">
                <h2>На карті</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.3228047012985!2d30.51384907643405!3d50.3978213715821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8b54f615555%3A0xb47906b7ad278d4d!2z0LLRg9C70LjRhtGPINCU0L7QsdGA0LjQuSDQqNC70Y_RhSwgNdCwLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2sro!4v1711276249893!5m2!1suk!2sro" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

const imgArray = ['https://db.profirealt.com.ua/data/housing_complex/113/6b2178a6e239f1956f9aa3f3815083b1image_0.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/ed06d1353debfc5eb1e6eb9865859f81image_1.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/9c395751583001c73d2303dc59f0e450image_2.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/c1edf4957deaef46eabcb0f2a7ca6398image_3.jpeg'];


export default EstateItem;