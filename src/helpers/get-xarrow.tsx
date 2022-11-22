import { Row } from "../types/rows/rows";

function getXarrow(data: Row[]) {
    const coordinate = data.reduce((acc: any[], row) => {
        if (row.parentId === null) {
            return acc;
        }

        acc.push({ start: row.parentId, end: row.id });
        return acc;
    }, []);

    return coordinate;
}

export default getXarrow;
