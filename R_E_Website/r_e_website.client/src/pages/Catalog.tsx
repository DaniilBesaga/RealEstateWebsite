import Header from '../components/Header';
import '../style/BuyEstateInfo.css';
import '../style/ResidentialComplex.css';
import Footer from '../components/Footer';
import Search from '../components/Search';
import '../style/ResidentialComplexesList.css';
import '../style/Catalog.css';
import RealState from '../components/RealEstate';
import React, { useEffect, useState } from 'react';
import { EstateDTO } from '../estateManagement/IEstateDTO';
import Navigation from '../components/Navigation';
import { EstateType } from '../estateManagement/EnumEstateType';

function Catalog({ catalogType }) {

    const [display, setDisplay] = React.useState({
        grid: true, block: false, map: false
    })

    const [id, setId] = useState(0)

    const [filters, setFilters] = useState<EstateDTO[]>([]);

    const [sortMethod, setSortMethod] = useState("")

    const [objectCount, setObjectCount] = useState(0);

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

    useEffect(() => {
        console.log(catalogType)
        setTimeout(async () => {
            const response = await fetch(`/api/estatedto/catalogType/${catalogType}`);
            const data = await response.json();
            setObjectCount(data);
        }, 1000);
    })

    const searchField = () => {
        return (
            <React.Fragment>
                <div className="search-jk">
                    <form>
                        <input
                            type="search"
                            placeholder="Знайти по ID номеру"
                            value={id == 0 ? '' : id}
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
                <Navigation url={"/, /services"} urlTitle={"Головна/Квартири"}
                    objectCount={objectCount} header={"Знайди оселю своєї мрії"}
                    addParams={searchField} />
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
                    <RealState display={'grid'} estateType={catalogType != undefined ? catalogType : EstateType.Flat} filters={filters} />
                }

            </div>

            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>

    )
}

export default Catalog;