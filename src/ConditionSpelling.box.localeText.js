import React, { Component } from 'react'

const ConditionSpellingBoxLocaleText = ({ className, obj = {}, onChange }) => (
    <select className={className} onChange={onChange}>
        {Object.entries(obj).map(([key, value]) => (
            <option key={key} value={key}>
                {value}
            </option>
        ))}
    </select>
)

export default ConditionSpellingBoxLocaleText
