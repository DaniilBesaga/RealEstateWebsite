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
        grid: true, block: false
    })

    const [id, setId] = useState(0)

    const [filters, setFilters] = useState<EstateDTO[]>([]);

    const [sort, setSort] = useState('any')

    const [objectCount, setObjectCount] = useState(0);

    const [searchById, setSearchById] = useState('');

    const [sortMethod, setSortMethod] = useState('Будь-яке')

    const [showSortSelection, setshowSortSelection] = useState(false)

    const handleIdSubmit = (event) => {
        event.preventDefault()
        setSearchById('id')
        getByIdRequest()
    }
    
    const handleSortSelection = (sortType: string) => {
        
        if (sortType != sort) {
            setSort(sortType)
            setshowSortSelection(false)
            switch (sortType) {
                case 'any':
                    setSortMethod('будь-яке')
                    break
                case 'descending':
                    setSortMethod('за ціною(зменшення)')
                    break
                case 'ascending':
                    setSortMethod('за ціною(збільшення)')
                    break
            }
        }
    }

    const handleRedirect = () => {
        switch (catalogType) {
            case EstateType.Flat:
                window.location.replace(`/flat/${id}`);
                break;
            case EstateType.House:
                window.location.replace(`/house/${id}`);
                break;
            case EstateType.Land:
                window.location.replace(`/land/${id}`);
                break;
            case EstateType.Commerce:
                window.location.replace(`/commerce/${id}`);
                break;
        }
    }

    async function getByIdRequest() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch(`/api/estatedto/${id}`, requestOptions);
        if (!response.ok) {
            setId(-1)
        } else {
            handleRedirect()
        }
        
    }

    useEffect(() => {
        
    }, [catalogType])
    
    const searchField = () => {
        return (
            <React.Fragment>
                <div className="search-jk">
                    <form>
                        <input
                            type="search"
                            placeholder="Знайти по ID номеру"
                            value={id == -1 ? 'Not found' : (id == 0 ? '' : id)  }
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
                    header={"Знайди оселю своєї мрії"}
                    addParams={searchField} />
                <Search onFilters={setFilters} setSearchById={setSearchById} />
            </div>

            <div className={display.grid ? "grid-container" : "grid-container"}>
                <div className="grid-header">
                    <div>
                        <p id="sort">Сортування</p>
                        <div className="search-item-body sort-menu" onClick={() => setshowSortSelection(!showSortSelection)}>
                            <span>{sortMethod}</span>
                            <i className="ri-arrow-down-s-line"></i>
                        </div>
                        <ul className="sort-selection" style={{ display: showSortSelection ? "block" : "none" }}>
                            <li onClick={() => handleSortSelection('any')}>будь-яке</li>
                            <li onClick={() => handleSortSelection('descending')}>за ціною (зменшення)</li>
                            <li onClick={() => handleSortSelection('ascending')}>за ціною (збільшення)</li>
                        </ul>
                    </div>
                    <h1>Каталог Нерухомості</h1>
                    <div className="display-menu">
                        <i className={display.grid ? "ri-layout-grid-fill active" : "ri-layout-grid-fill"}
                            onClick={() => setDisplay(prevState => ({
                            ...prevState, grid: true, block: false
                        }))}></i>
                        <i className={display.block ? "ri-layout-top-fill active" : "ri-layout-top-fill"}
                            onClick={() => alert("In the development stage...")}></i>
                    </div>
                </div>

                {display.block &&
                    <RealState display={'block'} estateType={catalogType != undefined ? catalogType : EstateType.Flat} filters={filters} searchById={searchById} sort={sort} /> 
                }

                {display.grid &&
                    <RealState display={'grid'} estateType={catalogType != undefined ? catalogType : EstateType.Flat} filters={filters} searchById={searchById} sort={sort} />
                }
                
            </div>

            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>

    )
}

export default Catalog;