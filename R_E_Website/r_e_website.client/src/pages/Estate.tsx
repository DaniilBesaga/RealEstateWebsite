import Header from '../components/Header';
import '../style/BuyEstateInfo.css';
import '../style/ResidentialComplex.css';
import Footer from '../components/Footer';
import { IEstate } from '../estateManagement/IEstate';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigaton from '../components/Navigation';
import EstateItem from '../components/estate_item_components/EstateItem';
import { EstateType } from '../estateManagement/EnumEstateType';

function Estate() {

    const params = useParams();
    const id = params.id;

    const [estate, setEstate] = useState<IEstate>(undefined!);

    useEffect(() => { displayEstate() });

    const [readyForRender, setReadyForRender] = useState(false);

    const [estateTypeString, setEstateTypeString] = useState('');

    async function displayEstate() {
        setTimeout(async () => {
            const response = await fetch(`/api/estate/${id}`);
            const data = await response.json();
            setEstate(data);
            setReadyForRender(true);
            switch (data.estateType) {
                case EstateType.Flat:
                    setEstateTypeString('Квартири');
                    break;
                case EstateType.House:
                    setEstateTypeString('Будинки');
                    break;
                case EstateType.Land:
                    setEstateTypeString('Земля');
                    break;
                case EstateType.Commerce:
                    setEstateTypeString('Комерція');
                    break;

            }
        }, 1000);

    }
    if (readyForRender) {
        return (
            <div>
                <Header />

                <div className="list-container">
                    <Navigaton url={`/,/${estate.estateType.toString().toLowerCase()}/`}
                        urlTitle={`Головна/${estateTypeString}/${estate.estateAddress}`}
                    />
                    <EstateItem estate={estate} />
                </div>
                <div style={{ marginTop: -100 }}>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Estate;