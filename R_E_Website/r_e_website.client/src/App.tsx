import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import BuyEstate from './pages/MainPage';
import Catalog from "./pages/Catalog";
import BuyEstateInfo from "./components/BuyEstateInfo";
import SellEstate from "./pages/SellEstate";
import Services from "./pages/Services";
import AboutUs_Info from "./pages/AboutUs_Info";
import Contacts from "./pages/Contacts";
import Helfpful_Info from "./pages/Helpful_Info";
import ResidentialComplexesList from "./pages/ResidentialComplexesList";
import Request from "./pages/Request";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/catalog' element={< Catalog/>} />
                <Route path='/' element={<MainPage />} />
                <Route path='/pokupka-neruhomosti' element={<BuyEstate />} />
                <Route path='/prodazh-neruhomosti' element={<SellEstate />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<AboutUs_Info />} />
                <Route path='/contact' element={<Contacts />} />
                <Route path='/conpendium' element={<Helfpful_Info />} />
                <Route path='/request' element={<Request />} />
                <Route path='/resindential-complexes' element={<ResidentialComplexesList />} />
            </Routes>
        </Router>
    )
}

export default App;