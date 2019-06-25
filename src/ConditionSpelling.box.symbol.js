import React, { Component } from 'react'

class ConditionSpellingBoxSymbol extends Component {
    componentDidUpdate(prevProps) {
        const { type, symbols, onChange } = this.props
        if (type !== prevProps.type) {
            const value = Object.keys(symbols)[0]
            onChange({ target: { value } })
        }
    }

    render() {
        const { className, symbols, onChange } = this.props
        return (
            <select className={className} onChange={onChange}>
                {Object.keys(symbols).map((key) => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </select>
        )
    }
}

export default ConditionSpellingBoxSymbol
