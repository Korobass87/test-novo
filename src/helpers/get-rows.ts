import { Rows } from "../types/rows/rows";

export function getRows(data: Rows[]) {

    return data.reduce((acc: any[], row: Rows) => {
        const rowForTable = {
            level: 1,
            editable:false,
            id: row.id,
            rowName: row.rowName,
            salary: row.salary,
            equipmentCosts: row.equipmentCosts,
            overheads: row.overheads,
            estimatedProfit: row.estimatedProfit,
            type: "level",
            parentId:null
        };
        acc.push(rowForTable);

        if (row.child.length > 0) {
            row.child.map((arr) => {
                const rowForTable = {
                    editable:false,
                    level:  arr.child.length>0?2:1,
                    id: arr.id,
                    rowName: arr.rowName,
                    salary: arr.salary,
                    equipmentCosts: arr.equipmentCosts,
                    overheads: arr.overheads,
                    estimatedProfit: arr.estimatedProfit,
                    type: arr.child.length>0?"level":"row",
                    parentId: row.id
                };
                acc.push(rowForTable);

                if (arr.child.length > 0) {
                    arr.child.map((arr2) => {
                        const rowForTable = {
                            editable:false,
                            level:  arr2.child.length>0?3:2,
                            id: arr2.id,
                            rowName: arr2.rowName,
                            salary: arr2.salary,
                            equipmentCosts: arr2.equipmentCosts,
                            overheads: arr2.overheads,
                            estimatedProfit: arr2.estimatedProfit,
                            type: arr2.child.length>0?"level":"row",
                            parentId: arr.id
                        };
                        acc.push(rowForTable);

                    });
                }
            });
        }

        return acc;
    }, []);
}
