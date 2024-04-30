import '../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';
import ResidentialComplexItem from './helpful_info_components/ResidentialComplexItem';
import Flat from './estate_types_components/Flat';
import House from './estate_types_components/House';
import Commerce from './estate_types_components/Commerce';
import Land from './estate_types_components/Land';
import { EstateType } from '../estateManagement/EnumEstateType';

function RealState({ display, estateType, filters, searchById }) {
    
    function renderSwitch(et: EstateType) {
        console.log(filters)
        switch (et) {
            case EstateType.Flat:
                return <Flat filters={filters} searchById={searchById} />;
            case EstateType.House:
                return <House filters={filters} searchById={searchById} />;
            case EstateType.Land:
                return <Land filters={filters} searchById={searchById} />;
            case EstateType.Commerce:
                return <Commerce filters={filters} searchById={searchById} />;
        }
    }
    
    return (

        <div>
            {display == 'grid' &&
                (renderSwitch(estateType))
            }
            {display == 'block' &&
                <div className="block-container">
                    <div className="block-box-img" style={{ display: 'inline-block' }}>
                        <div className="label label-exclusive"><span>ексклюзив</span></div>
                    </div>

                    <div className="ul-block">
                        <div className="info1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.556" height="25.556" viewBox="0 0 25.556 25.556"><path d="M22.561,5.59a2.994,2.994,0,0,0-2.995,2.995v1H15.957c1.2-2.057,1.812-3.6,1.812-4.592a4.991,4.991,0,1,0-9.983,0c0,.992.61,2.535,1.812,4.592H5.99v-1a2.995,2.995,0,0,0-5.99,0v2.8a.5.5,0,0,0,1,0v-2.8a2,2,0,1,1,3.993,0V20.331a2.988,2.988,0,0,0-3.993,0V15.373a.5.5,0,0,0-1,0v7.188a3.077,3.077,0,0,0,3.137,2.995H22.561a3,3,0,0,0,2.995-2.995V8.585A3,3,0,0,0,22.561,5.59Zm-2,2.995a2,2,0,1,1,3.993,0V20.317a2.917,2.917,0,0,0-1.207-.649,3.012,3.012,0,0,0-2.786.66V8.585Zm-1,6.988H13.177L7.936,10.582H10.2c1.09,1.741,2.163,3.179,2.174,3.194a.5.5,0,0,0,.8,0c.011-.015,1.085-1.453,2.174-3.194h4.214ZM12.778,1a4,4,0,0,1,3.993,3.993c0,1.853-2.923,6.139-3.993,7.636-1.086-1.521-3.993-5.8-3.993-7.636A4,4,0,0,1,12.778,1ZM1,22.561a2,2,0,1,1,3.993,0,.5.5,0,0,0,1,0V14.242l5.066,4.825-5.765,5.49H3.137A2.073,2.073,0,0,1,1,22.561Zm11.125-3.132a.5.5,0,0,0,0-.723L5.99,12.863V10.582h.5l6.145,5.852a.5.5,0,0,0,.344.138h6.589v2H15.773a.5.5,0,0,0-.353.146L9.576,24.557H6.738Zm10.437,5.129H10.988l4.991-4.991h3.587v2.995a.5.5,0,0,0,1,0A2,2,0,0,1,23.1,20.634a1.966,1.966,0,0,1,1.456,1.927,2,2,0,0,1-2,2Zm0,0"></path><path d="M208.5,54.991a2.5,2.5,0,1,0-2.5-2.5A2.5,2.5,0,0,0,208.5,54.991Zm0-3.993a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,208.5,51Zm0,0" transform="translate(-195.718 -47.504)"></path><path d="M.5,259a.5.5,0,1,0-.5-.5A.5.5,0,0,0,.5,259Zm0,0" transform="translate(0 -245.122)"></path></svg>
                            <b>Бишевська вулиця, 14</b>
                        </div>
                        <ResidentialComplexItem complex={undefined} />

                    </div>

                    <div className="action-block" style={{ display: 'inline-block' }}>
                        <div className="info3">
                            <i className="ri-money-dollar-circle-line"></i>
                            1 788 500 ₴
                            <span className="sep">|</span>
                            75 000 $
                        </div>
                        <button><i className="ri-shopping-cart-2-line"></i>замовити перегляд</button>
                    </div>
                </div>
        }
        </div>
    )
}

export default RealState;