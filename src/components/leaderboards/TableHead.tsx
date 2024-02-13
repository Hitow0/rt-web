import React, { useState } from 'react';

// Importe les interfaces
import { Column } from './Table';

interface TableHeadProps {
    columns: Column[];
    handleSorting: Function;
}

const TableHead: React.FC<TableHeadProps> = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState<string | null>(null);
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor: string) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    return (
        <thead>
        <tr>
            {columns.map(({ label, accessor, sortable }) => {
                const isSorted = accessor === sortField;
                const arrow =
                    isSorted && order === "asc" ?
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M8.24499 13.1858L11.111 9.39582C11.2877 9.14748 11.5737 9 11.8785 9C12.1833 9 12.4693 9.14748 12.646 9.39582L15.779 13.1858C16.0355 13.5064 16.0955 13.942 15.9351 14.32C15.7747 14.698 15.4198 14.9575 15.011 14.9958H9.01099C8.60251 14.9569 8.24826 14.6971 8.08834 14.3192C7.92841 13.9413 7.98856 13.5062 8.24499 13.1858Z"
                                      stroke="#fff" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                            </g>
                        </svg>
                        : isSorted && order === "desc" ?
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M8.24499 13.1858L11.111 9.39582C11.2877 9.14748 11.5737 9 11.8785 9C12.1833 9 12.4693 9.14748 12.646 9.39582L15.779 13.1858C16.0355 13.5064 16.0955 13.942 15.9351 14.32C15.7747 14.698 15.4198 14.9575 15.011 14.9958H9.01099C8.60251 14.9569 8.24826 14.6971 8.08834 14.3192C7.92841 13.9413 7.98856 13.5062 8.24499 13.1858Z"
                                          stroke="#fff" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            :
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M8.24499 9.18582L11.111 5.39582C11.2877 5.14748 11.5737 5 11.8785 5C12.1833 5 12.4693 5.14748 12.646 5.39582L15.779 9.18582C16.0355 9.50645 16.0955 9.94198 15.9351 10.32C15.7747 10.698 15.4198 10.9575 15.011 10.9958H9.01099C8.60251 10.9569 8.24826 10.6971 8.08834 10.3192C7.92841 9.94132 7.98856 9.50617 8.24499 9.18582Z"
                                          stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M15.779 14.8058L12.911 18.5958C12.7343 18.8446 12.4481 18.9923 12.143 18.9923C11.8379 18.9923 11.5517 18.8446 11.375 18.5958L8.24499 14.8058C7.98856 14.4855 7.92841 14.0503 8.08834 13.6724C8.24826 13.2945 8.60251 13.0348 9.01099 12.9958H15.011C15.4198 13.0341 15.7747 13.2936 15.9351 13.6716C16.0955 14.0497 16.0355 14.4852 15.779 14.8058Z"
                                          stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </g>
                            </svg>;

                return (
                    <th
                        key={accessor}
                        onClick={sortable ? () => handleSortingChange(accessor) : undefined}
                        style={{cursor: sortable ? "pointer" : "default"}}
                    >
                        {label} {sortable && arrow}
                    </th>
                );
            })}
        </tr>
        </thead>
    );
};

export default TableHead;
