import React, { useEffect, useState } from "react";
import { getRows } from "../../helpers/get-rows";
import getXarrow from "../../helpers/get-xarrow";
import { fetchRow, changeRow, deleteRowApi, addRowApi } from "../../api/api";
import { Row, Rows } from "../../types/rows/rows";
import { TableHeader } from "../tables/table-header";
import initialRow from "../constans/initial-row";
import TableRow from "./table-row";
import "./table.scss";
import { newRow } from "../constans/new-row";
import rowForCreate from "../constans/row-for-create";

export const Table = () => {
    const [rows, setRows] = useState<Row[] | []>([]);
    const [dataFetch, setDataFetch] = useState<Rows[] | []>([]);
    const [coordinate, setCoordinate] = useState<{ start: number; end: number }[] | null>(null);

    useEffect(() => {
        fetchRow.then((data) => {
            if (data.data.length > 0) {
                setDataFetch(data.data);
            } else {
                addRowApi(rowForCreate).then((data) => {
                    addRow({ ...newRow, id: data.data.current.id });
                });
            }
            return data.data;
        });
    }, []);

    useEffect(() => {
        if (rows.length > 0) {
            setCoordinate(getXarrow(rows));
        }
    }, [rows]);

    useEffect(() => {
        if (dataFetch.length > 0) {
            setRows(getRows(dataFetch));
        }
    }, [dataFetch]);

    function setEditable(id: number) {
        const newRows = rows.map((row) => ({ ...row, editable: row.id === id ? true : false }));
        setRows(newRows);
    }

    function updateRow(row: Row) {
        const rowForUpdate = {
            ...initialRow,
            ...row,
        };
        changeRow(rowForUpdate).then((data) => {
            const idx = rows.findIndex((elm) => elm.id === data.data.current.id);

            const changedRow = [...rows];
            changedRow[idx] = { ...changedRow[idx], ...data.data.current, editable: false };

            setRows(changedRow);
        });
    }

    function addRow(row: Row) {
        const added: Row[] = [...rows];
        added.push(row);
        setRows(added);
    }

    function deleteRow(id: number) {
        deleteRowApi(id);
        let idFofDel: number | null = 0;
        const array = rows
            .filter((row) => row.id !== id)
            .filter((row) => {
                if (row.parentId !== id) {
                    idFofDel = row.id;
                }

                return row.parentId !== id;
            })
            .filter((row) => row.parentId !== idFofDel);

        setRows(array);
    }

    return (
        <div className={"table"}>
            <TableHeader />
            <TableRow
                addRow={addRow}
                updateRow={updateRow}
                deleteRow={deleteRow}
                setEditable={setEditable}
                rows={rows}
                coordinate={coordinate}
            />
        </div>
    );
};
