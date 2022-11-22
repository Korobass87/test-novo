import React from 'react';
import "./works.scss"
import {Table} from "../tables";

export const Works = () => {
    return (
        <div className={'container'}>
                <div className={"works-name"}>
                    <h2 className={"work-header"}>Строительно-монтажные работы</h2>
                </div>
            <Table />
        </div>
    );
};

