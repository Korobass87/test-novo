import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ReplyIcon from "@mui/icons-material/Reply";
import Avatar from "@mui/material/Avatar";
import {SelectIcon} from '../select-icon/select-icon';

import "./header.scss";


export const Header = () => {
    return (
        <div className={"header"}>
            <div className={"header-wrap"}>
                <ul className={"header-button"}>
                    <AppsIcon sx={{ color: "#A1A1AA", fontSize: "24px" }} />
                    <ReplyIcon sx={{ color: "#A1A1AA", fontSize: "24px" }} />
                </ul>
                <ul className={"menu"}>
                    <li>
                        <a className={"menu-link active-link"} href="#">
                            Просмотр
                        </a>
                    </li>
                    <li>
                        <a className={"menu-link "} href="#">
                            Управление
                        </a>
                    </li>
                </ul>
            </div>
            <div className="user">
                <Avatar sx={{ width: 28, height: 28 }} alt="Антон Петров" src={require("../../img/avatar.jpg")} />
                <h2 className={"user-name"}>Антон Петров</h2>
               <SelectIcon/>

            </div>
        </div>
    );
};
