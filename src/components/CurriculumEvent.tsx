interface CurriculumEventProps {
    startDate: string,
    endDate: string,
    eventName: string,
    eventPlace: string
    description?: string
}

export default function CurriculumEvent({ startDate, endDate, eventName, eventPlace, description }: CurriculumEventProps): JSX.Element {
    return (
        <div className="curriculumEvent">
            <div className="curriculumEvent__meta">
                <span className="curriculumEvent__dates">{ startDate } - { endDate }</span>
            </div>
            <div className="curriculumEvent__content">
                <p className="curriculumEvent__name">{ eventName }</p>
                <p className="curriculumEvent__place">{ eventPlace }</p>
                <p className="curriculumEvent__description">{ description }</p>
            </div>
        </div>
    )
}