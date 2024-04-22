import { useEffect, useState } from 'react';
import '../../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';
import { displayEstates } from '../../estateManagement/estateGetFetch';
import { EstateDTO } from '../../estateManagement/IEstateDTO';

function Land({ filters }) {

    const [houses, setHouses] = useState<EstateDTO[]>([]);

    useEffect(() => { displayEstates('land').then((data) => { setHouses(data) }) }, []);

    return (

        <div className="rl-grid-container">
            {houses.map((item, index) =>
                <a className="promo-item" key={index}>
                    <div className="box-img" style={{ backgroundImage: `url(${item.imgUrl})` }}>
                        <div className="label label-exclusive"><span>ексклюзив</span></div>
                    </div>

                    <div className="info">
                        <div className="info1">
                            <i className="ri-building-line"></i>
                            {item.estateAddress}
                        </div>                  
                        <div className="info2">
                            <span className="sq">
                                <i className="ri-crop-line"></i>
                                {item.estateSquare} кв.м.
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
                </a>
            )}
        </div>
    )
}

export default Land;