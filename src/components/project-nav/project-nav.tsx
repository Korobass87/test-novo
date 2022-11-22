import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectIcon } from "../select-icon/select-icon";
import {Navbar} from "../navbar"
import "./project-nav.scss";

export const ProjectNav = () => {
    return (<div>
        <div className={"type-selection"}>
            <Select sx={{ color: "#A1A1AA" }} defaultValue={"name-proj"} IconComponent={SelectIcon}>
                <MenuItem className={"selection-wrap"} selected={true} value={"name-proj"}>
                    <h3 className={"selection-name"}>Название проекта</h3>
                    <p className={"selection-subname"}>Аббревиатура</p>
                </MenuItem>
            </Select>
        </div>
        <Navbar/>
    </div>
    );
};
