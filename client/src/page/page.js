import React from "react";
import "../css/menu.css"

import "../css/listeOuv.css"
import "../css/listeChan.css"

import Done from "./done";
import EnCours from "./enCours";
import ListeChan from "./listeChan";
import ListeOuv from "./listeOuv";
import NouveauChantier from "./nouveauChantier";
import NouveauOuvrier from "./nouveauOuvrier";
import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Page = () => {
    // let Component
    // switch (window.location.pathname) {
    //     case "/listChan":
    //         Component = <ListeChan/>
    //         break
    //     case "/enCours":
    //         Component = <EnCours/>
    //         break
    //     case "/done":
    //         Component = <Done/>
    //         break
    //     case "/nouveauChantier":
    //         Component = <NouveauChantier/>
    //         break
    //     case "/listeOuvrier":
    //         Component = <ListeOuv/>
    //         break
    //     case "/nouveauOuvrier":
    //         Component = <NouveauOuvrier/>
    //         break
    //     default:
    //         break;
    // }

    return (
    <div className="container">
        <div className="body">
            <div className="left-menu menu">
                <div className="element-menu">
                    <h3>Chantier</h3>
                    <ul className="menu-list">
                        <CustomLink to="/listeChan">Liste chantier</CustomLink>
                        <CustomLink to="/enCours">En cours</CustomLink>
                        <CustomLink to="/done">Terminer</CustomLink>
                        <CustomLink to="/nouveauChantier">Nouveau chantier</CustomLink>
                    </ul>
                </div>
                <div className="element-menu">
                    <h3>Ouvrier</h3>
                    <ul className="menu-list">
                    <CustomLink to="/listeOuvrier">Liste Ouvrier</CustomLink>
                    <CustomLink to="/nouveauOuvrier">Nouveau ouvrier</CustomLink>
                    </ul>
                </div>
            </div>
            <div className="right-part" id="element">
                {/* {Component} */}
                <Routes>
                    <Route path="/listeChan" element = {<ListeChan/>}/>
                    <Route path="/enCours" element = {<EnCours/>}/>
                    <Route path="/done" element = {<Done/>}/>
                    <Route path="/nouveauChantier" element = {<NouveauChantier/>}/>
                    <Route path="/listeOuvrier" element = {<ListeOuv/>}/>
                    <Route path="/nouveauOuvrier" element = {<NouveauOuvrier/>}/>
                </Routes>
            </div>
        </div>
    </div>
    )
}

export default Page;

function CustomLink ({to,children, ...props }){
    // const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li >
            <Link to={to} {...props} className={isActive ? "btn link left-btn active" : "btn left-btn"} >{children}</Link>
        </li>
    )
}