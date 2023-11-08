import Tag from '@components/tag.astro';

export default function Footer() { 
    return (
        <footer className="footer">
            <div className="division">
                <span className="copyright">&copy; Palingenae { new Date().getFullYear() } &hyphen; Tous droits réservés</span>
            </div>
            <div className="division -column">
                <Tag variant="filledEmeraldLight" label="v0.4"/>
            </div>
        </footer>
    )
}