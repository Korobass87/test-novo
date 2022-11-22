import React, { FC } from "react";
import rowForCreate from "../constans/row-for-create";
import { addRowApi } from "../../api/api";
import { Row } from "../../types/rows/rows";
import {newRow} from '../constans/new-row'
const logo1: string = require("../../img/subtract.svg").default;
const logo2: string = require("../../img/subtract2.svg").default;
const logodoc: string = require("../../img/doc.svg").default;
const trash: string = require("../../img/delete.svg").default;

type Props = {
    row: Row;
    addRow: (row: Row) => void;
    deleteRow: (id: number) => void;
};

export const OnHoverMenu: FC<Props> = ({ row, addRow, deleteRow }) => {
    function createRow(parent: null | number, type: "row" | "level") {
        addRowApi({ ...rowForCreate, parentId: parent }).then((data) => {
            addRow({
                ...newRow,
                rowName: "",
                level: parent === null ? 1 : 2,
                type,
                id: data.data.current.id,
                editable: true,
                parentId:parent
            });
        });
    }

    switch (row.type) {
        case "row":
            return (
                <div className={"wrap"}>
                    <img
                        onClick={(e) => {
                            createRow(row.parentId, "row");
                        }}

                        src={logodoc}
                        alt="logo"
                    />{" "}
                    <img  onClick={() => deleteRow(row.id)} src={trash} alt="logo" />
                </div>
            );
    }

    switch (row.level) {
        case 1:
            return (
                <div className={"wrap"}>
                    <img

                        onClick={(e) => {
                            createRow(null, "level");
                        }}
                        src={logo1}
                        alt="logo"
                    />
                    <img

                        onClick={(e) => {
                            createRow(row.id, "level");
                        }}
                        src={logo2}
                        alt="logo"
                    />
                    <img

                        onClick={(e) => {
                            createRow(row.id, "row");
                        }}
                        src={logodoc}
                        alt="logo"
                    />{" "}
                    <img  onClick={() => deleteRow(row.id)} src={trash} alt="logo" />
                </div>
            );
        case 2: {
            return (
                <div className={"wrap"}>
                    {" "}
                    <img
                        id={`${row.id}`}
                        onClick={(e) => {
                            createRow(row.id, "level");
                        }}
                        src={logo2}
                        alt="logo"
                    />
                    <img
                        id={`${row.id}`}
                        onClick={(e) => {
                            createRow(row.id, "row");
                        }}
                        src={logodoc}
                        alt="logo"
                    />
                    <img id={`${row.id}`} onClick={() => deleteRow(row.id)} src={trash} alt="logo" />
                </div>
            );
        }
    }

    return <></>;
};
