import Header from '../components/Header.tsx'
import SlideShow from '../components/SlideShow.tsx'
import SellAd from '../components/SellAd.tsx'
import Reviews from '../components/Reviews.tsx'
import InstPosts from '../components/InstPosts.tsx'
import Footer from '../components/Footer.tsx'
import RealEstateGrid from '../components/RealEstateGrid.tsx'


function MainPage() {
    return (
        <div>
            <Header></Header>
            <SlideShow></SlideShow>
            <RealEstateGrid></RealEstateGrid>
            <SellAd></SellAd>
            <Reviews></Reviews>
            <InstPosts></InstPosts>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;