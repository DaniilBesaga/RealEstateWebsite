import Header from '../components/Header';
import '../style/BuyEstateInfo.css';
import '../style/ResidentialComplex.css';
import Footer from '../components/Footer';
import ResidentialComplexItem from '../components/helpful_info_components/ResidentialComplexItem';

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
                        <a>Житлові комплекси Києва</a>
                        <span>/</span>
                        <p><b>044</b></p>
                    </div>

                </div>
                <ResidentialComplexItem/>
            </div>
            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>

    )
}

export default ResidentialComplex;