import Icon from "./Icon"

interface MessageProps {
    context: string,
    title: string,
    text: string,
    icon?: string
}

export default function Message({ context, title, text, icon}: MessageProps): JSX.Element {
    return (
        <div className={`message -${context}`}>
            {undefined !== icon ? 
                <div className="message__icon">
                    <Icon iconName={ icon } />
                </div>
                :
                ''
            }
            <div className="message__content">
                <p className="message__title">{ title }</p>
                <p className="message__text">{ text }</p>
            </div>
        </div>
    )
}