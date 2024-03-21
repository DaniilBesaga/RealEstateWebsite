import { useState } from 'react';
import '../../style/helpful_info/ResidentialComplexThumbnail.css';
import '../../style/RealEstate.css';

function ResidentialComplexThumbnail({ name, imgUrl }) {

    const [whiteBackground, setWhiteBackground] = useState(false);

    const handleMouseEnter = () => {
        setWhiteBackground(true);
    }

    const handleMouseLeave = () => {
        setWhiteBackground(false);
    }

    return (
        <a className="promo-item" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="box-img" style={{ backgroundImage: `url(${imgUrl})` }}>

            </div>
            <div className="info" style={{ backgroundColor: whiteBackground ? "white" : "#f1f1f0" }}>
                <div className="info1">
                    <i className="ri-building-line"></i>
                    {name}
                </div>
            </div>
        </a>
    )
}

export default ResidentialComplexThumbnail;