import SellEstateInfo from '../components/SellEstateInfo';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SellEstate() {
    return (
        <div>
            <Header></Header>
            <SellEstateInfo></SellEstateInfo>
            <div style={{ marginTop: 50 }}>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default SellEstate;