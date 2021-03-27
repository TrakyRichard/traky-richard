import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Typed from 'react-typed';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <Typed strings={["Traky Richard"]} typeSpeed={40}></Typed>
                </h1>
                <p className="h-sub-text">
                           <Typed strings={["I'm from Niger, I'm FullStack Web and Mobile developer. I have 2 years of experience. I am Open-minded and I love to face new challenges.. ."]} typeSpeed={70} />
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/trakyrichard/" target="_blank" className="icon-holder">
                                <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </a>
                    <a href="https://github.com/TrakyRichard" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://twitter.com/TrakyRichard" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon yt"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
