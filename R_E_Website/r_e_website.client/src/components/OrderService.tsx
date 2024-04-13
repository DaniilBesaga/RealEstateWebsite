import { useState } from 'react';
import '../style/OrderService.css'

interface IOrderService {
    name: string,
    phone: string
}

function OrderService() {

    async function postOrderService() {

        const requestData: IOrderService = {
            name: formData.name,
            phone: formData.phone
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        }
        const response = await fetch('/api/serviceorder', requestOptions);
        const data = response.json();
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        postOrderService();
    }

    return (
        <div className="order-service-container">
            <h2>Замовити послугу</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ваше ім'я *"></input>
                <input type="text" placeholder="Телефон +38(__) ___ __ __ *"></input>
                <button type="submit">Відправити</button>
            </form>
        </div>
    )
}

export default OrderService;