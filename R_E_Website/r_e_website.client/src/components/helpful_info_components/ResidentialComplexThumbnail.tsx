import { useState } from 'react';
import '../../style/helpful_info/ResidentialComplexThumbnail.css';
import '../../style/RealEstate.css';
import { Link } from 'react-router-dom';

function ResidentialComplexThumbnail({ name, imgUrl, id }) {

    const [whiteBackground, setWhiteBackground] = useState(false);

    const handleMouseEnter = () => {
        setWhiteBackground(true);
    }

    const handleMouseLeave = () => {
        setWhiteBackground(false);
    }

    return (
        <Link to={`/residential-complex/${id}`} className="promo-item" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="box-img" style={{ backgroundImage: `url(${imgUrl})` }}>

            </div>
            <div className="info" style={{ backgroundColor: whiteBackground ? "white" : "#f1f1f0" }}>
                <div className="info1">
                    <i className="ri-building-line"></i>
                    {name}
                </div>
            </div>
        </Link>
    )
}

export default ResidentialComplexThumbnail;