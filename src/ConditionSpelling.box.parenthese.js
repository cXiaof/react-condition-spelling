import React, { Component } from 'react'

class ConditionSpellingBoxParenthese extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        const { onChange, left, right } = this.props
        let match = []
        let matchLeft = e.target.value.match(/\(/g)
        let matchRight = e.target.value.match(/\)/g)
        if (left && matchLeft) match = [...match, ...matchLeft]
        if (right && matchRight) match = [...match, ...matchRight]
        if (match.length > 0) {
            const value = match.join('')
            this.setState({
                ...this.state,
                value
            })
            onChange({ target: { value } })
        }
    }

    render() {
        const { className } = this.props
        const { value } = this.state
        return (
            <input
                value={value}
                className={className}
                onChange={this.handleChange.bind(this)}
            />
        )
    }
}

export default ConditionSpellingBoxParenthese
