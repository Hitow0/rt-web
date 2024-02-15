import React from "react";
import {Column, TableData} from "./Table";
import '../../styles/pages/leaderboard.scss'
import PlayerHead from "../global/PlayerHead";

interface TableBodyProps {
    tableData: TableData[];
    columns: Column[];
}

const TableBody: React.FC<TableBodyProps> = ({ tableData, columns }) => {
    return (
        <div className={"tbody"}>
        {tableData.map((data) => {
            return (
                <div className={"tr"} key={data.pseudo}>
                    {columns.map(({ accessor }) => {
                        let tData : React.JSX.Element | string = "";
                        if(accessor === "pseudo"){
                            tData = data[accessor as keyof TableData] !== undefined
                                ? <div className={"pseudo"}><PlayerHead pseudo={data["pseudo"]}/> {data[accessor as keyof TableData]} </div>
                                : "——";
                        } else {
                            tData = data[accessor as keyof TableData] !== undefined
                                ? <div> {data[accessor as keyof TableData]} </div>
                                : "——";
                        }

                        return <div className={"td"} key={accessor}>{tData}</div>;
                    })}
                </div>
            );
        })}
        </div>
    );
};

export default TableBody;
