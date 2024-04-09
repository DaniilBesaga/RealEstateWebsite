import Header from '../components/Header';
import '../style/ResidentialComplexesList.css';
import '../style/BuyEstateInfo.css';
import Footer from '../components/Footer';
import ResidentialComplexThumbnail from '../components/helpful_info_components/ResidentialComplexThumbnail';
import { useEffect, useState } from 'react';

interface ResidentialComplexThumbnail {
    id: number,
    imgUrl: string,
    complexName: string
}

function ResidentialComplexesList() {

    const [complexes, setComplexes] = useState<ResidentialComplexThumbnail[]>([]);

    useEffect(() => { displayComplexes() }, []);

    async function displayComplexes() {
        setTimeout(async () => {
            const response = await fetch('/api/complexdto');
            const data = await response.json();
            setComplexes(data);
        }, 1000);
        //const response = await fetch('/api/complexdto');
        //const data = await response.json();
        //setComplexes(data);
    }

    return (
        <div>
            <Header />

            <div className="list-container">
                <div className="page-nav">
                    <div>
                        <i className="ri-arrow-left-s-line"></i>
                        <a>Головна</a>
                        <span>/</span>
                        <p>Житлові комплекси Києва</p>
                    </div>
                    
                    <h2>Житлові комплекси Києва</h2>
                    <div className="search-jk">
                        <form>
                            <input type="search" placeholder="Знайти ЖК" />
                            <i className="ri-search-line"></i>
                        </form>
                    </div>
                </div>

                <div className="list-grid">
                    {complexes.map((item, index) =>
                        <ResidentialComplexThumbnail name={item.complexName} imgUrl={item.imgUrl} key={index} />
                    )}
                </div>
            </div>
            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>

    )
}

export default ResidentialComplexesList;