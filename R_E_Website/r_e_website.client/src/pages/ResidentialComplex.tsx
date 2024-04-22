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
    
    const [complex, setComplex] = useState<IResidentialComplex>(undefined!);

    useEffect(() => { displayComplex() });

    const [readyForRender, setReadyForRender] = useState(false);

    async function displayComplex() {
        setTimeout(async () => {
            const response = await fetch(`/api/complex/${id}`);
            const data = await response.json();
            setComplex(data);
            setReadyForRender(true); 
        }, 1000);
        
    }
    if (readyForRender) {
        return (
            <div>
                <Header />

                <div className="list-container">
                    <Navigaton url={"/,/residential-complexes/"}
                        urlTitle={`Головна/Житлові комплекси Києва/${complex.complexName}`}
                    />
                    <ResidentialComplexItem complex={complex} />
                </div>
                <div style={{ marginTop: -100 }}>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default ResidentialComplex;