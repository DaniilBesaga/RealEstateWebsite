import '../../style/SlideShow.css';
import '../../style/helpful_info/ResidentialComplexItem.css';
import '../../style/Reviews.css';
import { useState } from 'react';

function ResidentialComplexItem({complex }) {

    const [firstReviewNumber, setFirstReviewNumber] = useState(0);

    const handleSlideButton = (num: number) => {
        setFirstReviewNumber(num);
    }

    return (

        <div>
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
                        <div className="uls-container">
                            <ul>
                                <li><span>Клас</span> <span><b>{complex.classType}</b></span></li>
                                <li><span>Забудовник</span> <span><b>{complex.developer}</b></span></li>
                                <li><span>Поверховість</span><span><b>{complex.numberOfFloors}</b></span></li>
                                <li><span>Технологія будівництва</span><span><b>{complex.buildTechnology}</b></span></li>
                            </ul>
                            <ul>
                                <li><span>Будинків</span> <span><b>{complex.houseCount}</b></span></li>
                                <li><span>Введення в експлуатацію</span> <span><b>{complex.commisionedYear}</b></span></li>
                                <li><span>Висота стелі</span><span><b>{complex.ceillingHeight} м.</b></span></li>
                                <li><span>Паркінг</span><span><b>{complex.parkingType}</b></span></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <span className="title">Опис<i className="ri-add-line"></i></span>
                        <div className="prghps-container">
                            <p>Величний житловий комплекс «Тридцять восьма перлина» в Києві розташований за
                                адресою вул. Жилянська, 68, Голосіївський район. З його вікон з панорамним склінням
                                відкривається прекрасний вид на центр української столиці.</p>
                            <p>По сусідству з новобудовою розташовані загальноосвітні установи, дитячий сад,
                                інститут, кілька торгових центрів. Ботанічний сад імені Фоміна знаходиться в
                                вісімсот метрах, до станції метро «Університет» трохи більше одного кілометра.
                                Поруч зупиняються автобуси, тролейбуси і маршрутні таксі.</p>
                            <p>«38 перлина» - житловий комплекс бізнес-класу висотою двадцять п'ять поверхів, в
                                ході будівництва якого застосовуються сучасні матеріали неперевершеної якості та
                                передові технології, що дозволяють створити справжній витвір мистецтва.</p>
                            <p>Каркас будівлі з монолітного залізобетону володіє феноменальною міцністю,
                                тому здатний благополучно перенести найбільш руйнівний землетрус.</p>
                            <p>Планування житлових приміщень забезпечує високий рівень комфорту. У соціальних мережах
                                і на форумах можна бачити фото з прикладами елегантного оформлення 1-2-3-кімнатних апартаментів,
                                побудованих компанією «Kadorr Group».</p>
                            <p>Комплекс має автономне водо-, тепло- та енергопостачання. Споруджується власна енергопідстанцій,
                                підземний паркінг, встановлюються три швидкісні ліфти, один з яких вантажний.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


const imgArray = ['https://db.profirealt.com.ua/data/housing_complex/113/6b2178a6e239f1956f9aa3f3815083b1image_0.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/ed06d1353debfc5eb1e6eb9865859f81image_1.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/9c395751583001c73d2303dc59f0e450image_2.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/c1edf4957deaef46eabcb0f2a7ca6398image_3.jpeg'];

export default ResidentialComplexItem;