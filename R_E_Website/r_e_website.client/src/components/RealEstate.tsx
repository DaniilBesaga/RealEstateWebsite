import { useState } from 'react';
import '../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';

function RealState() {

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
            <div className="box-img">
                <div className="label label-exclusive"><span>ексклюзив</span></div>
            </div>
            
            <div className="info" style={{ backgroundColor: whiteBackground ? "white" : "#f1f1f0" }}>
                <div className="info1">
                    <i className="ri-building-line"></i>
                    Бишевська вулиця, 14
                </div>
                <div className="info1">
                    <i className="ri-layout-line"></i>
                    2 кімнатна
                </div>
                <div className="info2">
                    <span className="sq">
                        <i className="ri-crop-line"></i>
                        63 кв.м.
                    </span>
                    <span className="fl">
                        <i className="ri-stack-line"></i>
                        10/11 поверхового
                    </span>
                </div>
                <div className="info3">
                    <i className="ri-money-dollar-circle-line"></i>
                    2 788 500 ₴
                    <span className="sep">|</span>
                    75 000 $
                </div>
                <div className="info4">
                    
                </div>
            </div>
        </a>
    )
}

export default RealState;