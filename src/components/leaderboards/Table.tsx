import React, { useState, useEffect, useCallback } from "react";
import tableData1 from "../../tempClassement.json";
import '../../styles/pages/leaderboard.scss'
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export interface Column {
    label: string;
    accessor: string;
    sortable: boolean;
}

export interface TableData {
    pseudo: string;
    elos: number;
    played: number;
    win: number;
    lost: number;
    mvp: number;
}

const columns = [
    { label: "#", accessor: "ranking", sortable: true },
    { label: "Pseudo", accessor: "pseudo", sortable: false },
    { label: "Elo", accessor: "elos", sortable: true },
    { label: "Games", accessor: "played", sortable: true },
    { label: "Win", accessor: "win", sortable: true },
    { label: "Lose", accessor: "lost", sortable: true },
    { label: "MVP", accessor: "mvp", sortable: true },
];

const Table = () => {
    const [tableData, setTableData] = useState<TableData[]>(tableData1);

    const handleSorting = useCallback(<K extends keyof TableData>(sortField: K, sortOrder: "asc" | "desc") => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });

            const rankedData = sorted.map((item, index) => ({...item}));
            setTableData(rankedData);
        }
    }, [tableData]);

    const handleBasicSorting = useCallback(<K extends keyof TableData>(sortField: K, sortOrder: "asc" | "desc") => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });

            const rankedData = sorted.map((item, index) => ({ ...item, ranking: index +1 }));
            setTableData(rankedData);
        }
    }, []);

    useEffect(() => {
        handleBasicSorting("elos", "desc");
    }, [handleBasicSorting]);

    return (
        <div>
            <div className="table">
                <TableHead {...{ columns, handleSorting }} />
                <TableBody {...{ columns, tableData }} />
            </div>
        </div>
    );
};

export default Table;
