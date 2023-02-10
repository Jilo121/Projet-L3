import '../css/style.css'

const Header = () => {
    return(
    <div className="header">
        <div className="nav-bar nav">
            <div className="left-logo">
                <img src={require('../img/logo.png')} alt="logo Taotranon'ny Nosy" className="logo"/>
                <h1>Taotranon'ny Nosy</h1>
            </div>
            <div className="top-menu menu">
                <input type="button" value="Chantier" className="btn header-btn"/>
                <input type="button" value="Nouveau chantier" className="btn header-btn"/>
                <input type="button" value="Liste ouvrier" className="btn header-btn"/>
                <input type="button" value="Se déconnecter" className="btn header-btn"/>
            </div>
            <div className="search-div">
                <input type="search" name="search" id="search" className="search input form-input"/>
                <input type="button" value="Search" className="search-btn"/>
            </div>
        </div>
    </div>
    )
}

export default Header;