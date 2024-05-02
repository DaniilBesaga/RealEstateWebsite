import '../../style/services_style/Credit.css';
import '../../style/services_style/Help.css';

function Credit() {
    return (
        <div className="credit-container" id="credit">
            <p className="inner-title-ul">Залиште заявку і ми допоможемо:</p>
            <ul className="ul-buy-for">
                <li>
                    <i className="ri-check-line"></i>
                    <p>підготувати пакет документів, необхідних для отримання кредиту</p>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>вибрати кращі умови для отримання коштів на купівлю</p>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p>підготувати документи по вибраному об'єкту</p>
                </li>
                <li>
                    <i className="ri-check-line"></i>
                    <p> проконтролювати виконання продавцем всіх умов договору купівлі-продажу</p>
                </li>
            </ul>
        </div>
    )
}

export default Credit;