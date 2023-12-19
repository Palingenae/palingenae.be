interface TagProps {
    variant: string,
    label: string,
}

export default function Tag({ variant, label }: TagProps): JSX.Element {
    return (
        <span className={`tag -${ variant }`}>{ label }</span>
    )
}
