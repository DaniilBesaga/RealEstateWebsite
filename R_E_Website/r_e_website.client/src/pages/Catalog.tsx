import Header from '../components/Header';
import '../style/BuyEstateInfo.css';
import '../style/ResidentialComplex.css';
import Footer from '../components/Footer';
import Search from '../components/Search';
import '../style/ResidentialComplexesList.css';
import '../style/Catalog.css';
import RealState from '../components/RealEstate';
import React, { useState } from 'react';
import { EstateDTO } from '../estateManagement/IEstateDTO';

function ResidentialComplex() {

    const [display, setDisplay] = React.useState({
        grid: true, block: false, map: false
    })

    const [id, setId] = useState(0)

    const [filters, setFilters] = useState<EstateDTO[]>([]);

    const [sortMethod, setSortMethod] = useState("")

    const handleIdSubmit = (event) => {
        event.preventDefault()
        getByIdRequest()
    }

    const handleSortSelection = (sortType: string) => {
        setSortMethod(sortType)
        getBySortRequest()
    }

    async function getByIdRequest() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch(`/api/estatedto/${id}`, requestOptions);
        const data = await response.json();
        setFilters(data)
    }

    async function getBySortRequest() {
        const response = await fetch(`/api/estatedto`, {
            headers: new Headers({
                'sortMethod': `${sortMethod}`
            })
        });
        const data = await response.json();
        setFilters(data)
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
                        <a>Квартири</a>
                        <span style={{ color: 'black', marginLeft:20 }}>863 Об'єктів</span>
                    </div>
                    
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginLeft:-80 }}>Знайди оселю своєї мрії</h2>
                    <div className="search-jk">
                        <form>
                            <input type="search" placeholder="Знайти по ID номеру"
                                value={id == 0 ? '' : id}
                                onChange={e => setId(parseInt(e.target.value))}/>
                            <i className="ri-search-line" onClick={handleIdSubmit}></i>
                        </form>
                    </div>
                </div>
                <Search onFilters={setFilters} />
            </div>

            <div className={display.grid ? "grid-container" : "grid-container"}>
                <div className="grid-header">
                    <div>
                        <p>Сортування</p>
                        <div className="search-item-body sort-menu">
                            <span>Будь-яке</span>
                            <i className="ri-arrow-down-s-line"></i>
                            <ul>
                                <li onClick={() => handleSortSelection("any")}>будь-яке</li>
                                <li onClick={() => handleSortSelection("descending")}>за ціною(зменшення)</li>
                                <li onClick={() => handleSortSelection("ascending")}>за ціною(збільшення)</li>
                            </ul>
                        </div>
                    </div>
                    <h1>Каталог Нерухомості</h1>
                    <div className="display-menu">
                        <i className={display.grid ? "ri-layout-grid-fill active" : "ri-layout-grid-fill"}
                            onClick={() => setDisplay(prevState => ({
                            ...prevState, grid: true, block: false, map: false
                        }))}></i>
                        <i className={display.block ? "ri-layout-top-fill active" : "ri-layout-top-fill"}
                            onClick={() => setDisplay(prevState => ({
                            ...prevState, block: true, grid: false, map: false
                        }))}></i>
                        <div>
                            <i className="ri-road-map-fill"></i>
                            <p>на карті</p>
                        </div>
                    </div>
                </div>

                {display.block && 
                    <div className="items-block">
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                        <RealState display={'block'} estateType={'flat'} filters={filters} />
                    </div>    
                }

                {display.grid &&
                    <div className="items-grid">
                        <RealState display={'grid'} estateType={'flat'} filters={filters} />
                    </div>
                }

            </div>

            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>

    )
}

export default ResidentialComplex;