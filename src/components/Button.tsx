interface ButtonProps {
    label: string,
    variant: string,
    icon?: string
}

export default function Button({ label, variant, icon }: ButtonProps) {
    return (
        <button className={`button -${ variant }`}>{ label }</button>
    )
}