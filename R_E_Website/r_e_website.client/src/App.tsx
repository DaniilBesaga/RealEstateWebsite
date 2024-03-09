import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import BuyEstate from './pages/MainPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/pokupka-neruhomosti' element={<BuyEstate />} />
            </Routes>
        </Router>
    )
}

export default App;