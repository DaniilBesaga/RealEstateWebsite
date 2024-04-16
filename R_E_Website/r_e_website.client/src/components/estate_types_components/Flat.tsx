import { useEffect, useState } from 'react';
import '../../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';
import { displayEstates } from '../../estateManagement/estateGetFetch';
import { EstateDTO } from '../../estateManagement/IEstateDTO';
import { EstateProps } from '../../estateManagement/estateProps';
function Flat({ handleMouseEnter, handleMouseLeave, whiteBackground, filters }: EstateProps) {

    const [flats, setFlats] = useState<EstateDTO[]>([]);

    useEffect(() => {
        if (filters.length > 0 || (filters instanceof Object && 'id' in filters)) {
            if (!(filters instanceof Array)) {
                setFlats([filters]);
            }
            else
                setFlats(filters);
        } else {
            displayEstates('flats')
                .then((data) => {
                    setFlats(data);
                })
        }
    }, [filters]);
    
    return (

        <div className="rl-grid-container">
            {flats.map((item, index) =>
                <a className="promo-item" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} key={index}>
                    <div className="box-img" style={{ backgroundImage: `url(${item.imgUrl})` }}>
                        <div className="label label-exclusive"><span>ексклюзив</span></div>
                    </div>

                    <div className="info" style={{ backgroundColor: whiteBackground ? "white" : "#f1f1f0" }}>
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
                </a>
            )}
        </div>
    )
}

export default Flat;