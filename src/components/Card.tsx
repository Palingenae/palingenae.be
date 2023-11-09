interface CardProps {
    variant: "grid" | "column" | "row",
    title: string,
    type?: string,
    typeClass?: string,
    description?: string,
    repoName?: string,
    repoStatus?: string,
    repoStatusClass?: "active" | "done" | "onHold" | "abandoned"
    repoLink?: string,
    websiteLink?: string
}

export default function Card({variant, title, type, typeClass, description, repoName, repoLink, repoStatus, repoStatusClass, websiteLink}: CardProps): JSX.Element {
    return (
        <div className={`card -${variant}`}>
            { type !== undefined ?
                <div className="card__header">
                    <span className={`card__meta__repoType -${ typeClass }`}>{ type }</span>
                </div>
                :
                ''
            }
            <div className="card__content">
                <p className="card__title">{title}</p>
                <div className="card__meta">
                    <span className="card__meta__repoName">{ repoName }</span>
                    <span className={`card__meta__repoStatus -${ repoStatusClass }`}> { repoStatus }</span>
                    <span></span>
                </div>
                <p className="paragraph">{ description }</p>
            </div>
            { (repoLink !== undefined) || (websiteLink !== undefined) ? 
                <div className="card__footer">
                    { repoLink !== undefined ? <a href={repoLink} rel="noopener" target="_blank">Dépôt Github</a>: ''}
                    { websiteLink !== undefined ? <a href={websiteLink} rel="noopener" target="_blank">Projet</a>: ''}
                </div>
                :
                ''
            }
        </div>
    )
}