import React, { FC, useEffect, useState} from "react";
import { Row } from "../../types/rows/rows";
import { getLogo } from "../../helpers/get-logo";
import { OnHoverMenu } from "../onhover-menu";
import { Xar } from "../xarrow";

type Props = {
    rows: [] | Row[];
    coordinate: { start: number; end: number }[] | null;
    setEditable: (id: number) => void;
    updateRow: (row: Row) => void;
    addRow: (row: Row) => void;
    deleteRow: (id: number) => void;
};

const cells: ["rowName", "salary", "equipmentCosts", "overheads", "estimatedProfit"] = [
    "rowName",
    "salary",
    "equipmentCosts",
    "overheads",
    "estimatedProfit",
];


const TableRow: FC<Props> = ({ rows, addRow, coordinate, deleteRow, setEditable, updateRow }) => {
    const [editRow, setEditRow] = useState<null | Row>(null);

    useEffect(() => {
        const rowForChange = rows.find((row) => row.editable === true);

        if (rowForChange) {
            setEditRow(rowForChange);
        }
    }, [rows]);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const key = e.target.name;
        const value = e.target.value;
        if (editRow) {
            const changedRow = { ...editRow, [key]: value };
            setEditRow(changedRow);
        }
    }

    return (
        <>
            {rows.length > 0 &&
                rows.map((row: Row) => {

                        return (
                            <div key={row.id} onDoubleClick={() => setEditable(row.id)} className={"table-header table-row"}>
                                <div
                                    className={"icon-menu"}
                                    style={{
                                        paddingLeft: `calc((15px * (${row.level} - 1)) + ${
                                            row.type === "level" ? "0px" : "15px"
                                        }`,
                                    }}
                                >
                                    <div>
                                        <img
                                            width={row.type === "level" ? "20px" : "16px"}
                                            src={getLogo(row.level, row.type)}
                                            id={`${row.id}`}
                                            alt="logo"
                                        />
                                        <OnHoverMenu deleteRow={deleteRow} addRow={addRow} row={row} />
                                    </div>
                                </div>

                                {row.editable === false
                                    ? cells.map((cell) => {
                                          return (
                                              <div key={cell}>
                                                  <h2 className={"table-title"}>{row[cell]}</h2>
                                              </div>
                                          );
                                      })
                                    : cells.map((cell) => {
                                          console.log();
                                          return (
                                              <div key={cell}>
                                                  <input
                                                      name={cell}
                                                      className={"input"}
                                                      type={cell === "rowName" ? "text" : "number"}
                                                      onKeyPress={(e) => {
                                                          if (e.key === "Enter" && editRow) {
                                                              updateRow(editRow);
                                                          }
                                                      }}
                                                      onChange={onChange}
                                                      value={editRow ? editRow[cell] : 0}
                                                  />
                                              </div>
                                          );
                                      })}
                            </div>
                        );

                })}

            {coordinate && <Xar coordinate={coordinate} />}
        </>
    );
};

export default TableRow;
