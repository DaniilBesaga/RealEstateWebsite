import { useState } from 'react';
import '../style/OrderService.css'
import { IEstate } from '../estateManagement/IEstate';

interface IOrderService {
    name: string,
    phoneNumber: string,
    email: string,
    estateId?: number
}

function OrderService({estateId}) {

    async function postOrderService() {

        const requestData: IOrderService = {
            name: formData.name,
            phoneNumber: formData.phone,
            email: formData.email,
            estateId: estateId
        }
        console.log(requestData)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        }
        const response = await fetch('/api/orderservice', requestOptions);
        const data = response.json();
        
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        postOrderService();
    }

    return (
        <div className="order-service-container">
            <h2>Замовити послугу</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ваше ім'я *"
                    value={formData.name}
                    onChange={e => setFormData(data => ({ ...data, name: e.target.value }))}></input>
                <input type="text" placeholder="Телефон +38(__) ___ __ __ *"
                    value={formData.phone}
                    onChange={e => setFormData(data => ({ ...data, phone: e.target.value }))}></input>
                <input type="email" placeholder="Електронна пошта"
                    value={formData.email}
                    onChange={e => setFormData(data => ({ ...data, email: e.target.value }))}></input>
                <button type="submit">Відправити</button>
            </form>
        </div>
    )
}

export default OrderService;