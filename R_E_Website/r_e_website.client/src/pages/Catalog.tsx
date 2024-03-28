import Header from '../components/Header';
import '../style/BuyEstateInfo.css';
import '../style/ResidentialComplex.css';
import Footer from '../components/Footer';
import Search from '../components/Search';
import '../style/ResidentialComplexesList.css';
import '../style/Catalog.css';
import RealState from '../components/RealEstate';
import React from 'react';

function ResidentialComplex() {

    const [display, setDisplay] = React.useState({
        grid: true, block: false, map: false
    })

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
                            <input type="search" placeholder="Знайти по ID номеру" />
                            <i className="ri-search-line"></i>
                        </form>
                    </div>
                </div>
                <Search />
            </div>

            <div className={display.grid ? "grid-container" : "grid-container"}>
                <div className="grid-header">
                    <div>
                        <p>Сортування</p>
                        <div className="search-item-body sort-menu">
                            <span>Будь-яке</span>
                            <i className="ri-arrow-down-s-line"></i>
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
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                        <RealState display={'block'} />
                    </div>    
                }

                {display.grid &&
                    <div className="items-grid">
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
                        <RealState display={'grid'} />
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