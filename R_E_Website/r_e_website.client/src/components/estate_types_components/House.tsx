import { useEffect, useState } from 'react';
import '../../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';
import { displayEstates } from '../../estateManagement/estateGetFetch';
import { EstateDTO } from '../../estateManagement/IEstateDTO';
import { Link } from 'react-router-dom';
function House({ filters }) {

    const [houses, setHouses] = useState<EstateDTO[]>([]);

    useEffect(() => { displayEstates('house').then((data) => { setHouses(data) }) }, []);

    return (

        <div className="rl-grid-container">
            {houses.map((item, index) =>
                <Link to={`/house/${item.id}`} className="promo-item" key={index}>
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
                                {item.estateFloorCount} поверховий
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

export default House;