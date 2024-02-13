import React from 'react';
import Table from "../components/leaderboards/Table";
import NavBar from "../components/global/NavBar";
import '../styles/pages/leaderboard.scss'
import Footer from "../components/global/Footer";

const LeaderBoard = () => {
    return (
        <div className={"leaderboard"}>
            <NavBar currentPage={"leaderboard"}/>
            <div className="table_container">
                <h1>Leaderboard</h1>
                <Table/>
            </div>
            <Footer/>
        </div>
    );
};

export default LeaderBoard;