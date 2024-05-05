import Header from '../components/Header';
import '../style/ResidentialComplexesList.css';
import '../style/BuyEstateInfo.css';
import Footer from '../components/Footer';
import ResidentialComplexThumbnail from '../components/helpful_info_components/ResidentialComplexThumbnail';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import React from 'react';

interface ResidentialComplexThumbnail {
    id: number,
    imgUrl: string,
    complexName: string
}

function ResidentialComplexesList() {

    const [complexes, setComplexes] = useState<ResidentialComplexThumbnail[]>([]);

    const [id, setId] = useState(0)

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

    const handleIdSubmit = (event) => {
        event.preventDefault()
        getByIdRequest()
    }

    async function getByIdRequest() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch(`/api/complex/${id}`, requestOptions);
        if (!response.ok) {
            setId(-1)
        } else {
            window.location.replace(`/residential-complex/${id}`);
        }

    }

    const searchField = () => {
        return (
            <React.Fragment>
                <div className="search-jk">
                    <form>
                        <input
                            type="search"
                            placeholder="Знайти ЖК"
                            value={id == -1 ? 'Not found' : (id == 0 ? '' : id)}
                            onChange={e => setId(parseInt(e.target.value))}
                        />
                        <i className="ri-search-line" onClick={handleIdSubmit}></i>
                    </form>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div>
            <Header />

            <div className="list-container">
                <Navigation url={"/, /residential-complexes"} urlTitle={"Головна/Житлові комплекси Києва"}
                    header={"Житлові комплекси Києва"} addParams={searchField} />
                <div className="list-grid">
                    {complexes.map((item, index) =>
                        <ResidentialComplexThumbnail name={item.complexName} imgUrl={item.imgUrl} id={index+1} key={index}/>
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