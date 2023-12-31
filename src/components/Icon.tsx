interface iconProps {
    iconName: string
}

export default function Icon({ iconName }: iconProps) {
    return (
        <i className={`icon iconoir-${iconName}`}></i>
    )
}
