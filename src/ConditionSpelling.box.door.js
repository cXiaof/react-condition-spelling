import React from 'react'

const ConditionSpellingBoxDoor = (props) => {
    const { className, title, doors, onChange } = props
    if (title) return <span className={className}>{title}</span>
    return (
        <select className={className} onChange={onChange}>
            {Object.keys(doors).map((key) => (
                <option key={key} value={key}>
                    {key}
                </option>
            ))}
        </select>
    )
}

export default ConditionSpellingBoxDoor
