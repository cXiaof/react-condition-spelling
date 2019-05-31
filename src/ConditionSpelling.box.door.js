import React, { Component } from 'react'

const ConditionSpellingBoxDoor = (props) => {
    const { className, tip, doors, onChange } = props
    if (tip) return <div className={className}>{tip}</div>
    return (
        <select className={className} onChange={onChange}>
            {Object.entries(doors).map(([key]) => (
                <option key={key} value={key}>
                    {key}
                </option>
            ))}
        </select>
    )
}

export default ConditionSpellingBoxDoor
