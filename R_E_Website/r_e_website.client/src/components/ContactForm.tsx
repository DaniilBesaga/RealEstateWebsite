import { useEffect, useState } from 'react';
import '../style/ContactForm.css'
import RealEstate from './RealEstate';
import { EstateDTO } from '../estateManagement/IEstateDTO';
import OrderService from './OrderService';

function ContactForm({ estateItem, setShowContactForm }) {

    const [item, setItem] = useState<EstateDTO>();
    useEffect(() => {
        if (estateItem) {
            setItem({
                id: estateItem.id,
                estateAddress: estateItem.estateAddress,
                estateFloor: estateItem.estateFloor,
                estateFloorCount: estateItem.numberOfFloors,
                estateRoomCount: estateItem.roomCount,
                estateSquare: estateItem.totalSquare,
                imgUrl: estateItem.imgsUrlFolder,
                priceUah: estateItem.priceUah,
                priceUsd: estateItem.priceUsd
            });
        }
    }, [estateItem]);

    const handleCloseClick = () => {
        setShowContactForm(false)
    }

    return (
        <div className="contact-form-container">
            <div className="contact-form">
                <div className="close-form">
                    <i className="ri-close-line" onClick={handleCloseClick}></i>
                </div>
                <h1>Вибрані об'єкти:</h1>
                <div className="form-object">
                    <RealEstate estateType={estateItem.estateType} filters={[estateItem]} display="grid" searchById='id' sort='any' />
                </div>
                <div className="o-r-container">
                    <OrderService estateId={estateItem.id} />
                </div>
            </div>
        </div>
    )
}

export default ContactForm;