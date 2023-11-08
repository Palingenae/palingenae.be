interface CardProps {
    variant: "grid" | "column" | "row",
    title: string,
    type?: string,
    description?: string,
    links?: array<string>
}

export default function Card({variant, title, type, description, type, links}: CardProps): JSX.Element {
    return (
        <div className={`card -${variant}`}>
            { type !== undefined ?
                <div className="card__header">
                    <span className="card__type"></span>
                </div>
                :
                ''
            }
            <div className="card__content">
                <p className="card__title">{title}</p>
                <div className="card__meta">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className="card__description">{ description }</p>
            </div>
            { links !== undefined ? 
                <div className="card__footer">
                    {links.map((link: string) => (
                        <a href={link.url}>{ link.label }</a>
                    ))}
                </div>
                :
                ''
            }
        </div>
    )
}