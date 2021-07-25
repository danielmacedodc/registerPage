import React from 'react';
import './destinations.css';
import moon from './moon-img.jpg';
import mars from './mars-bg1.jpeg';
import enceladus from './enceladus.jpg';

const Destinations = () => {
    return (
        <>
            <section className="grid">
                <h3>
                    We are currently operating in all Solar System!
                </h3>

                <div className="grid-items">
                    <div className="insideDiv">
                        <img src={moon} alt="moon" />
                        <h4>Fly to the Moon!</h4>
                        <button>Try it!</button>
                    </div>

                    <div className="insideDiv">
                        <img src={mars} alt="mars"/>
                        <h4>Colonize Mars</h4>
                        <button>Try it!</button>
                    </div>

                    <div className="insideDiv">
                        <img src={enceladus} alt={enceladus}/>
                        <h4>Experience Enceladus</h4>
                        <button>Try it!</button>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Destinations;
