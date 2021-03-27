import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.493013303138!2d2.0994430148284096!3d13.566663290467439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11da9fc4ed145813%3A0x63966247d04f1e41!2sCIPMEN!5e0!3m2!1sfr!2sne!4v1616842682999!5m2!1sfr!2sne" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+227 92666171'} text2={'+227 97086343'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'trakyrichardkanm3@gmail.com'} text2={'richard.timothee@codeloccol.org'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Route de la Francophonie, centre aéré" BCAO Station BM CIPMEN'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
