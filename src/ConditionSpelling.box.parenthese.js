import React, { Component } from 'react'

class ConditionSpellingBoxParenthese extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        const { reg } = this.props
        if (e.target.value === '') this.updateValueFireChange('')
        const match = e.target.value.match(reg)
        if (match && match.length > 0)
            this.updateValueFireChange(match.join(''))
    }

    updateValueFireChange(value) {
        const { onChange } = this.props
        onChange({ target: { value } })
        this.setState({
            ...this.state,
            value
        })
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
