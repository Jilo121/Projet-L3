const NouveauChantier = () => {
    return (
        <div className="container-e">
            <div className="formulaire">
                <h2>Chantier</h2>
                <div className="in-form dform">
                    <label htmlFor="lieu" className="label">Lieu</label>
                    <input type="text" name="lieu" id="lieu" className="form-input lieu"/>
                    <label htmlFor="proprio" className="label">Nom du propriétaire</label>
                    <input type="text" name="proprio" id="proprio" className="form-input proprio"/>
                    <label htmlFor="contact" className="label">Contact</label>
                    <input type="text" name="contact" id="contact" className="form-input contact"/>
                    <label htmlFor="email" className="label">E-mail</label>
                    <input type="email" name="email" id="email" className="form-input email"/>
                    <label htmlFor="adresse" className="label">Adresse</label>
                    <input type="text" name="adresse" id="adresse" className="form-input adresse"/>
                    <label htmlFor="photo" className="label">Photo</label>
                    <input type="file" name="file" id="file" className="file"/>
                    <p></p>
                    <input type="button" value="Suivant" className="btn-rec suivant"/>
                </div>
                <div className="list-tache dform">
                    <label htmlFor="tache" className="label">Ajouter une tache</label>
                    <input type="text" name="tache" id="tache" className="form-input tache"/>
                    <p></p>
                    <input type="button" value="Enregistrer" className="btn-rec record"/>
                    <p></p>
                    <input type="button" value="Annuler" className="btn-rec cancel"/>
                </div>
            </div>
        </div>
    )
}

export default NouveauChantier;