import React from 'react';
import about from '../assets/moi.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Traky Richard</span></h4>
                <p className="about-text">
                   Hello to you my fullName is Kanmadozo Richard Timothée, I am Nigerian of Beninese origin. I am hopeful and optimistic by nature, I love to take advantage of the present time and I always tell myself that to have a successful life starts with making every day a success. My life is a message and I would like this message to be filled with hope, strength and courage to my Nigerien brothers and sisters.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Kanmadozo RIchard Timothée</p>
                        <p>: 21</p>
                        <p>: Nigérien</p>
                        <p>: French, English, Zarma, Fond, Haoussa</p>
                        <p>: Route de La Francophonie Station BM /Ny</p>
                        <p>: Bénin, Niger</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
