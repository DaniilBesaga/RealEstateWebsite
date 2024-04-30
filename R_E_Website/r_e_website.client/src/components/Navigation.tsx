import { ReactNode } from "react";
import '../../src/style/Navigation.css';
import { Link } from "react-router-dom";


type NavigationProps = {
    url: string,
    urlTitle: string,
    objectCount?: number,
    header?: string,
    addParams?: () => ReactNode
}


function Navigaton({ url, urlTitle, objectCount, header, addParams }: NavigationProps) {

    const splittedUrlsTitle = urlTitle.split('/')
    const splittedUrls = url.split(',')
    
    return (
        <div className="page-nav">
            <div>
                <i className="ri-arrow-left-s-line"></i>
                {splittedUrlsTitle.map((value, key) =>
                    <div key={key}>
                        <Link to={key != splittedUrlsTitle.length - 1 ? splittedUrls[key] : ''}
                            style={{
                                color: key > 0 ? 'gray' : 'black',
                                pointerEvents: key != splittedUrlsTitle.length - 1 ? 'initial' : 'none'
                            }}>{value}</Link>
                        {
                            key != splittedUrlsTitle.length - 1 ? <span>/</span> : null
                        }
                    </div>
                )}
                <span className="objectCount">{objectCount != undefined ? objectCount + " Об'єктів" : ''} </span>
            </div>

            <h2>{header}</h2>
            {addParams != undefined ? addParams() : null}
        </div>
    )
}

export default Navigaton;