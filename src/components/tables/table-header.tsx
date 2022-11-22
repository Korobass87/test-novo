import React from 'react';

export const TableHeader = () => {
    return (
        <>
            <div className={"table-header"}>
                <div>
                    <h2 className={"table-title"}>Уровень</h2>
                </div>
                <div>
                    <h2 className={"table-title"}>Наименование работ</h2>
                </div>
                <div>
                    <h2 className={"table-title"}>Основная з/п</h2>
                </div>
                <div>
                    <h2 className={"table-title"}>Оборудование</h2>
                </div>
                <div>
                    <h2 className={"table-title"}>Накладные расходы</h2>
                </div>
                <div>
                    <h2 className={"table-title"}>Сметная прибыль</h2>
                </div>
            </div>
        </>
    );
};


