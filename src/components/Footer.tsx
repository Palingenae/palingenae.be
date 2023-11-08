import Tag from '@components/Tag';

export default function Footer(): JSX.Element { 
    return (
        <footer className="footer">
            <div className="division">
                <span className="copyright">&copy; Palingenae { new Date().getFullYear() } - Tous droits réservés</span>
            </div>
            <div className="division -column">
                <Tag variant="filledEmeraldLight" label="v0.4"/>
            </div>
        </footer>
    )
}