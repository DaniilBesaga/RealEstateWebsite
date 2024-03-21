import Header from '../components/Header';
import '../style/ResidentialComplexesList.css';
import '../style/BuyEstateInfo.css';
import Footer from '../components/Footer';
import ResidentialComplexThumbnail from '../components/helpful_info_components/ResidentialComplexThumbnail';

function ResidentialComplexesList() {
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
                    <ResidentialComplexThumbnail name={'044'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/172/0060b0f667658249743597f517d6e6c0image_0.jpeg'} />
                    <ResidentialComplexThumbnail name={'4U'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/486/5c44730a9833311df15b5b67bf00d600image_0.jpeg'} />
                    <ResidentialComplexThumbnail name={'AGAM'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/393/f8af0c163ed4c33b62924f0c8be04da2image_0.jpeg'} />
                    <ResidentialComplexThumbnail name={'Arch House'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/192/52b13354a6253727f0dc5bea897376aaimage_0.jpeg'} />
                    <ResidentialComplexThumbnail name={'Art Misto'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/473/e321f8ca0edf70ee343478c0987746f7image_0.jpeg'} />
                    <ResidentialComplexThumbnail name={'Art Hall'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/68/54135311b2a2aaa6d1771e070d65dc73image_0.jpeg'} />
                    <ResidentialComplexThumbnail name={'Bavaria City'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/414/76049880785bf8e49d2e781ab7a38c9bimage_0.jpeg'} />
                    <ResidentialComplexThumbnail name={'Bristol'} imgUrl={'https://db.profirealt.com.ua/data/housing_complex/209/84f57dbfaa66f7d64aee4b50b76f0a46image_0.jpeg'} />
                </div>
            </div>
            <div style={{ marginTop: -100 }}>
                <Footer />
            </div>
        </div>

    )
}

export default ResidentialComplexesList;