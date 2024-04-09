import { useLayoutEffect, useState } from 'react';
import '../style/Reviews.css';
import 'remixicon/fonts/remixicon.css';

interface Review {
    id: number,
    body: string,
    author: string,
    created_At: Date 
}

function Reviews() {

    const [reviews, setReviews] = useState<Review[]>([]);
    
    useLayoutEffect(() => { displayReviews() }, []);
    
    const [firstReviewNumber, setFirstReviewNumber] = useState(0);

    const [lastReviewNumber, setLastReviewNumber] = useState(4);

    const handleSlideButton = (num: number) => {
        setFirstReviewNumber(num);
        setLastReviewNumber(num + 4);
    }

    async function displayReviews() {
        setTimeout(async () => {
            const response = await fetch('/api/review');
            const data = await response.json();
            setReviews(data);
        }, 1000);
    }

    return (
        <div className="reviews-section">
            <div style={{ display:'flex' }}>
                <span className="reviews-logo-back">
                    Відгуки
                </span>
                <div className="reviews-logo">
                    <p>Відгуки<br /> наших<br /> клієнтів</p>
                </div>
                <div className="reviews-slides">
                    {
                        reviews.map((item, index) => {
                            if (index >= firstReviewNumber && index < lastReviewNumber) {
                                return (
                                    <div className="review">
                                        <p className="comment">{item.body}</p>
                                        <div>
                                            <p className="comment-author">{item.author}</p>
                                            <p className="comment-date">{item.created_At.toString().replace("T", " ")}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="reviews-button-slides">
                <ul>
                    <li><button type="button" className={firstReviewNumber == 0 ? "active-button" : ""}
                        onClick={() => handleSlideButton(0)}></button></li>
                    <li><button type="button" className={firstReviewNumber == 4 ? "active-button" : ""}
                        onClick={() => handleSlideButton(4)}></button></li>
                    <li><button type="button" className={firstReviewNumber == 8 ? "active-button" : ""}
                        onClick={() => handleSlideButton(8)}></button></li>
                </ul>
            </div>
        </div>
    )
}

export default Reviews;