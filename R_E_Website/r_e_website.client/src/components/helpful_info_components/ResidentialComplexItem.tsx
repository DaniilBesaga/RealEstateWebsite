import '../../style/SlideShow.css';
import '../../style/helpful_info/ResidentialComplexItem.css';
import '../../style/Reviews.css';
import { useState } from 'react';
function ResidentialComplexItem({ complex }) {

    const [firstReviewNumber, setFirstReviewNumber] = useState(0);

    const handleSlideButton = (num: number) => {
        setFirstReviewNumber(num);
    }

    const arr = complex.imgsUrlFolder.split(",")

    return (
        <div>
            <div className="r-c-item-grid">
                <div>

                    <div className="item" style={{
                        backgroundImage: `url(${arr[firstReviewNumber]})`
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
                            {complex.description}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ResidentialComplexItem;