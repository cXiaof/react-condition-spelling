import React, { Component } from 'react'

import ConditionSpellingBoxField from './ConditionSpelling.box.field'
import ConditionSpellingBoxLocaleText from './ConditionSpelling.box.localeText'

class ConditionSpellingBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'text'
        }
    }

    handleFieldChange(e) {
        const { fields } = this.props
        const { type } = fields[e.target.value]
        this.setState({
            ...this.state,
            type
        })
    }

    setStateWithEvent(key, e) {
        this.setState({
            ...this.state,
            [key]: e.target.value
        })
    }

    getRcsBoxDoor() {
        const { doors } = this.props
        return (
            <ConditionSpellingBoxLocaleText
                className='rcs-box-door'
                obj={doors}
                onChange={this.setStateWithEvent.bind(this, 'door')}
            />
        )
    }

    getRcsBoxParentheseLeft() {
        return (
            <input
                className='rcs-box-parenthese rcs-box-left'
                onChange={this.setStateWithEvent.bind(this, 'left')}
            />
        )
    }

    getRcsBoxField() {
        const { fields } = this.props
        return (
            <ConditionSpellingBoxField
                className='rcs-box-field'
                fields={fields}
                onChange={this.handleFieldChange.bind(this)}
            />
        )
    }

    getRcsBoxSymbol() {
        const { symbols } = this.props
        return (
            <ConditionSpellingBoxLocaleText
                className='rcs-box-symbol'
                obj={symbols}
                onChange={this.setStateWithEvent.bind(this, 'symbol')}
            />
        )
    }

    getRcsBoxValue() {
        const { type } = this.state
        return (
            <input
                className='rcs-box-value'
                type={type}
                onChange={this.setStateWithEvent.bind(this, 'value')}
            />
        )
    }

    getRcsBoxParentheseRight() {
        return (
            <input
                className='rcs-box-parenthese rcs-box-right'
                onChange={this.setStateWithEvent.bind(this, 'right')}
            />
        )
    }

    render() {
        return (
            <div className='rcs-box'>
                {this.getRcsBoxDoor()}
                {this.getRcsBoxParentheseLeft()}
                {this.getRcsBoxField()}
                {this.getRcsBoxSymbol()}
                {this.getRcsBoxValue()}
                {this.getRcsBoxParentheseRight()}
            </div>
        )
    }
}

export default ConditionSpellingBox
