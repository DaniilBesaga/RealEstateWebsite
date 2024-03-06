import '../style/SlideShow.css';
import 'remixicon/fonts/remixicon.css';
import QuickSearch from './QuickSearch';

function SlideShow() {
    return (
        <div className="outer">
            <div className="item" style={{
                backgroundImage: 'url(https://profirealt.com.ua/wp-content/uploads/2021/01/prodazh_neruhomosti-scaled.jpg)',
                }}>
                <div>
                    Продаж нерухомості
                </div>
            </div>
            <QuickSearch></QuickSearch>
        </div>
    )
}

export default SlideShow;