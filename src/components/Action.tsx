interface ActionProps {
    variant: string,
    label: string,
    icon: string
}

export default function Action({variant, label, icon}: ActionProps): JSX.Element {
    return (
        <span className={`action -${variant}`}>
            <span className="action__label">{ label }</span>
            <span aria-hidden="true" className={`action__icon icon -${icon}`}></span>
        </span>
    )
}