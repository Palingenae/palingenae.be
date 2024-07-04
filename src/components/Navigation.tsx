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
                {/* <div className="navigation__vertical__toggler">
                    <button type="button" className="navigation__vertical__toggler__label" aria-label="Accéder au menu vertical">Menu</button>
                </div> */}
            </div>
            {/* <div className="navigation__vertical">
                <div className="navigation__vertical__menu">
                    <p className="navigation__vertical__menu__title">Navigation</p>
                    {
                        // navLinks !== undefined ?
                        // navLinks.Routes.map((link: any) => (
                        //     <a className={currentPath === link.URL ? "link -navigation -vertical -active" : "link -navigation -vertical"} href={ link.URL }>{ link.Name }</a>
                        // ))
                        // :
                        // <a className={currentPath === '/about' ? "link -navigation -vertical -active" : "link -navigation -vertical"} href="/about">A propos</a>
                    }
                </div>
            </div> */}
        </nav>
    )
}