﻿import '../style/ServicesInfo.css';
import '../style/BuyEstateInfo.css';
import 'remixicon/fonts/remixicon.css';
import React from 'react';
import Consult from './services_components/Consult';
import Invest from './services_components/Invest';
import Exchange from './services_components/Exchange';
import Credit from './services_components/Credit';
import Help from './services_components/Help';

function ServicesInfo() {

    const [showComponent, setShowComponent] =
        React.useState({
            showConsultComponent: false, showInvestComponent: false, showExchangeComponent: false,
            showCreditComponent: false, showHelpComponent: false
        });
    const handleShowComponent = (property: string) => {
        for (const key in showComponent) {
            if (key != property) {
                setShowComponent(prevState => ({
                    ...prevState,
                    [key]: false
                }));
            }
            
        }
    }
    const handleClick = (property: string) => {
        switch (property) {
            case 'showConsultComponent':
                handleShowComponent('showConsultComponent')
                setShowComponent(prevState => ({
                    ...prevState,
                    [property]: !prevState.showConsultComponent
                }));
                break;
            case 'showInvestComponent':
                handleShowComponent('showInvestComponent')
                setShowComponent(prevState => ({
                    ...prevState,
                    [property]: !prevState.showInvestComponent
                }));
                break;
            case 'showExchangeComponent':
                handleShowComponent('showExchangeComponent')
                setShowComponent(prevState => ({
                    ...prevState,
                    [property]: !prevState.showExchangeComponent
                }));
                break;
            case 'showCreditComponent':
                handleShowComponent('showCreditComponent')
                setShowComponent(prevState => ({
                    ...prevState,
                    [property]: !prevState.showCreditComponent
                }));
                break;
            case 'showHelpComponent':
                handleShowComponent('showHelpComponent')
                setShowComponent(prevState => ({
                    ...prevState,
                    [property]: !prevState.showHelpComponent
                }));
                break;
        }
    }

    return (
        <div className="services-container">
            <div className="page-nav">
                <div>
                    <i className="ri-arrow-left-s-line"></i>
                    <a>Головна</a>
                </div>
                <span>/</span>
                <p>Продаж нерухомості</p>
            </div>

            <div className="services-list-container">
                <h2 className="not-style-h2" style={{ textAlign: 'center', marginTop: 100 }}>Агентство нерухомості «Profi Realt» надає своїм клієнтам такі послуги:</h2>
                <div className="services-list">
                    <div onClick={() => handleClick('showConsultComponent')}>
                        <div className={showComponent.showConsultComponent ? "service-title opened" : "service-title"}>
                            <svg className={showComponent.showConsultComponent ? "opened_svg ": ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.27 28.27"><g transform="translate(0 12.263)"><path d="M10.034,230.088a.552.552,0,0,0-.122-.02,3.529,3.529,0,0,0,.977-2.439v-2.9a.558.558,0,0,0-.006-.078c0-.052.006-.105.006-.159v-1.838a.552.552,0,0,0-.552-.552h-3.7a2.831,2.831,0,0,0-2.828,2.828v2.7a3.528,3.528,0,0,0,.977,2.439.553.553,0,0,0-.122.02A5.134,5.134,0,0,0,0,235.193v2.359a.552.552,0,0,0,.552.552h13.59a.552.552,0,0,0,.552-.552v-2.359A5.133,5.133,0,0,0,10.034,230.088Zm-5.124-4.462v-.7A1.726,1.726,0,0,1,6.633,223.2H9.785v1.286a1.175,1.175,0,0,1-1.174,1.174h-3.7Zm0,1.14h3.7a2.264,2.264,0,0,0,1.174-.327v1.19a2.438,2.438,0,1,1-4.875,0Zm3.639,4.405-1.2,1.2-1.2-1.2ZM13.59,237H1.1v-1.1H3.4a.552.552,0,1,0,0-1.1H1.124A4.029,4.029,0,0,1,4.617,231.2l2.34,2.34a.552.552,0,0,0,.781,0l2.34-2.34a4.028,4.028,0,0,1,3.513,3.989Z" transform="translate(0 -222.097)"></path></g><g transform="translate(13.576)"><path d="M255.906,7.991a.553.553,0,0,0-.122-.02,3.529,3.529,0,0,0,.977-2.439v-2.9a.56.56,0,0,0-.006-.078c0-.052.006-.105.006-.159V.552A.552.552,0,0,0,256.209,0h-3.7a2.831,2.831,0,0,0-2.828,2.828v2.7a3.529,3.529,0,0,0,.977,2.439.553.553,0,0,0-.122.02,5.134,5.134,0,0,0-4.66,5.105v2.359a.552.552,0,0,0,.552.552h4.443a.552.552,0,0,0,0-1.1h-3.89V13.1a4.028,4.028,0,0,1,3.513-3.989l2.34,2.34a.552.552,0,0,0,.781,0l2.34-2.34a4.028,4.028,0,0,1,3.513,3.989V14.9h-4.068a.552.552,0,1,0,0,1.1h4.62a.552.552,0,0,0,.552-.552V13.1A5.134,5.134,0,0,0,255.906,7.991Zm-2.687,2.285-1.2-1.2h2.4Zm2.438-4.744a2.438,2.438,0,0,1-4.875,0V4.668h3.7a2.264,2.264,0,0,0,1.174-.327Zm0-3.141a1.175,1.175,0,0,1-1.174,1.174h-3.7V2.828A1.726,1.726,0,0,1,252.506,1.1h3.151Z" transform="translate(-245.872)"></path></g><g transform="translate(20.371 14.903)"><path d="M369.883,270.062a.552.552,0,1,0,.162.39A.556.556,0,0,0,369.883,270.062Z" transform="translate(-368.94 -269.9)"></path></g><path d="M14.765,7.726,12.456,5.417V2.761A2.764,2.764,0,0,0,9.695,0H2.761A2.764,2.764,0,0,0,0,2.761V7.62A2.764,2.764,0,0,0,2.761,10.38H9.695a2.745,2.745,0,0,0,2.555-1.712h2.125a.552.552,0,0,0,.39-.943Zm-2.918-.162a.552.552,0,0,0-.538.428A1.647,1.647,0,0,1,9.695,9.276H2.761A1.658,1.658,0,0,1,1.1,7.62V2.761A1.658,1.658,0,0,1,2.761,1.1H9.695a1.658,1.658,0,0,1,1.656,1.656V5.646a.552.552,0,0,0,.162.39l1.528,1.528Z"></path><g transform="translate(13.344 17.89)"><path d="M253.832,324H246.9a2.745,2.745,0,0,0-2.555,1.712h-2.125a.552.552,0,0,0-.39.943l2.309,2.309v2.656a2.764,2.764,0,0,0,2.761,2.761h6.934a2.764,2.764,0,0,0,2.761-2.761v-4.859A2.764,2.764,0,0,0,253.832,324Zm1.656,7.62a1.658,1.658,0,0,1-1.656,1.656H246.9a1.658,1.658,0,0,1-1.656-1.656v-2.885a.552.552,0,0,0-.162-.39l-1.528-1.528h1.195a.552.552,0,0,0,.538-.428A1.647,1.647,0,0,1,246.9,325.1h6.934a1.658,1.658,0,0,1,1.656,1.656Z" transform="translate(-241.666 -324)"></path></g><g transform="translate(20.65 21.449)"><path d="M377.873,388.625a.552.552,0,0,0-.781,0l-1.468,1.468-.683-.683a.552.552,0,0,0-.781.781l1.073,1.073a.552.552,0,0,0,.781,0l1.858-1.858A.552.552,0,0,0,377.873,388.625Z" transform="translate(-373.999 -388.463)"></path></g><g transform="translate(4.914 1.879)"><path d="M92.818,35.812a1.919,1.919,0,0,0-1.775-1.775,1.9,1.9,0,0,0-1.441.51,1.921,1.921,0,0,0-.608,1.4.552.552,0,0,0,1.1,0,.81.81,0,1,1,.988.791.927.927,0,0,0-.73.909v.295a.552.552,0,1,0,1.1,0V37.78A1.9,1.9,0,0,0,92.818,35.812Z" transform="translate(-88.994 -34.032)"></path></g><g transform="translate(6.276 7.349)"><path d="M114.613,133.252a.552.552,0,1,0,.162.39A.556.556,0,0,0,114.613,133.252Z" transform="translate(-113.67 -133.09)"></path></g><g transform="translate(5.052 24.957)"><path d="M92.443,452.162a.552.552,0,1,0,.162.39A.556.556,0,0,0,92.443,452.162Z" transform="translate(-91.5 -452)"></path></g></svg>
                            <span>КОНСУЛЬТУЄМО</span>
                            <i className={showComponent.showConsultComponent ? "ri-subtract-line" : "ri-add-line"}
                                style={{ color: showComponent.showConsultComponent ? "#a52822" : "black" } }></i>
                        </div>
                        {showComponent.showConsultComponent ? <Consult/> : ""}
                    </div>
                    <div onClick={() => handleClick('showInvestComponent')}>
                        <div className={showComponent.showInvestComponent ? "service-title opened" : "service-title"}>
                            <svg className={showComponent.showInvestComponent ? "opened_svg " : ""} xmlns="http://www.w3.org/2000/svg" width="34.178" height="32.864" viewBox="0 0 34.178 32.864"><path d="M83.976,247.315l-3.39-2.393v-3.641a.657.657,0,0,0-.657-.657H77.3a.657.657,0,0,0-.657.657v.854l-2.908-2.052a.658.658,0,0,0-.757,0l-10.241,7.23a1.831,1.831,0,1,0,2.141,2.972l1.249-.916v9a1.315,1.315,0,0,0,1.315,1.315H79.272a1.314,1.314,0,0,0,1.315-1.315v-9l1.249.916a1.831,1.831,0,1,0,2.139-2.972Zm-6.019-5.376h1.315v2.056l-1.315-.928ZM70.07,258.37v-3.944H72.7v3.944Zm9.2,0H74.014v-4.6a.657.657,0,0,0-.657-.657H69.413a.657.657,0,0,0-.657.657v4.6H67.441v-9.964l5.916-4.338,5.916,4.338Zm4.075-9.273a.515.515,0,0,1-.34.222.508.508,0,0,1-.394-.092l-8.869-6.507a.657.657,0,0,0-.778,0L64.1,249.227a.508.508,0,0,1-.394.092.516.516,0,0,1-.2-.93l9.859-6.961,9.859,6.96a.515.515,0,0,1,.132.709Zm0,0" transform="translate(-56.924 -226.821)"></path><path d="M216.5,400.657v2.629a.657.657,0,0,0,.657.657h2.629a.657.657,0,0,0,.657-.657v-2.629a.657.657,0,0,0-.657-.657h-2.629A.657.657,0,0,0,216.5,400.657Zm1.315.657h1.315v1.315h-1.315Zm0,0" transform="translate(-198.75 -373.709)"></path><path d="M168.5,322.629A2.629,2.629,0,1,0,171.125,320,2.629,2.629,0,0,0,168.5,322.629Zm3.944,0a1.315,1.315,0,1,1-1.315-1.315A1.314,1.314,0,0,1,172.44,322.629Zm0,0" transform="translate(-154.693 -300.282)"></path><path d="M7.457,147.944H7.072a.657.657,0,0,0-.657.657v7.887H7.73v-7.23H9.044a.657.657,0,0,0,.465-1.122l-3.944-3.944a.657.657,0,0,0-.929,0L.692,148.136a.657.657,0,0,0,.465,1.122H2.471v7.23H3.786V148.6a.657.657,0,0,0-.657-.657H2.744L5.1,145.586Zm0,0" transform="translate(-0.5 -138.742)"></path><path d="M313.509,84.137l-3.944-3.944a.657.657,0,0,0-.929,0l-3.944,3.944a.657.657,0,0,0,.465,1.122h1.315v7.23h1.315V84.6a.657.657,0,0,0-.657-.657h-.385l2.357-2.357,2.357,2.357h-.385a.657.657,0,0,0-.657.657v7.887h1.315v-7.23h1.315a.657.657,0,0,0,.465-1.122Zm0,0" transform="translate(-279.523 -80)"></path><path d="M328.5,248h1.315v2.629H328.5Zm0,0" transform="translate(-301.548 -234.197)"></path><path d="M328.5,296h1.315v1.315H328.5Zm0,0" transform="translate(-301.548 -278.253)"></path><path d="M376.5,264h1.315v1.315H376.5Zm0,0" transform="translate(-345.604 -248.883)"></path><path d="M376.5,312h1.315v1.315H376.5Zm0,0" transform="translate(-345.604 -292.939)"></path><path d="M24.5,312h1.315v1.315H24.5Zm0,0" transform="translate(-22.525 -292.939)"></path><path d="M24.5,344h1.315v1.315H24.5Zm0,0" transform="translate(-22.525 -322.31)"></path><path d="M24.5,376h1.315v1.315H24.5Zm0,0" transform="translate(-22.525 -351.681)"></path></svg>
                            <span>ІНВЕСТУЄМО</span>
                            <i className={showComponent.showInvestComponent ? "ri-subtract-line" : "ri-add-line"}
                                style={{ color: showComponent.showInvestComponent ? "#a52822" : "black" }}></i>
                        </div>
                        {showComponent.showInvestComponent ? <Invest /> : ""}
                    </div>
                    <div onClick={() => handleClick('showExchangeComponent')}>
                        <div className={showComponent.showExchangeComponent ? "service-title opened" : "service-title"}>
                            <svg className={showComponent.showExchangeComponent ? "opened_svg " : ""} xmlns="http://www.w3.org/2000/svg" width="32.399" height="31.078" viewBox="0 0 32.399 31.078"><g transform="translate(0.13 0.001)"><path d="M269.691,3.494l-5.4-3.13a2.681,2.681,0,0,0-2.7,0l-5.451,3.13a1.653,1.653,0,0,0-.594,2.213,1.572,1.572,0,0,0,2,.7v7.016a.54.54,0,1,0,1.079,0V5.814l3.508-2.051a1.72,1.72,0,0,1,1.619,0l3.508,2.051v7.61a.54.54,0,1,0,1.079,0V6.408a1.916,1.916,0,0,0,.54.108A1.59,1.59,0,0,0,270.5,4.9a1.611,1.611,0,0,0-.81-1.4Zm-.324,1.673a.8.8,0,0,1-.324.27.61.61,0,0,1-.432-.054l-4.318-2.537a2.984,2.984,0,0,0-1.349-.378,2.436,2.436,0,0,0-1.349.378l-4.372,2.537a.546.546,0,0,1-.594-.918h.054l5.4-3.13a1.72,1.72,0,0,1,1.619,0l5.4,3.13a.5.5,0,0,1,.27.7Zm0,0" transform="translate(-238.232)"></path><path d="M339.778,132.4a.51.51,0,0,0,.54-.54v-1.943a.344.344,0,0,0,0-.324v-.971A1.59,1.59,0,0,0,338.7,127h-1.079A1.59,1.59,0,0,0,336,128.619v3.238a.54.54,0,0,0,1.079,0v-3.238a.51.51,0,0,1,.54-.54H338.7a.51.51,0,0,1,.54.54v.594h-.54a.54.54,0,1,0,0,1.079h.54v1.565A.541.541,0,0,0,339.778,132.4Zm0,0" transform="translate(-313.446 -118.433)"></path><path d="M333.4,96.341a.51.51,0,0,0-.54-.54H328.54a.54.54,0,1,0,0,1.079h4.318A.51.51,0,0,0,333.4,96.341Zm0,0" transform="translate(-305.985 -89.339)"></path><path d="M271.395,223.961a.522.522,0,0,0-.756,0l-4.318,4.318a.493.493,0,0,0-.108.594.519.519,0,0,0,.486.324h1.619v2.159a.51.51,0,0,1-.54.54h-1.619a.54.54,0,0,0,0,1.079h1.619a1.59,1.59,0,0,0,1.619-1.619v-2.7a.51.51,0,0,0-.54-.54h-.864l3.022-3.022,3.022,3.022h-.864a.51.51,0,0,0-.54.54v3.778a3.755,3.755,0,0,1-3.778,3.778H264.54a.54.54,0,0,0,0,1.079h4.318a4.837,4.837,0,0,0,4.857-4.857V229.2h1.619a.472.472,0,0,0,.486-.324.493.493,0,0,0-.108-.594Zm0,0" transform="translate(-246.303 -208.702)"></path><path d="M249.175,307.039v-2.7a.54.54,0,1,0-1.079,0v2.7a1.59,1.59,0,0,1-1.619,1.619H240.54a.54.54,0,1,0,0,1.079h5.937A2.672,2.672,0,0,0,249.175,307.039Zm0,0" transform="translate(-223.922 -283.307)"></path><path d="M44.449,45.131a.522.522,0,0,0,.756,0l4.318-4.318a.492.492,0,0,0,.108-.593.472.472,0,0,0-.486-.324H47.525V37.737a.51.51,0,0,1,.54-.54h1.619a.54.54,0,0,0,0-1.079H48.065a1.59,1.59,0,0,0-1.619,1.619v2.7a.51.51,0,0,0,.54.54h.864L44.826,44,41.8,40.975h.864a.51.51,0,0,0,.54-.54V36.658a3.755,3.755,0,0,1,3.778-3.778H51.3a.54.54,0,1,0,0-1.079H46.985a4.837,4.837,0,0,0-4.857,4.857V39.9H40.509a.472.472,0,0,0-.486.324.492.492,0,0,0,.108.593Zm0,0" transform="translate(-37.384 -29.656)"></path><path d="M104,66.5v2.7a.54.54,0,0,0,1.079,0V66.5A1.59,1.59,0,0,1,106.7,64.88h5.937a.54.54,0,0,0,0-1.079H106.7A2.672,2.672,0,0,0,104,66.5Zm0,0" transform="translate(-97.097 -59.498)"></path><path d="M188.318,190.817v-1.133a2.283,2.283,0,0,0,1.565-1.565h1.133a.54.54,0,0,0,0-1.079h-1.133a2.283,2.283,0,0,0-1.565-1.565v-1.133a.54.54,0,0,0-1.079,0v1.133a2.283,2.283,0,0,0-1.565,1.565H184.54a.54.54,0,1,0,0,1.079h1.133a2.283,2.283,0,0,0,1.565,1.565v1.133a.54.54,0,1,0,1.079,0Zm-1.619-3.238a1.079,1.079,0,1,1,1.079,1.079A1.083,1.083,0,0,1,186.7,187.579Zm0,0" transform="translate(-171.7 -171.402)"></path><path d="M269.691,3.494l-5.4-3.13a2.681,2.681,0,0,0-2.7,0l-5.451,3.13a1.653,1.653,0,0,0-.594,2.213,1.572,1.572,0,0,0,2,.7v7.016a.54.54,0,1,0,1.079,0V5.814l3.508-2.051a1.72,1.72,0,0,1,1.619,0l3.508,2.051v7.61a.54.54,0,1,0,1.079,0V6.408a1.916,1.916,0,0,0,.54.108A1.59,1.59,0,0,0,270.5,4.9a1.611,1.611,0,0,0-.81-1.4Zm-.324,1.673a.8.8,0,0,1-.324.27.61.61,0,0,1-.432-.054l-4.318-2.537a2.984,2.984,0,0,0-1.349-.378,2.436,2.436,0,0,0-1.349.378l-4.372,2.537a.546.546,0,0,1-.594-.918h.054l5.4-3.13a1.72,1.72,0,0,1,1.619,0l5.4,3.13a.5.5,0,0,1,.27.7Zm0,0" transform="translate(-255.475 17.114)"></path><path d="M339.778,132.4a.51.51,0,0,0,.54-.54v-1.943a.344.344,0,0,0,0-.324v-.971A1.59,1.59,0,0,0,338.7,127h-1.079A1.59,1.59,0,0,0,336,128.619v3.238a.54.54,0,0,0,1.079,0v-3.238a.51.51,0,0,1,.54-.54H338.7a.51.51,0,0,1,.54.54v.594h-.54a.54.54,0,1,0,0,1.079h.54v1.565A.541.541,0,0,0,339.778,132.4Zm0,0" transform="translate(-330.689 -101.32)"></path><path d="M333.4,96.341a.51.51,0,0,0-.54-.54H328.54a.54.54,0,1,0,0,1.079h4.318A.51.51,0,0,0,333.4,96.341Zm0,0" transform="translate(-323.229 -72.225)"></path></g></svg>
                            <span>МІНЯЄМО</span>
                            <i className={showComponent.showExchangeComponent ? "ri-subtract-line" : "ri-add-line"}
                                style={{ color: showComponent.showExchangeComponent ? "#a52822" : "black" }}></i>
                        </div>
                        {showComponent.showExchangeComponent ? <Exchange /> : ""}
                    </div>
                    <div onClick={() => handleClick('showCreditComponent')}>
                        <div className={showComponent.showCreditComponent ? "service-title opened" : "service-title"}>
                            <svg className={showComponent.showCreditComponent ? "opened_svg " : ""} xmlns="http://www.w3.org/2000/svg" width="31.559" height="31.559" viewBox="0 0 31.559 31.559"><g transform="translate(11.465 3.698)"><path d="M186.616,60a.616.616,0,1,0,.616.616A.617.617,0,0,0,186.616,60Z" transform="translate(-186 -60)"></path></g><g transform="translate(13.891 4.931)"><path d="M227.249,83.7a.616.616,0,1,1,0-1.233.99.99,0,0,1,.667.322.616.616,0,1,0,.857-.886,2.381,2.381,0,0,0-.908-.567v-.718a.616.616,0,1,0-1.233,0v.722a1.849,1.849,0,0,0,.616,3.592.616.616,0,0,1,0,1.233,1.115,1.115,0,0,1-.8-.466.616.616,0,0,0-.944.793,2.556,2.556,0,0,0,1.128.8v.719a.616.616,0,1,0,1.233,0v-.722a1.849,1.849,0,0,0-.616-3.592Z" transform="translate(-225.361 -80)"></path></g><g transform="translate(17.998 8.999)"><path d="M303.095,146a2.468,2.468,0,0,0-2.466,2.466v4.393a2.465,2.465,0,0,0-2.36.644l-4.134,4.134a3.06,3.06,0,0,0-.9,2.18v3.627h-.616a.616.616,0,0,0-.616.616v3.883a.616.616,0,0,0,.616.616h8.629a.616.616,0,0,0,.616-.616V164.06a.616.616,0,0,0-.616-.616h-.616v-.291a.62.62,0,0,1,.181-.436l3.847-3.847a3.062,3.062,0,0,0,.9-2.18v-8.224A2.468,2.468,0,0,0,303.095,146Zm-2.466,21.327h-7.4v-2.65h7.4Zm3.7-10.637a1.838,1.838,0,0,1-.542,1.308l-3.847,3.847a1.862,1.862,0,0,0-.542,1.307v.291h-4.931v-3.627a1.836,1.836,0,0,1,.542-1.308l4.134-4.134a1.231,1.231,0,0,1,1.692-.047l.011.009c.014.012.027.025.041.038a1.232,1.232,0,0,1,0,1.743l-3.063,3.063a.616.616,0,0,0,.872.872l3.063-3.063a2.464,2.464,0,0,0,.106-3.373v-5.15a1.233,1.233,0,0,1,2.466,0Z" transform="translate(-292 -146)"></path></g><g transform="translate(0 8.999)"><path d="M12.944,163.444h-.616v-3.627a3.06,3.06,0,0,0-.9-2.18L7.291,153.5a2.465,2.465,0,0,0-2.36-.644v-4.393a2.466,2.466,0,1,0-4.931,0v8.224a3.062,3.062,0,0,0,.9,2.18l3.847,3.847a.621.621,0,0,1,.181.436v.291H4.315a.616.616,0,0,0-.616.616v3.883a.616.616,0,0,0,.616.616h8.629a.616.616,0,0,0,.616-.616V164.06A.616.616,0,0,0,12.944,163.444ZM1.775,158a1.838,1.838,0,0,1-.542-1.308v-8.224a1.233,1.233,0,0,1,2.466,0v5.15a2.464,2.464,0,0,0,.106,3.373l3.082,3.082a.616.616,0,1,0,.872-.872l-3.082-3.082a1.232,1.232,0,0,1,0-1.743c.013-.013.027-.026.041-.038l.011-.009a1.231,1.231,0,0,1,1.692.047l4.134,4.134a1.835,1.835,0,0,1,.542,1.308v3.627H6.164v-.291a1.862,1.862,0,0,0-.542-1.307Zm10.553,9.329h-7.4v-2.65h7.4Z" transform="translate(0 -146)"></path></g><g transform="translate(6.534)"><path d="M115.246,0a9.246,9.246,0,1,0,9.246,9.246A9.256,9.256,0,0,0,115.246,0Zm0,17.259a8.013,8.013,0,1,1,8.013-8.013A8.022,8.022,0,0,1,115.246,17.259Z" transform="translate(-106)"></path></g><g transform="translate(8.999 2.467)"><path d="M157.037,41.531a6.827,6.827,0,0,0-5.758-1.34.616.616,0,1,0,.26,1.205,5.6,5.6,0,0,1,4.724,1.094,5.546,5.546,0,1,1-8.373,1.7.616.616,0,0,0-1.086-.583,6.781,6.781,0,1,0,10.234-2.076Z" transform="translate(-146 -40.031)"></path></g></svg>
                            <span>КРЕДИТУЄМО</span>
                            <i className={showComponent.showCreditComponent ? "ri-subtract-line" : "ri-add-line"}
                                style={{ color: showComponent.showCreditComponent ? "#a52822" : "black" }}></i>
                        </div>
                        {showComponent.showCreditComponent ? <Credit /> : ""}
                    </div>
                    <div onClick={() => handleClick('showHelpComponent')}>
                        <div className={showComponent.showHelpComponent ? "service-title opened" : "service-title"}>
                            <svg className={showComponent.showHelpComponent ? "opened_svg " : ""} xmlns="http://www.w3.org/2000/svg" width="29.201" height="29.201" viewBox="0 0 29.201 29.201"><path d="M40.57,451.992a.57.57,0,0,0-.57.57h0a.57.57,0,1,0,.57-.571Zm0,0" transform="translate(-37.719 -426.213)"></path><path d="M77.674,0H73.112a.57.57,0,0,0-.57.57v.6l-.761,0h0a.57.57,0,0,0,0,1.141l.768,0V8.223c-1.493.941-2.841.4-4.264-.174A5.955,5.955,0,0,0,65.4,7.4c-.305.038-1.129.158-2,.284-.826.12-1.681.244-1.975.281a.566.566,0,0,1-.42-.117.582.582,0,0,1-.222-.39c-.012-.1-.046-.369.669-.7a28.681,28.681,0,0,1,4.424-1.648.57.57,0,0,0-.293-1.1,29.852,29.852,0,0,0-4.61,1.715,2.517,2.517,0,0,0-1.08.845L54.177,8.13c-.6.151-.91-.088-1-.363a.636.636,0,0,1,.448-.789c.448-.17,1.516-.641,2.868-1.236,1.792-.788,4.021-1.77,5.8-2.491a9.932,9.932,0,0,1,4.92-.978h0a.57.57,0,0,0,0-1.141,11.038,11.038,0,0,0-5.352,1.062c-1.793.727-4.031,1.712-5.83,2.5-1.287.567-2.4,1.056-2.817,1.215l-.005,0a1.765,1.765,0,0,0-1.12,2.2,1.852,1.852,0,0,0,2.37,1.118l.01,0,5.22-1.423A1.721,1.721,0,0,0,61.569,9.1c.3-.038,1.126-.158,2-.284.829-.12,1.685-.245,1.979-.282a5.117,5.117,0,0,1,2.307.573,8.086,8.086,0,0,0,3,.766,4.112,4.112,0,0,0,1.69-.359V9.7a.57.57,0,0,0,.57.57h4.563a.57.57,0,0,0,.57-.57V.57a.57.57,0,0,0-.57-.57ZM77.1,9.125H73.682V1.744h0v-.6H77.1Zm0,0" transform="translate(-49.044 0)"></path><path d="M452.57,41.145a.57.57,0,0,0,.57-.57h0a.57.57,0,1,0-.57.571Zm0,0" transform="translate(-426.221 -37.722)"></path><path d="M119.992,193.985a3.99,3.99,0,0,0,3.273-1.711h2.107a.57.57,0,0,0,.4-.167l.974-.974h.668l.974.974a.57.57,0,0,0,.4.167h.893a.57.57,0,0,0,.4-.167L131.8,190.4a.57.57,0,0,0,.167-.4v-1.711a.57.57,0,0,0-.57-.57h-8.133a3.991,3.991,0,1,0-3.274,6.274Zm10.836-5.133v.9l-1.377,1.377h-.421l-.974-.974a.57.57,0,0,0-.4-.167h-1.141a.57.57,0,0,0-.4.167l-.974.974h-1.319a3.982,3.982,0,0,0,0-2.281Zm-10.836-1.711a2.852,2.852,0,1,1-2.852,2.852A2.855,2.855,0,0,1,119.992,187.141Zm0,0" transform="translate(-109.384 -175.392)"></path><path d="M156.57,247.137a.57.57,0,1,0-.57-.571h0A.57.57,0,0,0,156.57,247.137Zm0,0" transform="translate(-147.103 -231.966)"></path><path d="M349.164,21.246h0a.57.57,0,1,0-.571-.57A.57.57,0,0,0,349.165,21.246Zm0,0" transform="translate(-328.712 -18.959)"></path><path d="M23.783,333.035l-.01,0-5.22,1.423a1.721,1.721,0,0,0-1.877-1.292c-.3.038-1.126.158-2,.284-.829.12-1.685.245-1.979.282a5.121,5.121,0,0,1-2.307-.573c-1.331-.536-2.941-1.184-4.69-.408v-.18a.57.57,0,0,0-.57-.57H.57a.57.57,0,0,0-.57.57V341.7a.57.57,0,0,0,.57.57H5.133a.57.57,0,0,0,.57-.57v-.6l.761,0h0a.57.57,0,0,0,0-1.141l-.768,0v-5.917c1.493-.941,2.841-.4,4.264.174a5.951,5.951,0,0,0,2.875.646c.305-.038,1.129-.158,2-.284.826-.12,1.681-.244,1.975-.281a.564.564,0,0,1,.42.117.581.581,0,0,1,.222.39c.012.1.046.369-.669.7a28.649,28.649,0,0,1-4.423,1.648.57.57,0,0,0,.293,1.1,29.86,29.86,0,0,0,4.61-1.716,2.519,2.519,0,0,0,1.08-.845l5.718-1.559c.6-.151.91.088,1,.363a.636.636,0,0,1-.448.789c-.447.17-1.516.641-2.868,1.236-1.791.788-4.021,1.77-5.8,2.491a9.93,9.93,0,0,1-4.92.978h0a.57.57,0,0,0,0,1.141h.138a10.945,10.945,0,0,0,5.214-1.062c1.793-.727,4.031-1.712,5.829-2.5,1.287-.567,2.4-1.056,2.817-1.215l.006,0a1.765,1.765,0,0,0,1.12-2.2,1.853,1.853,0,0,0-2.37-1.118ZM1.141,341.129v-7.985H4.563v7.382h0v.6Zm0,0" transform="translate(0 -313.068)"></path><path d="M143.977,471.895h0a.57.57,0,1,0,.571.57A.57.57,0,0,0,143.976,471.895Zm0,0" transform="translate(-135.227 -444.981)"></path></svg>
                            <span>ДОПОМОГАЄМО</span>
                            <i className={showComponent.showHelpComponent ? "ri-subtract-line" : "ri-add-line"}
                                style={{ color: showComponent.showHelpComponent ? "#a52822" : "black" }}></i>
                        </div>
                        {showComponent.showHelpComponent ? <Help /> : ""}
                    </div>
                </div>    
            </div>

        </div>
    )
}

export default ServicesInfo;