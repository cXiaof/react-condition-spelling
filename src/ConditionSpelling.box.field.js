import React from 'react'

const ConditionSpellingBoxField = ({ className, fields, onChange }) => (
    <select className={className} onChange={onChange}>
        {Object.entries(fields).map(([key, { name }]) => (
            <option key={key} value={key}>
                {name}
            </option>
        ))}
    </select>
)

export default ConditionSpellingBoxField
