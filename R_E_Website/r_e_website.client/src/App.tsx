import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import BuyEstate from './pages/MainPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/pokupka-neruhomosti' element={<MainPage />} />
                <Route path='/' element={<BuyEstate />} />
            </Routes>
        </Router>
    )
}

export default App;