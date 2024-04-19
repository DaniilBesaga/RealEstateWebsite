import Header from '../components/Header';
import '../style/BuyEstateInfo.css';
import '../style/ResidentialComplex.css';
import Footer from '../components/Footer';
import ResidentialComplexItem from '../components/helpful_info_components/ResidentialComplexItem';
import { IResidentialComplex } from '../complexItemManagement/IResidentialComplexItem';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigaton from '../components/Navigation';

function ResidentialComplex() {

    const params = useParams();
    const id = params.id;
    console.log(params)
    const [complex, setComplex] = useState<IResidentialComplex>(undefined!);

    useEffect(() => { displayComplexes() }, []);

    async function displayComplexes() {
        setTimeout(async () => {
            const response = await fetch(`/api/complex/${id}`);
            const data = await response.json();
            setComplex(data);
        }, 1000);
        //const response = await fetch('/api/complexdto');
        //const data = await response.json();
        //setComplexes(data);
    }

    return (
        <div>
            <Header />

            <div className="list-container">
                <Navigaton url={"/resindential-complex/"}
                    urlTitle={"Головна/Житлові комплекси Києва/044"}
                />
                <ResidentialComplexItem itemType={'estate'} shortDisplay complex={complex} />
            </div>
            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>
    )
}

export default ResidentialComplex;