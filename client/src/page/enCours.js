
import chantDone from "./todo/chantier/doneList";

const EnCours = () => {
    const listeChantDone = chantDone.map(cD => <div key={cD.id} className="liste-chan">
        <p>{cD.lieu}</p>
        <p>{cD.proprio}</p>
        {/* <p>{cD.adresse}</p> */}
        {/* <p>{cD.contact}</p> */}
        {/* <p>{cD.email}</p> */}
    </div>)
    return (
        <div>
            <h3 className="titre3">Liste chantier en cours</h3>
            <div className="liste-box">
                {
                    listeChantDone
                }
            </div>
        </div>
    )
}

export default EnCours;