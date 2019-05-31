import React, { Component } from 'react'

const ConditionSpellingBoxSymbol = ({ className, symbols, onChange }) => (
    <select className={className} onChange={onChange}>
        {Object.entries(symbols).map(([key, value]) => (
            <option key={key} value={key}>
                {key}
            </option>
        ))}
    </select>
)

export default ConditionSpellingBoxSymbol
