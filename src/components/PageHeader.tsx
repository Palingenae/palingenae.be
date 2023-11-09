interface PageHeaderProps {
    pageName: string,
    pageDescription?: string
}

export default function PageHeader({ pageName, pageDescription }: PageHeaderProps): JSX.Element {
    return (
        <header className="header">
            <h1>{pageName}</h1>
            <p className="paragraph -jumbo">{pageDescription}</p>
        </header>
    )
}
