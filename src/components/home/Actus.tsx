import React from 'react';
import annonces from '../../annonces.json'

const Actus = () => {
    return (
        <div className={'actus'}>
            <div className={'container'}>
                {annonces.annonces.map((annonce, index) => (
                    <div key={index} className={'annonce'} style={{backgroundImage: `url(/rt-web${annonce.imageFond})`}}>
                        <h2>{annonce.titre}</h2>
                        <p className={'date'}>Date: {annonce.date}</p>
                        <p className={'desc'}>{annonce.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Actus;