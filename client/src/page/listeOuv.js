import React from "react";
import ouvrier from "./todo/ouvrier/listeOuvrier";
const ListeOuv = () => {
    const listeOuvrierAff = ouvrier.map(ouv => <div key ={ouv.id} className="box-ouv">
            <p>{ouv.nom}</p>
            <p>{ouv.prenom}</p>
            <p>{ouv.adresse}</p>
            <p>{ouv.contact}</p>
            <p>{ouv.email}</p>
            <p>{ouv.poste}</p>
            <p>{ouv.niveau}</p>
        </div>)
    return (
        <div>
            <h1>Liste ouvrier</h1>
                <div className="liste-box">
                        {
                            listeOuvrierAff
                        }                
                </div>
        </div>
    )
}

export default ListeOuv;