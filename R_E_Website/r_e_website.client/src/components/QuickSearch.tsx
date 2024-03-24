import '../style/QuickSearch.css';
import 'remixicon/fonts/remixicon.css';
import RealState from './RealEstate';
import { useState } from 'react';

function QuickSearch() {

    const [districtsList, setDisctrictsList] = useState(false);

    return (
        <div className="qs-container">
            <form>
                <div>
                    <div className="search-item-header">
                        <p>Знайди оселю своєї мрії</p>
                    </div>

                    <div className="search-item-body">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.675" height="23.678" viewBox="0 0 23.675 23.678"><defs></defs><g transform="translate(0.173 0.2)"><g transform="translate(4.971)"><path className="a" d="M115.455,0a6.688,6.688,0,0,0-5.193,10.9q.011.017.023.033L115.1,17.1a.455.455,0,0,0,.717,0l4.835-6.2,0-.007a6.688,6.688,0,0,0-5.2-10.9Zm4.482,10.336-.016.022-4.465,5.723-4.42-5.663a.454.454,0,0,0-.037-.052,5.779,5.779,0,1,1,8.939-.03Z" transform="translate(-108.767)"></path></g><g transform="translate(7.568 2.696)"><path className="a" d="M173.9,62.224a.455.455,0,0,0-.872.257,3.182,3.182,0,1,1-2.145-2.147.455.455,0,0,0,.258-.872,4.091,4.091,0,1,0,2.759,2.762Z" transform="translate(-165.884 -59.293)"></path></g><g transform="translate(13.776 3.761)"><path className="a" d="M303.22,82.872l-.008-.008a.455.455,0,1,0-.643.643l.008.008a.455.455,0,0,0,.643-.643Z" transform="translate(-302.436 -82.73)"></path></g><g transform="translate(0.027 13.011)"><path className="a" d="M18.648,287.058a.455.455,0,1,0-.284.864c2.523.83,4.029,2.074,4.029,3.327,0,1.06-1.093,2.132-3,2.942a20.4,20.4,0,0,1-7.73,1.356,20.4,20.4,0,0,1-7.73-1.356c-1.906-.81-3-1.882-3-2.942,0-.887.765-1.789,2.155-2.538A16.518,16.518,0,0,1,8.948,287.1a.455.455,0,0,0-.1-.9,17.429,17.429,0,0,0-6.19,1.719c-1.723.929-2.633,2.083-2.633,3.339,0,1.463,1.262,2.805,3.552,3.778a21.317,21.317,0,0,0,8.085,1.428,21.316,21.316,0,0,0,8.085-1.428c2.291-.973,3.552-2.315,3.552-3.778C23.3,289.558,21.606,288.031,18.648,287.058Z" transform="translate(-0.027 -286.188)"></path></g><g transform="translate(16.008 13.323)"><path className="a" d="M352.091,293.06l-.016,0a.455.455,0,0,0-.18.891l.016,0a.455.455,0,0,0,.18-.891Z" transform="translate(-351.531 -293.048)"></path></g><g transform="translate(7.326 14.957)"><path className="a" d="M161.478,329.347a.455.455,0,0,0-.535-.357l-.031.007a.455.455,0,1,0,.566.349Z" transform="translate(-160.577 -328.982)"></path></g><g transform="translate(4.761 14.581)"><path className="a" d="M112.564,320.717a.455.455,0,0,0-.071.906c2.968.232,4.549,1.1,4.549,1.638,0,.259-.413.7-1.578,1.088a16.4,16.4,0,0,1-8.834,0c-1.165-.388-1.578-.828-1.578-1.088,0-.237.321-.536.859-.8a.455.455,0,1,0-.4-.817c-1.132.554-1.369,1.184-1.369,1.616,0,1.709,3.473,2.6,6.9,2.6s6.9-.894,6.9-2.6C117.951,321.695,115.049,320.912,112.564,320.717Z" transform="translate(-104.143 -320.716)"></path></g></g></svg>
                        <div className={districtsList ? "district-section active" : "district-section"}>
                            <span style={{ fontSize: 14, color: 'gray' }}>Район</span>
                            <p style={{ marginLeft: 20, fontSize:16 }}>Будь-який район</p>
                        </div>
                        <i className="ri-arrow-down-s-line drop-down-select-arrow"></i>
                    </div>

                    <div className="districts-list" style={{ display: districtsList ? "block" : "none" }}>
                        {
                            districtsArray.map((item, index) => (
                                <span key={index}>
                                    {item}
                                </span>
                            ))
                        }
                    </div>

                </div>
                
                <div className="search-item" style={{marginLeft:20} }>
                    <div className="search-item-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.543" height="21" viewBox="0 0 20.543 21"><g transform="translate(-5.567)"><g transform="translate(11.045 0)"><g transform="translate(0)"><path className="a" d="M153.511,0h-13.7a.685.685,0,0,0-.685.685V14.838a.685.685,0,0,0,.685.685h13.7a.685.685,0,0,0,.685-.685V.686A.685.685,0,0,0,153.511,0Zm-.685,5.478h-2.054a.685.685,0,0,0,0,1.37h2.054v7.3h-8.674V12.1a.685.685,0,1,0-1.37,0v2.054H140.5V1.371h2.283V8.9a.685.685,0,1,0,1.37,0V6.849h3.424a.685.685,0,1,0,0-1.37h-3.424V1.371h8.674V5.479Z" transform="translate(-139.131 -0.001)"></path></g></g><g transform="translate(8.306 16.891)"><path className="a" d="M89.965,413.4,88.6,412.027a.685.685,0,1,0-.968.968l.2.2H74.7l.2-.2a.685.685,0,1,0-.968-.968L72.562,413.4a.686.686,0,0,0,0,.969l1.369,1.369a.685.685,0,0,0,.968-.968l-.2-.2H87.827l-.2.2a.685.685,0,0,0,.968.968l1.369-1.369A.686.686,0,0,0,89.965,413.4Z" transform="translate(-72.362 -411.826)"></path></g><g transform="translate(5.567)"><g transform="translate(0)"><path className="a" d="M8.506,14.353l-.2.2V2.338l.2.2a.685.685,0,1,0,.968-.968L8.105.2a.685.685,0,0,0-.968,0L5.767,1.57a.685.685,0,0,0,.968.968l.2-.2V14.553l-.2-.2a.685.685,0,0,0-.968.968l1.37,1.37a.685.685,0,0,0,.968,0l1.37-1.37a.685.685,0,1,0-.968-.968Z" transform="translate(-5.567 0)"></path></g></g></g></svg>
                        <p>Кімнат</p>
                    </div>

                    <div className="search-item-body rooms-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5+</div>
                    </div>

                </div>
               
                <div>
                    <div className="search-item-header" style={{ paddingLeft:30 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g transform="translate(0)"><path className="a" d="M19.632,3.368A11.5,11.5,0,0,0,3.368,19.632,11.5,11.5,0,0,0,19.632,3.368ZM11.5,21.652A10.152,10.152,0,1,1,21.652,11.5,10.164,10.164,0,0,1,11.5,21.652Z" transform="translate(0)"></path></g><g transform="translate(7.939 4.331)"><path className="a" d="M181.017,102.9h-1.444a1.491,1.491,0,1,1,0-2.983h2.887a.674.674,0,1,0,0-1.348h-1.491V97.075a.674.674,0,1,0-1.348,0v1.491h-.048a2.839,2.839,0,1,0,0,5.678h1.444a1.491,1.491,0,0,1,0,2.983H178.13a.674.674,0,1,0,0,1.348h1.491v1.491a.674.674,0,1,0,1.348,0v-1.491h.048a2.839,2.839,0,0,0,0-5.678Z" transform="translate(-176.734 -96.401)"></path></g></svg>
                        <p>Ціна</p>
                        <div style={{ marginLeft: '140px' }}>
                            <i className="currency-icon"></i>
                            <span>грн</span>
                        </div>
                        <div>
                            <i className="currency-icon"></i>
                            <span>$</span>
                        </div>
                    </div>

                    <div className="search-item-body pricing-inputs">
                        <input type="number" placeholder="від"></input>
                        <input type="number" placeholder="до"></input>
                    </div>

                </div>

                <div style={{ display: 'flex', alignItems: 'self-end', border: 0 }}>
                    <button className="search-b"><b>знайти</b></button>
                </div>
            </form>
            
            
        </div>
    )
}

const districtsArray = ['Голосіївський', 'Дарницький', 'Деснянський', 'Дніпровський', 'Оболонський',
    'Печерський', 'Подільський', 'Святошинський', 'Солом`янський', 'Шевченківський'];

export default QuickSearch;