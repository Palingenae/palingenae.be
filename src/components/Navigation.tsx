export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__bar">
                <div className="navigation__logo">
                    <a href="/">
                        <span className="siteName">Retourner à l'accueil</span>
                    </a>
                </div>
                <div className="navigation__horizontal">
                    <a className="link -ui" href="/about">À propos</a>
                        <button type="button" data-theme-toggle className="themeToggler"><i data-theme-icon className="icon iconoir-half-moon" aria-hidden> </i></button>

                    {/* Seeing this here? Yeah, it will be available later :)
                    <span><Icon iconName="translate" /> FR</span> */}
                </div>
            </div>
        </nav>
    )
}