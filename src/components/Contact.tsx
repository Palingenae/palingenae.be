export default function Contact(): JSX.Element {
    return (
        <section className="contact">
            <h4 className="contactTitle">Me contacter</h4>
            <p className="contactMean">Via Mail :</p>
            <p className="contactMail">hey (at) palingenae.be</p>
            <div className="contactLinks">
                <div className="contactNetworks">
                    <p className="contactMean">Via les réseaux :</p>
                    <div className="contactNetworksList">
                        <a className="link -ui" href="https://github.com/Palingenae">Github</a>
                        <a className="link -ui" rel="me" href="https://front-end.social/@Palingenae">Mastodon</a>
                        <a className="link -ui" href="https://bsky.app/profile/palingenae.bsky.social">BlueSky</a>
                        <a className="link -ui" href="https://bento.me/palingenae">Bento</a>
                    </div>
                </div>
                <div className="contactIssue">
                    <p className="contactMean">Signaler un problème :</p>
                    <p className="paragraph">Vous pouvez <a href="https://github.com/Palingenae/palingenae.be/issues/new" target="_blank" rel="noopener">ouvrir une <em>issue</em></a> via Github.<br/> Vous pouvez aussi le faire à travers un email.</p>
                </div>
            </div>
        </section>
    )
}