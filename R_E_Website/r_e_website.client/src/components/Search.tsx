import '../style/Search.css';
import { IEstateFilter } from '../estateManagement/IEstateFilter'
import { EstateType } from '../estateManagement/EnumEstateType'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Search({onFilters}) {

    const [divColor, setDivColor] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });

    const [districtsList, setDisctrictsList] = useState(false);

    const [selectedType, setSelectedType] = useState(0);

    const [selectedCur, setSelectedCur] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState(0);

    useEffect(() => {
        switch (window.location.pathname) {
            case '/catalog':
                setSelectedType(EstateType.Flat)
                break
            case '/catalog-house':
                setSelectedType(EstateType.House);
                break;
            case '/catalog-land':
                setSelectedType(EstateType.Land);
                break;
            case '/catalog-commerce':
                setSelectedType(EstateType.Commerce);
                break;
    } })

    const handleTypeSelection = (value: EstateType) => {
        setSelectedType(value);
        setSelectedType(estateType => {
            setFormData(data => ({ ...data, estateType: selectedNumber }))
            return estateType;
        });
       
    };

    const handleNumberSelection = (value: number) => {
        setSelectedNumber(value);
        setDivColor((prev) => ({ ...prev, [value]: !prev[value] }));

        const chosenNumbers = Object.entries(divColor)
            .filter(([key, value]) => value)
            .map(([key]) => parseInt(key, 10));
        const minChosen = Math.min(...chosenNumbers);
        const maxChosen = Math.max(...chosenNumbers);

        setFormData(data => ({ ...data, roomsCountFrom: minChosen }))
        setFormData(data => ({ ...data, roomsCountTo: maxChosen }))
    };

    const [formData, setFormData] = useState({
        estateType: EstateType.Commerce,
        estateLocation: '',
        roomsCountFrom: 0,
        roomsCountTo: 0,
        totalSquareFrom: 0,
        totalSquareTo: 0,
        priceRangeFrom: 0,
        priceRangeTo: 0
    })

    async function postRequest() {

        const filterData: IEstateFilter = {
            estateType: formData.estateType,
            estateLocation: formData.estateLocation,
            roomsCountFrom: formData.roomsCountFrom,
            roomsCountTo: formData.roomsCountTo,
            totalSquareFrom: formData.totalSquareFrom,
            totalSquareTo: formData.totalSquareTo,
            priceRangeFrom: selectedCur ? formData.priceRangeFrom / 39 : formData.priceRangeFrom,
            priceRangeTo: selectedCur ? formData.priceRangeTo / 39 : formData.priceRangeTo,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(filterData)
        }
        const response = await fetch('/api/estatedto/getbyfilter', requestOptions);
        const data = response.json();
        onFilters(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postRequest()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-container-s">
                <div className="search-item-s">
                    <div className="search-item-header-s">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.205" height="26.129" viewBox="0 0 26.205 26.129"><defs></defs><g transform="translate(0.238 0.199)"><g transform="translate(0 0.001)"><g transform="translate(0 0)"><path className="a" d="M396.4,341.337a.429.429,0,0,0-.429.429v7.29h-3a.429.429,0,1,0,0,.858H396.4a.429.429,0,0,0,.429-.429v-7.719A.429.429,0,0,0,396.4,341.337Z" transform="translate(-372.812 -324.184)"></path><path className="a" d="M378.9,345.2v-3.431a.429.429,0,0,0-.429-.429H375.9a.429.429,0,0,0-.429.429V345.2a.429.429,0,0,0,.429.429h2.573A.429.429,0,0,0,378.9,345.2Zm-.858-.429h-1.715v-2.573h1.715Z" transform="translate(-356.601 -324.184)"></path><path className="a" d="M81.562,88.339a.429.429,0,0,0,.429-.429V85.766a.429.429,0,0,0-.429-.429H68.7a.429.429,0,0,0-.429.429v15.008a.429.429,0,0,0,.858,0v-.858h.429a.429.429,0,0,0,0-.858h-.429V96.486h1.715V98.2a.429.429,0,0,0,.858,0V96.486h1.715a22721.112,22721.112,0,0,1,.858-.858V93.056h1.715a.678.678,0,1,0,.858-.858V89.625H78.56v.858a.429.429,0,1,0,.858,0v-.858h.858a.429.429,0,1,0,0-.858h-.858V86.195h1.715V87.91A.429.429,0,0,0,81.562,88.339Zm-10.72,7.29H69.127V93.056h1.715v2.573Zm0-3.431H69.127V89.625h1.715V92.2Zm0-3.431H69.127V86.195h1.715v2.573Zm2.573,6.861H71.7V93.056h1.715Zm0-3.431H71.7V89.625h1.715Zm0-3.431H71.7V86.195h1.715ZM75.988,92.2H74.272V89.625h1.715Zm0-3.431H74.272V86.195h1.715Zm2.573,0H76.845V86.195H78.56Z" transform="translate(-64.838 -81.049)"></path><path className="a" d="M34.565,21.873a.429.429,0,0,0,.429-.429V3.434h3a.429.429,0,0,0,.429-.429V1.719h3a.429.429,0,0,0,.429-.429V.862H43.57V1.29A.429.429,0,0,0,44,1.719h3v.858h-7.29a.429.429,0,1,0,0,.858h10.72V5.15a.429.429,0,0,0,.858,0V3.006a.429.429,0,0,0-.429-.429h-3V1.29a.429.429,0,0,0-.429-.429h-3V.433A.429.429,0,0,0,44,0H41.426A.429.429,0,0,0,41,.433V.862H38a.429.429,0,0,0-.429.429V2.577h-3a.429.429,0,0,0-.429.429V21.444A.429.429,0,0,0,34.565,21.873Z" transform="translate(-32.421 -0.004)"></path><path className="a" d="M357.586,171.529h-3V171.1a.429.429,0,0,0-.429-.429H352.44a.429.429,0,0,0-.429.429v.858a.429.429,0,1,0,.858,0v-.429h.858v.429a.429.429,0,0,0,.429.429h3v5.826l-6.558-6.558a.429.429,0,0,0-.606.606l7.29,7.29a.429.429,0,0,0,.732-.3v-7.29A.429.429,0,0,0,357.586,171.529Z" transform="translate(-332.286 -162.095)"></path><path className="a" d="M180.533,372.512h-4.288a.429.429,0,0,0-.429.429v.429h-4.288v-6a.429.429,0,1,0-.858,0V373.8a.429.429,0,0,0,.429.429h5.146a.429.429,0,0,0,.429-.429v-.429h3.43v.429a.429.429,0,0,0,.858,0v-.858A.429.429,0,0,0,180.533,372.512Z" transform="translate(-162.094 -348.498)"></path><path className="a" d="M25.6.127a.428.428,0,0,0-.606,0L.126,25a.429.429,0,1,0,.606.606L25.6.733A.428.428,0,0,0,25.6.127Z" transform="translate(0 -0.001)"></path><path className="a" d="M293.138,347.34a.429.429,0,0,0,.429-.429v-5.146a.429.429,0,0,0-.429-.429h-2.573a.429.429,0,0,0-.429.429v5.146a.429.429,0,0,0,.858,0v-4.717h1.715v1.715h-.429a.429.429,0,1,0,0,.858h.429v2.144A.429.429,0,0,0,293.138,347.34Z" transform="translate(-275.556 -324.184)"></path><path className="a" d="M205.232,341.337a.429.429,0,0,0-.429.429V345.2a.429.429,0,0,0,.429.429H207.8a.429.429,0,0,0,.429-.429v-3.431a.429.429,0,0,0-.429-.429Zm2.144,3.43h-1.715v-2.573h1.715Z" transform="translate(-194.511 -324.184)"></path></g></g></g></svg>
                        <p>Вся нерухомість</p>
                    </div>

                    <div className="svg-container-s">
                        <Link to="/catalog" onClick={() => handleTypeSelection(EstateType.Flat)}>
                            <div className={selectedType === EstateType.Flat ? 'active-svg' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28.769" height="29.761" viewBox="0 0 28.769 29.761"><g transform="translate(1)"><g transform="translate(-1 0)"><g transform="translate(0 0)"><path className="a" d="M35.808,4.456h-.992V2.968a.469.469,0,0,0-.5-.5H31.344a.469.469,0,0,0-.5.5V4.456h-.992a.469.469,0,0,0-.5.5v7.936h-.5V11.4a.469.469,0,0,0-.5-.5h-.5v-.5a.5.5,0,0,0-.992,0v.5h-.5a.469.469,0,0,0-.5.5v1.488H24.4V2.968a.469.469,0,0,0-.5-.5H22.416V-.5a.469.469,0,0,0-.5-.5H15.967a.469.469,0,0,0-.5.5V2.472H13.983a.469.469,0,0,0-.5.5v12.9H12.5V14.377a.469.469,0,0,0-.5-.5H9.023a.469.469,0,0,0-.5.5v1.488h-.5a.469.469,0,0,0-.5.5v11.9a.469.469,0,0,0,.5.5H35.808a.469.469,0,0,0,.5-.5V4.952A.469.469,0,0,0,35.808,4.456ZM31.84,3.464h1.984v.992H31.84ZM26.88,11.9h.992v.992H26.88Zm-12.4-8.432h1.488a.469.469,0,0,0,.5-.5V-.008h4.96V2.968a.469.469,0,0,0,.5.5h1.488v9.424h-.992V4.952a.5.5,0,0,0-.992,0v7.936h-.992V4.952a.5.5,0,1,0-.992,0v7.936h-.992V4.952a.5.5,0,0,0-.992,0V15.865h-.992V4.952a.5.5,0,0,0-.992,0V15.865h-.992ZM9.519,14.873H11.5v.992H9.519Zm-.992,1.984h8.928v.992H13.983a.469.469,0,0,0-.5.5v9.424H8.527Zm5.952,1.984h2.976v.992H15.967a.5.5,0,1,0,0,.992h1.488v.992H15.967a.5.5,0,0,0,0,.992h1.488V23.8H15.967a.5.5,0,1,0,0,.992h1.488v.992H15.967a.5.5,0,1,0,0,.992h1.488v.992H14.479Zm3.968-.5V13.881H29.36V27.769h-.992v-12.4a.5.5,0,1,0-.992,0v12.4h-.992v-12.4a.5.5,0,1,0-.992,0v12.4H24.4v-12.4a.5.5,0,1,0-.992,0v12.4h-.992v-12.4a.5.5,0,0,0-.992,0v12.4h-.992v-12.4a.5.5,0,1,0-.992,0v12.4h-.992Zm16.865,9.424h-4.96V5.448h4.96Z" transform="translate(-7.535 1)"></path><path className="a" d="M417.63,331.8a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V332.3A.469.469,0,0,0,417.63,331.8Z" transform="translate(-393.325 -312.455)"></path><path className="a" d="M417.63,383a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0V383.5A.469.469,0,0,0,417.63,383Z" transform="translate(-393.325 -360.679)"></path><path className="a" d="M417.63,434.2a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0V434.7A.469.469,0,0,0,417.63,434.2Z" transform="translate(-393.325 -408.903)"></path><path className="a" d="M417.63,280.6a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V281.1A.469.469,0,0,0,417.63,280.6Z" transform="translate(-393.325 -264.231)"></path><path className="a" d="M417.63,127a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V127.5A.469.469,0,0,0,417.63,127Z" transform="translate(-393.325 -119.56)"></path><path className="a" d="M417.63,178.2a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V178.7A.469.469,0,0,0,417.63,178.2Z" transform="translate(-393.325 -167.783)"></path><path className="a" d="M417.63,229.4a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V229.9A.469.469,0,0,0,417.63,229.4Z" transform="translate(-393.325 -216.007)"></path><path className="a" d="M451.763,331.8a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V332.3A.469.469,0,0,0,451.763,331.8Z" transform="translate(-425.474 -312.455)"></path><path className="a" d="M451.763,434.2a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0V434.7A.469.469,0,0,0,451.763,434.2Z" transform="translate(-425.474 -408.903)"></path><path className="a" d="M451.763,178.2a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V178.7A.469.469,0,0,0,451.763,178.2Z" transform="translate(-425.474 -167.783)"></path><path className="a" d="M451.763,127a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V127.5A.469.469,0,0,0,451.763,127Z" transform="translate(-425.474 -119.56)"></path><path className="a" d="M451.763,280.6a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V281.1A.469.469,0,0,0,451.763,280.6Z" transform="translate(-425.474 -264.231)"></path><path className="a" d="M451.763,383a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0V383.5A.469.469,0,0,0,451.763,383Z" transform="translate(-425.474 -360.679)"></path><path className="a" d="M451.763,229.4a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0V229.9A.469.469,0,0,0,451.763,229.4Z" transform="translate(-425.474 -216.007)"></path><path className="a" d="M42.163,425.667a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0v-.992A.469.469,0,0,0,42.163,425.667Z" transform="translate(-39.683 -400.866)"></path><path className="a" d="M42.163,323.267a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0v-.992A.469.469,0,0,0,42.163,323.267Z" transform="translate(-39.683 -304.418)"></path><path className="a" d="M42.163,374.467a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0v-.992A.469.469,0,0,0,42.163,374.467Z" transform="translate(-39.683 -352.642)"></path><path className="a" d="M76.3,374.467a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0v-.992A.469.469,0,0,0,76.3,374.467Z" transform="translate(-71.832 -352.642)"></path><path className="a" d="M76.3,425.667a.469.469,0,0,0-.5.5v.992a.5.5,0,0,0,.992,0v-.992A.469.469,0,0,0,76.3,425.667Z" transform="translate(-71.832 -400.866)"></path><path className="a" d="M76.3,323.267a.469.469,0,0,0-.5.5v.992a.5.5,0,1,0,.992,0v-.992A.469.469,0,0,0,76.3,323.267Z" transform="translate(-71.832 -304.418)"></path><path className="a" d="M178.7,35.614a.469.469,0,0,0,.5-.5V33.63a.5.5,0,1,0-.992,0v1.488A.469.469,0,0,0,178.7,35.614Z" transform="translate(-168.28 -31.15)"></path><path className="a" d="M212.83,35.614a.469.469,0,0,0,.5-.5V33.63a.5.5,0,1,0-.992,0v1.488A.469.469,0,0,0,212.83,35.614Z" transform="translate(-200.429 -31.15)"></path></g></g></g></svg>
                            </div>
                            <span>Квартири</span>
                        </Link>

                        <Link to="/catalog-house" onClick={() => handleTypeSelection(EstateType.House)}>
                            <div className={selectedType === EstateType.House ? 'active-svg' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37.061" height="31.074" viewBox="0 0 37.061 31.074"><defs></defs><g transform="translate(0.2 0.259)"><path className="a" d="M35.7,50.293a.594.594,0,0,0,.961-.466V46.659a.594.594,0,0,0-.226-.466l-9.668-7.617a1.855,1.855,0,0,0-2.3,0l-3.639,2.867V40.325a.594.594,0,0,0-.594-.594H17.7a.594.594,0,0,0-.594.594v4.05L14.8,46.193a.594.594,0,0,0-.226.466v3.167a.594.594,0,0,0,.961.467l.305-.241v5.787L10.3,51.475a1.855,1.855,0,0,0-2.3,0L.226,57.595A.594.594,0,0,0,0,58.061v3.167a.594.594,0,0,0,.961.466l.305-.241V67.6H.594a.594.594,0,0,0,0,1.188H36.067a.594.594,0,1,0,0-1.188h-.673V50.052l.305.241ZM18.291,40.919h1.346v1.46l-1.346,1.061Zm-2.534,6.029L25.2,39.509a.671.671,0,0,1,.833,0l9.441,7.439V48.6l-9.49-7.477a.594.594,0,0,0-.735,0L15.757,48.6ZM1.188,58.35l7.541-5.942a.671.671,0,0,1,.833,0l6.274,4.943v1.655L9.513,54.025a.594.594,0,0,0-.735,0L1.188,60Zm1.267,2.169,6.691-5.271,6.691,5.272V67.6H13.223V60.6A.594.594,0,0,0,12.629,60H5.661a.594.594,0,0,0-.594.594V67.6H2.455Zm3.8,3.2h5.78v1.346H6.255Zm5.78-1.188H6.255V61.189h5.78Zm-5.78,3.722h5.78V67.6H6.255Zm17.182-3.086-.04,0a.594.594,0,0,0,0,1.188l.04,0V67.6H20.825V59.922h2.613ZM34.206,67.6H24.625V59.328a.594.594,0,0,0-.594-.594h-3.8a.594.594,0,0,0-.594.594V67.6H17.024V49.117l8.591-6.769,8.591,6.769Z" transform="translate(0 -38.175)"></path><path className="a" d="M336.594,304.08h3.8a.594.594,0,0,0,.594-.594v-5.068a.594.594,0,0,0-.594-.594h-3.8a.594.594,0,0,0-.594.594v5.068A.594.594,0,0,0,336.594,304.08Zm.594-1.188v-1.98H339.8v1.98Zm2.613-3.88v.713h-2.613v-.713Z" transform="translate(-309.395 -277.266)"></path><path className="a" d="M336.594,192.08h3.8a.594.594,0,0,0,.594-.594v-5.068a.594.594,0,0,0-.594-.594h-3.8a.594.594,0,0,0-.594.594v5.068A.594.594,0,0,0,336.594,192.08Zm.594-1.188v-1.98H339.8v1.98Zm2.613-3.88v.713h-2.613v-.713Z" transform="translate(-309.395 -174.134)"></path><path className="a" d="M252.395,185.825h-3.8a.594.594,0,0,0-.594.594v5.068a.594.594,0,0,0,.594.594h3.8a.594.594,0,0,0,.594-.594v-5.068A.594.594,0,0,0,252.395,185.825Zm-.594,1.188v.713h-2.613v-.713Zm-2.613,3.88v-1.98H251.8v1.98Z" transform="translate(-228.363 -174.134)"></path></g></svg>
                            </div>
                            <span>Будинки</span>
                        </Link>

                        <Link to="/catalog-land" onClick={() => handleTypeSelection(EstateType.Land)}>
                            <div className={selectedType === EstateType.Land ? 'active-svg' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32.163" height="32.163" viewBox="0 0 32.163 32.163"><defs></defs><g transform="translate(0.2 0.2)"><path className="a" d="M32.763,10.222v-8.2H23.97A1.5,1.5,0,0,0,22.555,1h-.149a1.505,1.505,0,0,0-1.494,1.384L20.1,12.946l-2.668-1.778a5.612,5.612,0,0,0-1.673-.753,4.1,4.1,0,1,0-5.212-.236,4.621,4.621,0,0,1-1.8-.641L3.606,6.377A1.71,1.71,0,0,0,1,7.833v.2A1.706,1.706,0,0,0,1.781,9.47l6.758,4.373a2.551,2.551,0,0,1,1.17,2.151V24.1a17.126,17.126,0,0,0-8.115,7.866l-.4.8H32.568l-.4-.8a17.187,17.187,0,0,0-9.722-8.511l.338-4.387.2.123a1.71,1.71,0,0,0,2.607-1.457v-.211A1.707,1.707,0,0,0,24.83,16.1L23.1,14.948l.363-4.726ZM31.739,9.2h-8.2l.473-6.148h7.723ZM21.933,2.462a.477.477,0,0,1,.473-.438h.149a.482.482,0,0,1,.473.511L21.052,28.227a.477.477,0,0,1-.473.438H20.43a.482.482,0,0,1-.473-.511ZM19.349,22.7a16.934,16.934,0,0,0-2.468-.179V15.434l2.889,1.778Zm-5.556-8-.5.746-.5-.746.324-3.453h.347ZM10.222,7.148A3.074,3.074,0,1,1,13.3,10.222,3.077,3.077,0,0,1,10.222,7.148ZM9.1,12.981,2.338,8.609a.685.685,0,0,1-.314-.576v-.2a.686.686,0,0,1,1.045-.584L8.206,10.41a5.632,5.632,0,0,0,2.954.836h.933l-.349,3.719L13.3,17.293l1.552-2.327L14.5,11.261a4.584,4.584,0,0,1,2.364.76l3.146,2.1-.15,1.946L17.027,14.32h-1.17V28.688a1.013,1.013,0,0,1-1.047,1,1,1,0,0,1-1-1h0V19.443H12.783v9.244a1.014,1.014,0,0,1-1.048,1,1,1,0,0,1-1-1V15.993A3.572,3.572,0,0,0,9.1,12.981ZM6.766,27.143a1.535,1.535,0,0,1-2.185,2.149A16.131,16.131,0,0,1,6.766,27.143Zm22.6,2.368a1.513,1.513,0,0,1-.7.179,1.539,1.539,0,0,1-1.537-1.537,1.5,1.5,0,0,1,.2-.737,16.193,16.193,0,0,1,2.041,2.095ZM26.52,26.766a2.525,2.525,0,0,0-.417,1.387,2.564,2.564,0,0,0,2.562,2.562,2.535,2.535,0,0,0,1.329-.381,15.863,15.863,0,0,1,.894,1.405H2.875A16.047,16.047,0,0,1,3.949,30.1a2.556,2.556,0,0,0,3.632-3.573,16,16,0,0,1,2.128-1.279v3.442a2.039,2.039,0,0,0,2.072,2.026,2.014,2.014,0,0,0,1.516-.7,2.069,2.069,0,0,0,1.557.7,2.028,2.028,0,0,0,2.026-2.026V23.547a16.218,16.218,0,0,1,2.389.178l-.335,4.349c0,.039,0,.077,0,.116a1.5,1.5,0,0,0,1.5,1.5h.149a1.505,1.505,0,0,0,1.494-1.384l.292-3.8a16.065,16.065,0,0,1,4.155,2.257Zm-2.259-9.813a.684.684,0,0,1,.305.57v.211a.686.686,0,0,1-1.045.584l-.649-.4.138-1.8Z" transform="translate(-1 -1)"></path><path className="a" d="M57,7h1.025V8.025H57Z" transform="translate(-28.31 -3.926)"></path><path className="a" d="M53,7h1.025V8.025H53Z" transform="translate(-26.36 -3.926)"></path><path className="a" d="M49,7h1.025V8.025H49Z" transform="translate(-24.409 -3.926)"></path><path className="a" d="M46,52h1.025v1.025H46Z" transform="translate(-22.946 -25.872)"></path><path className="a" d="M43,57h1.025v1.025H43Z" transform="translate(-21.483 -28.31)"></path></g></svg>
                            </div>
                            <span>Земля</span>
                        </Link>

                        <Link to="/catalog-commerce" onClick={() => handleTypeSelection(EstateType.Commerce)}>
                            <div className={selectedType === EstateType.Commerce ? 'active-svg' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30.748" height="30.615" viewBox="0 0 30.748 30.615"><path className="a" d="M29.691,12.7h.6a.457.457,0,0,0,.457-.457V10.718a.457.457,0,0,0-.457-.457h-4.88V9.647h1.834a.457.457,0,0,0,.247-.841L15.621,1.162a.456.456,0,0,0-.494,0L3.255,8.807a.457.457,0,0,0,.247.841H5.336v.614H3.854a.457.457,0,1,0,0,.913H5.336v.614H.913v-.614H2.028a.457.457,0,1,0,0-.913H.457A.457.457,0,0,0,0,10.718v1.528a.457.457,0,0,0,.457.457h.6V24.009h-.6A.457.457,0,0,0,0,24.465v6.783a.457.457,0,0,0,.457.457H30.291a.457.457,0,0,0,.457-.457V24.465a.457.457,0,0,0-.457-.457h-.6Zm-.913,9.865H27.454v-4.72h1.324ZM7.163,12.7H9.939V25.119H7.163ZM11.42,27.117V25.576a.457.457,0,0,0-.457-.457h-.111V12.7h2.22V25.119h-.111a.457.457,0,0,0-.457.457v1.541H11.42Zm2-1.084h3.911v1.084H13.419Zm3.344-.913H13.986V12.7h2.776ZM6.6,26.033h3.911v1.084H6.6Zm-.889,2H25.041v.818H5.707Zm14.534-.913V26.033h3.911v1.084Zm3.344-2H20.809V20.756a.457.457,0,0,0-.913,0v4.364h-.111a.457.457,0,0,0-.457.457v1.541H18.243V25.576a.457.457,0,0,0-.457-.457h-.111V12.7H19.9v6.226a.457.457,0,0,0,.913,0V12.7h2.776V25.119Zm6.25-13.945v.614H25.412v-.614ZM15.374,2.089,25.693,8.734H5.055ZM6.25,9.647H24.5v1.066s0,0,0,0,0,0,0,0v1.066H6.25Zm-4.28,8.2H3.294v4.72H1.97ZM.913,24.922H5.241a.457.457,0,1,0,0-.913H1.97v-.528H3.75a.457.457,0,0,0,.457-.457V17.39a.457.457,0,0,0-.457-.457H1.97v-.78H5.241a.457.457,0,1,0,0-.913H1.97V12.7H6.25V25.119H6.139a.457.457,0,0,0-.457.457v1.541H5.25a.457.457,0,0,0-.457.457v1.275H4.3a.457.457,0,0,0-.457.457v1.486H.913Zm3.848,5.869V29.762H25.987v1.029Zm25.073-5.869v5.869H26.9V29.305a.457.457,0,0,0-.457-.457h-.489V27.573a.457.457,0,0,0-.457-.457h-.432V25.576a.457.457,0,0,0-.457-.457H24.5V12.7h4.28v2.538H25.507a.457.457,0,0,0,0,.913h3.271v.78H27a.457.457,0,0,0-.457.457v5.634a.457.457,0,0,0,.457.457h1.781v.528H25.507a.457.457,0,0,0,0,.913h4.328Z" transform="translate(0 -1.089)"></path><path className="a" d="M212.145,36.632a2.616,2.616,0,1,0-2.616-2.616A2.619,2.619,0,0,0,212.145,36.632Zm0-4.319a1.7,1.7,0,1,1-1.7,1.7A1.705,1.705,0,0,1,212.145,32.312Z" transform="translate(-196.771 -29.554)"></path><path className="a" d="M245.457,56.007a.457.457,0,0,0,.457-.457v-.764a.457.457,0,1,0-.913,0v.764A.457.457,0,0,0,245.457,56.007Z" transform="translate(-230.083 -51.088)"></path></svg>
                            </div>
                            <span>Комерція</span>
                        </Link>
                    </div>

                </div>

                <div>
                    <div className="search-item-header-s">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.675" height="23.678" viewBox="0 0 23.675 23.678"><defs></defs><g transform="translate(0.173 0.2)"><g transform="translate(4.971)"><path className="a" d="M115.455,0a6.688,6.688,0,0,0-5.193,10.9q.011.017.023.033L115.1,17.1a.455.455,0,0,0,.717,0l4.835-6.2,0-.007a6.688,6.688,0,0,0-5.2-10.9Zm4.482,10.336-.016.022-4.465,5.723-4.42-5.663a.454.454,0,0,0-.037-.052,5.779,5.779,0,1,1,8.939-.03Z" transform="translate(-108.767)"></path></g><g transform="translate(7.568 2.696)"><path className="a" d="M173.9,62.224a.455.455,0,0,0-.872.257,3.182,3.182,0,1,1-2.145-2.147.455.455,0,0,0,.258-.872,4.091,4.091,0,1,0,2.759,2.762Z" transform="translate(-165.884 -59.293)"></path></g><g transform="translate(13.776 3.761)"><path className="a" d="M303.22,82.872l-.008-.008a.455.455,0,1,0-.643.643l.008.008a.455.455,0,0,0,.643-.643Z" transform="translate(-302.436 -82.73)"></path></g><g transform="translate(0.027 13.011)"><path className="a" d="M18.648,287.058a.455.455,0,1,0-.284.864c2.523.83,4.029,2.074,4.029,3.327,0,1.06-1.093,2.132-3,2.942a20.4,20.4,0,0,1-7.73,1.356,20.4,20.4,0,0,1-7.73-1.356c-1.906-.81-3-1.882-3-2.942,0-.887.765-1.789,2.155-2.538A16.518,16.518,0,0,1,8.948,287.1a.455.455,0,0,0-.1-.9,17.429,17.429,0,0,0-6.19,1.719c-1.723.929-2.633,2.083-2.633,3.339,0,1.463,1.262,2.805,3.552,3.778a21.317,21.317,0,0,0,8.085,1.428,21.316,21.316,0,0,0,8.085-1.428c2.291-.973,3.552-2.315,3.552-3.778C23.3,289.558,21.606,288.031,18.648,287.058Z" transform="translate(-0.027 -286.188)"></path></g><g transform="translate(16.008 13.323)"><path className="a" d="M352.091,293.06l-.016,0a.455.455,0,0,0-.18.891l.016,0a.455.455,0,0,0,.18-.891Z" transform="translate(-351.531 -293.048)"></path></g><g transform="translate(7.326 14.957)"><path className="a" d="M161.478,329.347a.455.455,0,0,0-.535-.357l-.031.007a.455.455,0,1,0,.566.349Z" transform="translate(-160.577 -328.982)"></path></g><g transform="translate(4.761 14.581)"><path className="a" d="M112.564,320.717a.455.455,0,0,0-.071.906c2.968.232,4.549,1.1,4.549,1.638,0,.259-.413.7-1.578,1.088a16.4,16.4,0,0,1-8.834,0c-1.165-.388-1.578-.828-1.578-1.088,0-.237.321-.536.859-.8a.455.455,0,1,0-.4-.817c-1.132.554-1.369,1.184-1.369,1.616,0,1.709,3.473,2.6,6.9,2.6s6.9-.894,6.9-2.6C117.951,321.695,115.049,320.912,112.564,320.717Z" transform="translate(-104.143 -320.716)"></path></g></g></svg>
                        <p>Місце розташування</p>
                    </div>

                    <div className="search-item-body-s">
                        <span>Будь-яке</span>
                        <i className="ri-arrow-down-s-line"></i>
                    </div>

                </div>

                <div className="search-item">
                    <div className="search-item-header-s">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.543" height="21" viewBox="0 0 20.543 21"><g transform="translate(-5.567)"><g transform="translate(11.045 0)"><g transform="translate(0)"><path className="a" d="M153.511,0h-13.7a.685.685,0,0,0-.685.685V14.838a.685.685,0,0,0,.685.685h13.7a.685.685,0,0,0,.685-.685V.686A.685.685,0,0,0,153.511,0Zm-.685,5.478h-2.054a.685.685,0,0,0,0,1.37h2.054v7.3h-8.674V12.1a.685.685,0,1,0-1.37,0v2.054H140.5V1.371h2.283V8.9a.685.685,0,1,0,1.37,0V6.849h3.424a.685.685,0,1,0,0-1.37h-3.424V1.371h8.674V5.479Z" transform="translate(-139.131 -0.001)"></path></g></g><g transform="translate(8.306 16.891)"><path className="a" d="M89.965,413.4,88.6,412.027a.685.685,0,1,0-.968.968l.2.2H74.7l.2-.2a.685.685,0,1,0-.968-.968L72.562,413.4a.686.686,0,0,0,0,.969l1.369,1.369a.685.685,0,0,0,.968-.968l-.2-.2H87.827l-.2.2a.685.685,0,0,0,.968.968l1.369-1.369A.686.686,0,0,0,89.965,413.4Z" transform="translate(-72.362 -411.826)"></path></g><g transform="translate(5.567)"><g transform="translate(0)"><path className="a" d="M8.506,14.353l-.2.2V2.338l.2.2a.685.685,0,1,0,.968-.968L8.105.2a.685.685,0,0,0-.968,0L5.767,1.57a.685.685,0,0,0,.968.968l.2-.2V14.553l-.2-.2a.685.685,0,0,0-.968.968l1.37,1.37a.685.685,0,0,0,.968,0l1.37-1.37a.685.685,0,1,0-.968-.968Z" transform="translate(-5.567 0)"></path></g></g></g></svg>
                        <p>Кімнат</p>
                    </div>

                    <div className="search-item-body-s rooms-container-s">
                        <div onClick={() => handleNumberSelection(1)} style={{ backgroundColor: divColor[1] ? '#a52722' : 'white', color: divColor[1] ? 'white' : 'black' }}>1</div>
                        <div onClick={() => handleNumberSelection(2)} style={{ backgroundColor: divColor[2] ? '#a52722' : 'white', color: divColor[2] ? 'white' : 'black' }}>2</div>
                        <div onClick={() => handleNumberSelection(3)} style={{ backgroundColor: divColor[3] ? '#a52722' : 'white', color: divColor[3] ? 'white' : 'black' }}>3</div>
                        <div onClick={() => handleNumberSelection(4)} style={{ backgroundColor: divColor[4] ? '#a52722' : 'white', color: divColor[4] ? 'white' : 'black' }}>4</div>
                        <div onClick={() => handleNumberSelection(5)} style={{ backgroundColor: divColor[5] ? '#a52722' : 'white', color: divColor[5] ? 'white' : 'black' }}>5+</div>
                    </div>

                </div>

                <div>
                    <div className="search-item-header-s">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.543" height="21" viewBox="0 0 20.543 21"><g transform="translate(-5.567)"><g transform="translate(11.045 0)"><g transform="translate(0)"><path className="a" d="M153.511,0h-13.7a.685.685,0,0,0-.685.685V14.838a.685.685,0,0,0,.685.685h13.7a.685.685,0,0,0,.685-.685V.686A.685.685,0,0,0,153.511,0Zm-.685,5.478h-2.054a.685.685,0,0,0,0,1.37h2.054v7.3h-8.674V12.1a.685.685,0,1,0-1.37,0v2.054H140.5V1.371h2.283V8.9a.685.685,0,1,0,1.37,0V6.849h3.424a.685.685,0,1,0,0-1.37h-3.424V1.371h8.674V5.479Z" transform="translate(-139.131 -0.001)"></path></g></g><g transform="translate(8.306 16.891)"><path className="a" d="M89.965,413.4,88.6,412.027a.685.685,0,1,0-.968.968l.2.2H74.7l.2-.2a.685.685,0,1,0-.968-.968L72.562,413.4a.686.686,0,0,0,0,.969l1.369,1.369a.685.685,0,0,0,.968-.968l-.2-.2H87.827l-.2.2a.685.685,0,0,0,.968.968l1.369-1.369A.686.686,0,0,0,89.965,413.4Z" transform="translate(-72.362 -411.826)"></path></g><g transform="translate(5.567)"><g transform="translate(0)"><path className="a" d="M8.506,14.353l-.2.2V2.338l.2.2a.685.685,0,1,0,.968-.968L8.105.2a.685.685,0,0,0-.968,0L5.767,1.57a.685.685,0,0,0,.968.968l.2-.2V14.553l-.2-.2a.685.685,0,0,0-.968.968l1.37,1.37a.685.685,0,0,0,.968,0l1.37-1.37a.685.685,0,1,0-.968-.968Z" transform="translate(-5.567 0)"></path></g></g></g></svg>
                        <p>Площа кв.м</p>
                    </div>

                    <div className="search-item-body-s">
                        <span>Будь-яка</span>
                        <i className="ri-arrow-down-s-line"></i>
                    </div>

                </div>

                <div>
                    <div className="search-item-header-s">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g transform="translate(0)"><path d="M19.632,3.368A11.5,11.5,0,0,0,3.368,19.632,11.5,11.5,0,0,0,19.632,3.368ZM11.5,21.652A10.152,10.152,0,1,1,21.652,11.5,10.164,10.164,0,0,1,11.5,21.652Z" transform="translate(0)"></path></g><g transform="translate(7.939 4.331)"><path className="a" d="M181.017,102.9h-1.444a1.491,1.491,0,1,1,0-2.983h2.887a.674.674,0,1,0,0-1.348h-1.491V97.075a.674.674,0,1,0-1.348,0v1.491h-.048a2.839,2.839,0,1,0,0,5.678h1.444a1.491,1.491,0,0,1,0,2.983H178.13a.674.674,0,1,0,0,1.348h1.491v1.491a.674.674,0,1,0,1.348,0v-1.491h.048a2.839,2.839,0,0,0,0-5.678Z" transform="translate(-176.734 -96.401)"></path></g></svg>
                        <p>Ціна</p>
                        <div style={{ marginLeft: '50px' }}>
                            <i className={selectedCur ? "currency-icon-s" : "currency-icon-s active-cur"}
                                onClick={()=>setSelectedCur(false)}></i>
                            <span>грн</span>
                        </div>
                        <div>
                            <i className={selectedCur ? "currency-icon-s active-cur" : "currency-icon-s"}
                                onClick={() => setSelectedCur(true)}></i>
                            <span>$</span>
                        </div>
                    </div>

                    <div className="search-item-body-s" style={{ background: '#f1f1f0', border: 0, gap: 10 }}>
                        <input type="number" placeholder="від"
                            value={formData.priceRangeFrom}
                            onChange={e => setFormData(filter => ({ ...filter, priceRangeFrom: parseInt(e.target.value) }))}></input>
                        <input type="number" placeholder="до"
                            value={formData.priceRangeTo}
                            onChange={e => setFormData(filter => ({ ...filter, priceRangeTo: parseInt(e.target.value) }))}></input>
                    </div>

                </div>

                <div style={{ display: 'flex', alignItems: 'center', border: 0 }}>
                    <button className="search-b-s"><b>знайти</b></button>
                </div>

            </div>
        </form>
    )
}

const districtsArray = ['Голосіївський', 'Дарницький', 'Деснянський', 'Дніпровський', 'Оболонський',
    'Печерський', 'Подільський', 'Святошинський', 'Солом`янський', 'Шевченківський'];

export default Search;