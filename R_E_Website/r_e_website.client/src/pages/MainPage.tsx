import Header from '../components/Header.tsx'
import SlideShow from '../components/SlideShow.tsx'
import SellAd from '../components/SellAd.tsx'
import Reviews from '../components/Reviews.tsx'
import InstPosts from '../components/InstPosts.tsx'
import Footer from '../components/Footer.tsx'
import RealEstate from '../components/RealEstate.tsx'
import { EstateType } from '../estateManagement/EnumEstateType.tsx'


function MainPage() {
    return (
        <div>
            <Header></Header>
            <SlideShow></SlideShow>
            <p className="estate-header">Цікаві об'єкти</p>
            <RealEstate display="grid" estateType={EstateType.Flat} filters={(new Array(0))} searchById={''} sort='any'></RealEstate>
            <SellAd></SellAd>
            <Reviews></Reviews>
            <InstPosts></InstPosts>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;