import '../style/QuickSearch.css';
import 'remixicon/fonts/remixicon.css';
import RealState from './RealEstate';
import { useState } from 'react';

function QuickSearch() {

    const [districtsList, setDisctrictsList] = useState(false);

    return (
        <div className="qs-container">
            <form>

                <div className="qs-part-1" onClick={() => setDisctrictsList(!districtsList)}>
                    <p style={{ display: districtsList ? "none" : "" }}>Знайди оселю своєї мрії</p>
                    <div className="districts-list" style={{ display: districtsList? "block" : "none" }}>
                        {
                            districtsArray.map((item, index) => (
                                <span key={index}>
                                    {item}
                                </span>
                            ))
                        }
                    </div>
                    <div className={districtsList ? "div-select active" : "div-select"}>
                        <i className="ri-map-pin-line" style={{ opacity: 0.5 }}></i>
                        <div className={districtsList ? "district-section active" : "district-section"}>
                            <p id="area">Район</p>
                            <p className="district-select">Будь-який район</p>
                        </div>
                        <i className="ri-arrow-down-s-line drop-down-select-arrow"></i>
                    </div>
                </div>
                
                <div className="qs-part-2">
                    <div className="rooms-selection-header">
                        <i className="ri-layout-line"></i>
                        <p>Кімнат</p>
                    </div>
                    <div className="rooms-selection">
                        <div className="checked_inner"> <label className="l-room" data-from="1" data-to="1"> 1 </label></div>
                        <div className="checked_inner"> <label className="l-room" data-from="1" data-to="1"> 2 </label></div>
                        <div className="checked_inner"> <label className="l-room" data-from="1" data-to="1"> 3 </label></div>
                        <div className="checked_inner"> <label className="l-room" data-from="1" data-to="1"> 4 </label></div>
                        <div className="checked_inner"> <label className="l-room" data-from="1" data-to="1"> 5+ </label></div>
                    </div>
                </div>

                <div className="qs-part-3">
                    <div className="pricing-container-header">
                        <span className="price-title">
                            <i className="ri-money-dollar-circle-line"></i>
                            <p>Ціна</p>
                        </span>
                        <span className="cur-uah">
                            <i className="currency-icon"></i>
                            <p>грн</p>
                        </span>
                        <span className="cur-usd">
                            <i className="currency-icon"></i>
                            <p>$</p>
                        </span>

                    </div>

                    <div className="pricing-filter">
                        <input type="number" placeholder="від"></input>
                        <input type="number" placeholder="до"></input>
                    </div>
                </div>
                <button className="search-b">знайти</button>
            </form>
            
            
        </div>
    )
}

const districtsArray = ['Голосіївський', 'Дарницький', 'Деснянський', 'Дніпровський', 'Оболонський',
    'Печерський', 'Подільський', 'Святошинський', 'Солом`янський', 'Шевченківський'];

export default QuickSearch;