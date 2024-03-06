import '../style/SellAd.css';

function SellAd() {
    return (
        <div className="ad-container">
            <div className="ad-container-head">
                <p className="p-head">Продайте квартиру вигідно</p>
                <div className="p-body">
                    <p>Як продати об'єкт за максимальною ціною?</p>
                    <p>Подивіться скільки покупців хочуть купити Вашу нерухомість!</p>
                </div>
                <p className="p-footer">У нашому агентстві 3487 покупців зараз шукають квартиру</p>
            </div>
            <div className="ad-container-body">
                <div>
                    <img src="https://profirealt.com.ua/wp-content/themes/profirealt_child/access/images/info_1.png" />
                    <div className="text-inner">
                        <p>Введіть параметри своєї квартири, подивіться скільки покупців зможуть її купити</p>
                    </div>
                </div>
                <div>
                    <img src="https://profirealt.com.ua/wp-content/themes/profirealt_child/access/images/info_2.png" />
                    <div className="text-inner">
                        <p>Залиште заявку на продаж Вашої квартири через просту форму або зателефонувавши нашому фахівцеві</p>
                    </div>
                </div>
                <div>
                    <img src="https://profirealt.com.ua/wp-content/themes/profirealt_child/access/images/info_3.png" />
                    <div className="text-inner">
                        <p>Ми поставимо до відома всіх наших потенційних покупців, а Ви зможете вибрати кращу пропозицію</p>
                    </div>
                </div>
                <div>
                    <img src="https://profirealt.com.ua/wp-content/themes/profirealt_child/access/images/info_4.png" />
                    <div className="text-inner">
                        <p>Підготуємо пакет документів і проведемо операцію на вигідних для Вас умовах</p>
                    </div>
                </div>
            </div>
            <div className="ad-container-footer">
                <a href="#" className="button-action">РОЗМІСТИТИ СВОЄ ОГОЛОШЕННЯ</a>
            </div>
        </div>
    )
}

export default SellAd;