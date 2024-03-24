import Header from '../components/Header';
import '../style/BuyEstateInfo.css';
import '../style/ResidentialComplex.css';
import Footer from '../components/Footer';
import Search from '../components/Search';
import '../style/ResidentialComplexesList.css';
import QuickSearch from '../components/QuickSearch';

function ResidentialComplex() {
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
                    
                    <h2 style={{ fontSize: 20, fontWeight: 600 }}>Знайди оселю своєї мрії</h2>
                    <div className="search-jk">
                        <form>
                            <input type="search" placeholder="Знайти по ID номеру" />
                            <i className="ri-search-line"></i>
                        </form>
                    </div>
                </div>
                <QuickSearch />
            </div>
            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>

    )
}

export default ResidentialComplex;