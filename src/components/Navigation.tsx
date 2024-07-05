import Icon from "./Icon";

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__bar">
                <div className="navigation__logo">
                    <a href="/">
                        <p className="siteName">Retourner à l'accueil</p>
                    </a>
                </div>
                {/* Seeing this here? Yeah, it will be available later :)
                <div className="navigation__horizontal">
                    <button type="button" data-theme-toggle aria-label="Changer le thème du site"><Icon iconName="half-moon" /></button>
                    <span><Icon iconName="translate" /> FR</span>
                </div> */}
            </div>
        </nav>
    )
}