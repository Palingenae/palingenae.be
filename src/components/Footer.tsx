import Tag from '@components/Tag';

export default function Footer(): JSX.Element { 
    return (
        <footer className="footer">
            <div className="footer__column__first">
                <span className="copyright">&copy; Palingenae { new Date().getFullYear() } - Tous droits réservés</span>
            </div>
            <div className="footer__column__last">
                <a href="/explain-your-problem" className="link">Signaler un problème</a>
                <Tag variant="filledEmeraldLight" label="v0.4"/>
            </div>
        </footer>
    )
}