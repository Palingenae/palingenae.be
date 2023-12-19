import Icon from "./Icon"

interface ActionProps {
    variant?: string,
    label: string,
    icon: string
}

export default function Action({variant, label, icon}: ActionProps): JSX.Element {
    return (
        <span className={`action -${variant}`}>
            <span className="action__label">{ label }</span>
            <Icon iconName={icon}/>
        </span>
    )
}