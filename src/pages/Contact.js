import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div class="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li >
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Fourmies</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="06.71.69.70.55">
                                <span className="clickInput" onClick={() => {
                                    alert("Téléphone copié")
                                }}>06.71.69.70.55</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="Nicolas.touzard59@gmail.com">
                                <span className="clickInput" onClick={() => {
                                    alert("E-mail copié")
                                }}>Nicolas.touzard59@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div class="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/nicolas-touzard-8549131a4/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkdIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/NTO59" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/Nico_Touzy" target="_blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/nicolas.touzard1/" target="_blank" rel="noopener noreferrer">
                            <h4>Facebook</h4>
                            <i className="fab fa-facebook"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;