import '../style/SlideShow.css';
import 'remixicon/fonts/remixicon.css';
import QuickSearch from './QuickSearch';
import { useState } from 'react';

function SlideShow() {

    let [slideImage, setSlideImage] = useState(0);

    return (
        <div className="outer">
            <div className="prev-arrow" style={{ display: slideImage == 0 ? "none" : "initial" }}>
                <i className="ri-arrow-left-s-line" onClick={() => setSlideImage(--slideImage)}></i>
            </div>
            <div className="next-arrow" style={{ display: slideImage == 2 ? "none" : "initial" }}>
                <i className="ri-arrow-right-s-line" onClick={() => setSlideImage(++slideImage)}></i>
            </div>
            <div className="item" style={{
                backgroundImage: `url(${imgArray[slideImage]})`,
            }}>

                <div className={slideImage == 2 ? "item-div changed-align" : "item-div"}>
                    {titleArray[slideImage].split("\n").map((item, index) => (
                        <span key={index }>
                            {item}
                            <br/>
                        </span>
                    ))}
                </div>
            </div>
            <QuickSearch></QuickSearch>
        </div>
    )
}

const imgArray = ['https://profirealt.com.ua/wp-content/uploads/2021/01/prodazh_neruhomosti-scaled.jpg',
    'https://profirealt.com.ua/wp-content/uploads/2021/01/kupivlya_neruhomosti.jpg',
    'https://profirealt.com.ua/wp-content/uploads/2021/01/yuridichnij.jpg'];

const titleArray = ['Продаж нерухомості', 'Купівля нерухомості', 'Юридичний супровід\n та консультації'];

export default SlideShow;