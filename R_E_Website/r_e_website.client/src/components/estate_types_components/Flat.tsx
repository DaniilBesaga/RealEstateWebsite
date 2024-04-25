﻿import { useEffect, useState } from 'react';
import '../../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';
import { displayEstates } from '../../estateManagement/estateGetFetch';
import { EstateDTO } from '../../estateManagement/IEstateDTO';
import { EstateProps } from '../../estateManagement/estateProps';
import { Link } from 'react-router-dom';
function Flat({ filters }) {
    
    const [flats, setFlats] = useState<EstateDTO[]>([]);
    const [readyForRender, setReadyForRender] = useState(false);
    
    useEffect(() => {
        if (filters.length > 0 || (filters instanceof Object && 'id' in filters)) {
            (async () => {
                const response = await fetch(`/api/estatedto/${filters[0].id}`);
                const data = await response.json();
                setFlats([data]);
                console.log(flats);
            })();
        } else {
            displayEstates('flat')
                .then((data) => {
                    setFlats(data);
                })
        }
        setReadyForRender(true)
    }, []);
    
    if (readyForRender) {
        return (

            <div className="rl-grid-container">
                {flats.map((item, index) =>
                    <Link to={`/flat/${item.id}`} className="promo-item" key={index}>
                        <div className="box-img" style={{ backgroundImage: `url(${item.imgUrl})` }}>
                            <div className="label label-exclusive"><span>ексклюзив</span></div>
                        </div>

                        <div className="info">
                            <div className="info1">
                                <i className="ri-building-line"></i>
                                {item.estateAddress}
                            </div>
                            <div className="info1">
                                <i className="ri-layout-line"></i>
                                {item.estateRoomCount} кімнатна
                            </div>
                            <div className="info2">
                                <span className="sq">
                                    <i className="ri-crop-line"></i>
                                    {item.estateSquare} кв.м.
                                </span>
                                <span className="fl">
                                    <i className="ri-stack-line"></i>
                                    {item.estateFloor}/{item.estateFloorCount} поверхового
                                </span>
                            </div>
                            <div className="info3">
                                <i className="ri-money-dollar-circle-line"></i>
                                {item.priceUah} ₴
                                <span className="sep">|</span>
                                {item.priceUsd} $
                            </div>
                            <div className="info4">

                            </div>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}

export default Flat;