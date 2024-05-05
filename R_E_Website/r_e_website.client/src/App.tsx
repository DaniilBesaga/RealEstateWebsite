import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import BuyEstate from './pages/MainPage';
import Catalog from "./pages/Catalog";
import SellEstate from "./pages/SellEstate";
import Services from "./pages/Services";
import AboutUs_Info from "./pages/AboutUs_Info";
import Contacts from "./pages/Contacts";
import Helfpful_Info from "./pages/Helpful_Info";
import ResidentialComplexesList from "./pages/ResidentialComplexesList";
import Request from "./pages/Request";
import ResidentialComplex from "./pages/ResidentialComplex";
import Estate from "./pages/Estate";
import RealEstate from "./components/RealEstate";
import { EstateType } from "./estateManagement/EnumEstateType";
import NotFoundPage from "./pages/NotFoundPage";
import { EstateDTO } from './estateManagement/IEstateDTO'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/catalog' element={<Catalog catalogType={EstateType.Flat} />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/pokupka-neruhomosti' element={<BuyEstate />} />
                <Route path='/prodazh-neruhomosti' element={<SellEstate />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<AboutUs_Info />} />
                <Route path='/contact' element={<Contacts />} />
                <Route path='/compendium' element={<Helfpful_Info />} />
                <Route path='/request' element={<Request />} />
                <Route path='/residential-complexes' element={<ResidentialComplexesList />} />
                <Route path='/residential-complex/:id' element={<ResidentialComplex />} />
                <Route path='/catalog-house' element={<Catalog catalogType={EstateType.House} />} />
                <Route path='/catalog-land' element={<Catalog catalogType={EstateType.Land} />} />
                <Route path='/catalog-commerce' element={<Catalog catalogType={EstateType.Commerce} />} />
                <Route path='/flat' element={<RealEstate display='grid' filters={(undefined as unknown) as EstateDTO[]} estateType={EstateType.Flat} searchById='' sort='any' />} />
                <Route path='/flat/:id' element={<Estate />} />
                <Route path='/house' element={<RealEstate display='grid' filters={(undefined as unknown) as EstateDTO[]} estateType={EstateType.House} searchById='' sort='any' /> } />
                <Route path='/house/:id' element={<Estate />} />
                <Route path='/land' element={<RealEstate display='grid' filters={(undefined as unknown) as EstateDTO[]} estateType={EstateType.Land} searchById='' sort='any' />} />
                <Route path='/land/:id' element={<Estate />} />
                <Route path='/commerce' element={<RealEstate display='grid' filters={(undefined as unknown) as EstateDTO[]} estateType={EstateType.Commerce} searchById='' sort='any' />} />
                <Route path='/commerce/:id' element={<Estate />} />
                <Route path="*" element={<NotFoundPage/> } />
            </Routes>
        </Router>
    )
}

export default App;