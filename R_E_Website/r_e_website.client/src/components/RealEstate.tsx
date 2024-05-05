import '../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';
import Flat from './estate_types_components/Flat';
import House from './estate_types_components/House';
import Commerce from './estate_types_components/Commerce';
import Land from './estate_types_components/Land';
import { EstateType } from '../estateManagement/EnumEstateType';
import { EstateDTO } from '../estateManagement/IEstateDTO';

function RealState({ display, estateType, filters, searchById, sort }: {
    display: string;
    estateType: EstateType;
    filters: EstateDTO[];
    searchById: string;
    sort: string;
}) {
    
    function renderSwitch(et: EstateType) {
        switch (et) {
            case EstateType.Flat:
                return <Flat filters={filters} searchById={searchById} display={display} sort={sort} />;
            case EstateType.House:
                return <House filters={filters} searchById={searchById} display={display} sort={sort} />;
            case EstateType.Land:
                return <Land filters={filters} searchById={searchById} display={display} sort={sort} />;
            case EstateType.Commerce:
                return <Commerce filters={filters} searchById={searchById} display={display} sort={sort} />;
        }
    }
    
    return (

        <div>
            {display == 'grid' &&
                (renderSwitch(estateType))
            }
        </div>
    )
}

export default RealState;