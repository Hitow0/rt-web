import React from 'react';
import '../styles/pages/homepage.scss'
import NavBar from "../components/global/NavBar";
import Actus from "../components/home/Actus";

const HomePage = () => {
    return (
        <div className={"home"}>
            <NavBar/>
            <div className={'title'}>
                <h1>DISCORD.GG/RANKEDTOWER</h1>
                <h3>LE SOMMET DE LA COMPÉTITION !</h3>
            </div>
            <div className={'sep'}></div>
            <Actus/>
            <div className={'sep2'}></div>
        </div>
    );
};

export default HomePage;