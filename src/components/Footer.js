import './footer.css';
import React, { useState } from 'react';

const Footer = () => {
    const apiUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    const [data, setData] = useState(null);

    const fetchData = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetch data:', error)
            })
    }
    return (
        <footer className='footer'>
            <nav>
                <ul>
                    <li>
                        <button onClick={fetchData}>Fetch Data</button>
                    </li>
                </ul>
            </nav>
            {data && (
                <div className='container'>
                    <div className='container-date'>
                        <p>Date : </p>
                        {Object.keys(data.bpi).map((date, index) => (
                        <div key={index}>{date}</div>
                        ))}
                    </div>
                    <div className='container-price'>
                        <p>Prix : </p>
                        {Object.values(data.bpi).map((price, index) => (
                        <div key={index}>{price}</div>
                        ))}
                    </div>

                </div>
            )}
            {data && ( 
                <>
                    <p>{data.disclaimer}</p>
                    <p>Last updated: {data.time.updated}</p>
                    <p>Updated ISO: {data.time.updatedISO}</p>
                </>
            )}
        </footer>
    );
};

export default Footer;
