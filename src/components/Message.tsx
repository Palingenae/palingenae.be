interface MessageProps {
    context: string,
    type: string,
    content: string
}

export default function Message({ content, type, context }: MessageProps): JSX.Element {
    return (
        <div className={`message -${ context }`}>
            <p className="messageType">{ type }</p>
            <p className="messageContent">{ content }</p>
        </div>
    )
}