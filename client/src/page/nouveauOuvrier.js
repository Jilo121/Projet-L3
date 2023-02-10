const NouveauOuvrier = () => {
    return (
        <div className="container-e">
            <div className="formulaire">
                <h2>Ouvrier</h2>
                <div className="in-form dform">
                    <label htmlFor="name" className="label">Nom</label>
                    <input type="text" name="name" id="name" className="form-input lieu"/>
                    <label htmlFor="lastname" className="label">Prenom</label>
                    <input type="text" name="lastname" id="lastname" className="form-input proprio"/>
                    <label htmlFor="contact" className="label">Contact</label>
                    <input type="text" name="contact" id="contact" className="form-input contact"/>
                    <label htmlFor="email" className="label">E-mail</label>
                    <input type="email" name="email" id="email" className="form-input email"/>
                    <label htmlFor="adresse" className="label">Adresse</label>
                    <input type="text" name="adresse" id="adresse" className="form-input adresse"/>
                    <label htmlFor="poste" className="label">Poste</label>
                    <select className="form-input poste">
                        <option value="ouvrier">Ouvrier</option>
                        <option value="ingenieur">Ingenieur</option>
                        <option value="plombier">Plombier</option>
                        <option value="manoeuvre">Manoeuvre</option>
                        <option value="electricien">Electricien</option>
                    </select>
                    <label htmlFor="poste" className="label">Niveau d'étude</label>
                    <select className="form-input diplome">
                        <option value="doctorat">Doctorat</option>
                        <option value="ingenieur">Ingenieur</option>
                        <option value="master2">Master 2</option>
                        <option value="master1">Master 1</option>
                        <option value="license3">License 3</option>
                        <option value="license2">License 2</option>
                        <option value="license1">License 1</option>
                        <option value="BACC">Baccaleaureat</option>
                        <option value="BEPC">BEPC</option>
                        <option value="CEPE">CEPE</option>
                    </select>
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

export default NouveauOuvrier;