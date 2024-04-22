import { useState } from "react";
import FlatDetails from "./details_components/FlatDetails";
import HouseDetails from "./details_components/HouseDetails";
import LandDetails from "./details_components/LandDetails";
import CommerceDetails from "./details_components/CommerceDetails";
import { EstateType } from "../../estateManagement/EnumEstateType";


function EstateItem({estate}) {

    const [firstReviewNumber, setFirstReviewNumber] = useState(0);

    const handleSlideButton = (num: number) => {
        setFirstReviewNumber(num);
    }

    const arr = estate.imgsUrlFolder.split(",")
    
    function renderSwitch(et: EstateType) {
        switch (et) {
            case EstateType.Flat:
                return <FlatDetails details={estate} />;
            case EstateType.House:
                return <HouseDetails details={estate} />;
            case EstateType.Land:
                return <LandDetails details={estate} />;
            case EstateType.Commerce:
                return <CommerceDetails details={estate} />;
        }
    }

    return (
        <div className="r-c-item-grid">
            <div>
                <div className="item" style={{
                    backgroundImage: `url(${arr[firstReviewNumber]})`, backgroundPosition: firstReviewNumber == 0 ?
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
                    {(renderSwitch(estate.estateType))}
                </div>
                <div>
                    <span className="title">Опис<i className="ri-add-line"></i></span>
                    <div className="prghps-container">
                        <p style={{ fontSize: 19 }}>{estate.discription }
                            ID: {estate.id}</p>
                    </div>
                </div>
            </div>
            <div className="item-on-map">
                <h2>На карті</h2>
                <iframe src={estate.iFrameUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

const imgArray = ['https://db.profirealt.com.ua/data/housing_complex/113/6b2178a6e239f1956f9aa3f3815083b1image_0.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/ed06d1353debfc5eb1e6eb9865859f81image_1.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/9c395751583001c73d2303dc59f0e450image_2.jpeg',
    'https://db.profirealt.com.ua/data/housing_complex/113/c1edf4957deaef46eabcb0f2a7ca6398image_3.jpeg'];


export default EstateItem;