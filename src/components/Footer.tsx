import Tag from '@components/Tag';

export default function Footer(): JSX.Element { 
    return (
        <footer className="footer">
            <div className="footer__column__first">
                <span className="copyright">&copy; Palingenae { new Date().getFullYear() } - Tous droits réservés</span>
            </div>
            <div className="footer__column__last">
                <a href="/report-issue" className="link -navigation">Signaler un problème</a>
            </div>
        </footer>
    )
}