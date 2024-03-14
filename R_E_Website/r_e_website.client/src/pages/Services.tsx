import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesInfo from '../components/ServicesInfo';

function SellEstate() {
    return (
        <div>
            <Header></Header>
            <ServicesInfo></ServicesInfo>
            <div style={{ marginTop: -100 }}>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default SellEstate;