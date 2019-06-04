import React, { Component } from 'react'

class ConditionSpellingBoxParenthese extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        const { left, right } = this.props
        if (e.target.value === '') this.updateValueFireChange('')
        let match = []
        let matchLeft = e.target.value.match(/\(/g)
        let matchRight = e.target.value.match(/\)/g)
        if (left && matchLeft) match = [...match, ...matchLeft]
        if (right && matchRight) match = [...match, ...matchRight]
        if (match.length > 0) this.updateValueFireChange(match.join(''))
    }

    updateValueFireChange(value) {
        const { onChange } = this.props
        this.setState({
            ...this.state,
            value
        })
        onChange({ target: { value } })
    }

    render() {
        const { className, placeholder } = this.props
        const { value } = this.state
        return (
            <input
                value={value}
                className={className}
                placeholder={placeholder}
                onChange={this.handleChange.bind(this)}
            />
        )
    }
}

export default ConditionSpellingBoxParenthese
