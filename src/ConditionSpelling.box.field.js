import React from 'react'

const ConditionSpellingBoxField = ({ className, fields, onChange }) => (
    <select className={className} onChange={onChange}>
        {Object.keys(fields).map((key) => (
            <option key={key} value={key}>
                {key}
            </option>
        ))}
    </select>
)

export default ConditionSpellingBoxField
