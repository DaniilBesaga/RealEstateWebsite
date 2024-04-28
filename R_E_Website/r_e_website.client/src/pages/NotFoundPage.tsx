import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/NotFoundPage.css';

function NotFoundPage() {
    return (
        <div>
            <Header />
            <div className="error-container">
                <div className="error-body">
                    <div className="error404">
                        <p>404<br />error</p>
                    </div>
                    <div className="error-text">
                        <p className="h2">Ой, щось пiшло не так.<br/>Даний об'єкт не знайдено ...!</p>
                        <p>Об'єкт, який ви шукаєте, видалено, переміщено<br/>
                            або ніколи не існувало.</p>
                        <div>
                            <button>
                                <Link to="/">
                                    На головну
                                </Link>
                            </button>
                            <button>
                                <Link to="/catalog">
                                    Каталог
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFoundPage;