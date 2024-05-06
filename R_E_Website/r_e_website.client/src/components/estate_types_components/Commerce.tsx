import { useEffect, useState } from 'react';
import '../../style/RealEstate.css';
import 'remixicon/fonts/remixicon.css';
import { displayEstates } from '../../estateManagement/estateGetFetch';
import { EstateDTO } from '../../estateManagement/IEstateDTO';
import { EstateProps } from '../../estateManagement/estateProps';
import { Link } from 'react-router-dom';
function Commerce({ filters, searchById, display, sort }: EstateProps) {

    const [commerce, setCommerce] = useState<EstateDTO[]>([]);
    const [readyForRender, setReadyForRender] = useState(false);

    const [empty, setEmpty] = useState(false)
    
    useEffect(() => {

        if (searchById == 'notid0') {
            setEmpty(true)
        } else if (filters.length == 0 && searchById == '') {
            displayEstates('commerce')
                .then((data) => {
                    setCommerce(data);
                });
        }
        else if (searchById == 'id') {
            (async () => {
                const response = await fetch(`/api/estatedto/${filters[0].id}`);
                const data = await response.json();
                setCommerce([data]);
            })();
        }
        else if (searchById == 'notid' || searchById == 'notidsort') {
            setCommerce(filters);
            setEmpty(false)
        }
        setReadyForRender(true);
    }, [filters, searchById, sort, readyForRender]);

    if (readyForRender) {
        return (
            <div>
                {!empty && <div className={display == 'grid' ? "rl-grid-container" : "block-container"}>
                    {commerce.sort((a, b) => sort == 'descending' ? b.priceUah - a.priceUah : sort == 'any' ? 0 : a.priceUah - b.priceUah)
                        .map((item, index) =>
                        <Link to={`/commerce/${item.id}`} className="promo-item" key={index}>
                            <div className="box-img" style={{ backgroundImage: `url(${item.imgUrl})` }}>
                                <div className="label label-exclusive"><span>ексклюзив</span></div>
                            </div>

                            <div className="info">
                                <div className="info1">
                                    <i className="ri-building-line"></i>
                                    {item.estateAddress}
                                </div>

                                <div className="info2">
                                    <span className="sq">
                                        <i className="ri-crop-line"></i>
                                        {item.estateSquare} кв.м.
                                    </span>
                                </div>
                                <div className="info3">
                                    <i className="ri-money-dollar-circle-line"></i>
                                    {item.priceUah} ₴
                                    <span className="sep">|</span>
                                    {item.priceUsd} $
                                </div>
                                <div className="info4">

                                </div>
                            </div>
                        </Link>
                    )}
                </div>
                }
                {empty && <div className="empty">
                    <p>Вибачте, але по Вашому запиту нічого не знайдено. Спробуйте наступне:</p>
                    <ul>
                        <li><i className="ri-check-line"></i><p>Введіть вулицю без номера (тільки назву);</p></li>
                        <li><i className="ri-check-line"></i><p>Спробуйте пошук по району, без вказівки вулиці;</p></li>
                        <li><i className="ri-check-line"></i><p>Заповніть заявку або зв'яжіться з нами, і ми знайдемо для Вас цікаву пропозицію.</p></li>
                    </ul>
                </div>}
            </div>
        )
    }
}

export default Commerce;