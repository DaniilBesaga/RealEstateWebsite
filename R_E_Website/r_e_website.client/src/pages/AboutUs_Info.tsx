import AboutUs_InfoGeneral from '../components/AboutUs_InfoGeneral';
import Footer from '../components/Footer';
import Header from '../components/Header';

function AboutUs_Info() {
    return (
        <div>
            <Header />
            <AboutUs_InfoGeneral />
            <div style={{marginTop:-100} }>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs_Info;