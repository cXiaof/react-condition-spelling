import React, { Component } from 'react'

const ConditionSpellingBoxDoor = (props) => {
    const { className, title, doors, onChange } = props
    if (title) return <div className={className}>{title}</div>
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
