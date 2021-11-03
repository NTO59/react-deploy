import React from 'react';
import Navigation from '../components/Navigation';
import Cv from '../media/CV.pdf';


const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Nicolas Touzard</h1>
                    <h2>Développeur Web et Web Mobile</h2>
                    <div className="pdf">
                        <a href= {Cv} target="_blank" rel="noopener noreferrer">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
