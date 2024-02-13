import React from "react";
import {Column, TableData} from "./Table";

interface TableBodyProps {
    tableData: TableData[];
    columns: Column[];
}

const TableBody: React.FC<TableBodyProps> = ({ tableData, columns }) => {
    return (
        <tbody>
        {tableData.map((data) => {
            return (
                <tr key={data.pseudo}>
                    {columns.map(({ accessor }) => {
                        const tData = data[accessor as keyof TableData] !== undefined
                            ? data[accessor as keyof TableData]
                            : "——";
                        return <td key={accessor}>{tData}</td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;
