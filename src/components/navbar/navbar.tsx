import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import "./navbar.scss";

const works = [
    "По проекту",
    "Объекты",
    "РД",
    "МТО",
    "СМР",
    "График",
    "МиМ",
    "Рабочие",
    "Капвложения",
    "Бюджет",
    "Финансирование",
    "Панорамы",
    "Камеры",
    "Поручения",
    "Контрагенты",
];

export const Navbar = () => {
    return (
        <div className={"navbar"}>
            <ul className={"navbar-list"}>
                {works.map((work)=>{return (<li key={work} className={work!=="СМР" ? "navbar-item": "navbar-item navbar-item--active"}><DashboardIcon sx={{ color: "#FFF", fontSize: "24px" }}/><h3>{work}</h3></li>)})}
            </ul>
        </div>
    );
};
