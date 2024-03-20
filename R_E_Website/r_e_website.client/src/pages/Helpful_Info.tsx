import Footer from "../components/Footer";
import Header from "../components/Header";
import WelcomeInfo from "../components/helpful_info_components/WelcomeInfo";

function Helfpful_Info() {
    return (
        <div>
            <Header />
            <WelcomeInfo />
            <div style={{marginTop:-100} }>
                <Footer />
            </div>
        </div>
    )
}

export default Helfpful_Info;