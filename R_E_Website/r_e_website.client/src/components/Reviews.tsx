import '../style/Reviews.css';
import 'remixicon/fonts/remixicon.css';

function Reviews() {
    return (
        <div className="reviews-section">
            <div style={{ display:'flex' }}>
                <span className="reviews-logo-back">
                    Відгуки
                </span>
                <div className="reviews-logo">
                    <p>Відгуки<br /> наших<br /> клієнтів</p>
                </div>
                <div className="reviews-slides">
                    <div className="review">
                        <p className="comment">Дуже вдячні компанії Profi Realt за швидку купівлю квартири. Особлива подяка ріелтору Маріанні Макаді та юристу Ользі Івановій.
                            На високому рівні проведення переглядів і комунікації у всіх процесах далі. </p>
                        <div>
                            <p className="comment-author">Юлія</p>
                            <p className="comment-date">2024-02-20 19:34:38</p>
                        </div>
                    </div>
                    <div className="review">
                        <p className="comment">Хочу щиро подякувати спеціалістів компанії Юрія Возного і Юнну Бондарчук за чудову роботу і професіоналізм.
                            Був важким продаж квартири і оформлення всіх документів. Але спеціалісти все зробили на високому рівні.
                            Все пройшло без будь-яких ускладнень.
                            Рекомендую всім хто хоче купити/продати нерухомість звертатися до спеціалістів цієї компанії.</p>
                        <div>
                            <p className="comment-author">Андрій</p>
                            <p className="comment-date">2024-02-15 22:08:24</p>
                        </div>
                    </div>
                    <div className="review">
                        <p className="comment">Хочу выразить благодарность АН Профи Риелт, в частности риелтору Москаленко Татьяне
                            и юристу Юнне Игоревне. Спасибо за профессионализм, оперативность и высококачественный подход к своему
                            делу. Однозначно буду рекомендовать Вас своим друзьям и знакомым и при своей следующей продаже снова
                            буду обращаться к Вам! СПАСИБО!</p>
                        <div>
                            <p className="comment-author">Сергей</p>
                            <p className="comment-date">2024-02-15 19:36:12</p>
                        </div>
                    </div>
                    <div className="review">
                        <p className="comment">Від щирого серця хочу подякувати за співпрацю фахівцю з нерухомості Марині Писаренко
                            і юристу Валентині Слюсаренко за виконану роботу .За те ,що швидко були проведені консультації по всім
                            важливим питанням.Вони зробили все від початку до кінця чудово.Мені не потрібно було самій ходити і
                            збирати різні довідки і документи.</p>
                        <div>
                            <p className="comment-author">Світалана Васенко</p>
                            <p className="comment-date">2024-02-12 13:01:11</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews-button-slides">
                <ul>
                    <li><button type="button" className="active-button"></button></li>
                    <li><button type="button"></button></li>
                    <li><button type="button"></button></li>
                    <li><button type="button"></button></li>
                    <li><button type="button"></button></li>
                </ul>
            </div>
        </div>
    )
}

export default Reviews;