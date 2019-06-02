import React, { Component } from 'react'

import ConditionSpellingBoxField from './ConditionSpelling.box.field'
import ConditionSpellingBoxDoor from './ConditionSpelling.box.door'
import ConditionSpellingBoxSymbol from './ConditionSpelling.box.symbol'
import { Object } from 'es6-shim'

class ConditionSpellingBox extends Component {
    constructor(props) {
        super(props)
        const { fields, symbols, doors, first } = props
        const [field, { type }] = Object.entries(fields)[0]
        const symbol = Object.keys(symbols[type])[0]
        let initState = { field, type, symbol }
        if (!first) initState.door = Object.keys(doors)[0]
        this.state = initState
    }

    componentDidUpdate() {
        const { onChange, doors } = this.props
        const { field, door } = this.state
        const symbolValue = this.getConditionSymbolValue()
        if (symbolValue) {
            const { symbol, value } = symbolValue
            let condition = ` ${field} ${symbol}${value || ''}`
            if (door) condition = ` ${doors[door]}${condition}`
            if (condition !== this.lastCondition) {
                this.lastCondition = condition
                onChange(condition)
            }
        }
    }

    getConditionSymbolValue() {
        const { symbol, value, type } = this.state
        const { symbols } = this.props
        if (value === undefined) return
        const target = symbols[type][symbol]
        if (!target) return
        const { preprocess } = target
        let result = preprocess ? preprocess(value) : value
        if (result === null) return { symbol: target.symbol }
        result = type === 'text' ? ` '${result}'` : ` ${result}`
        return { value: result, symbol: target.symbol }
    }

    setStateWithEvent(key, e) {
        this.setState({
            ...this.state,
            [key]: e.target.value
        })
    }

    getRcsBoxDoor() {
        const { first, doors, tip } = this.props
        return (
            <ConditionSpellingBoxDoor
                className='rcs-box-door'
                tip={first ? tip : null}
                doors={doors}
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
                onChange={this.handleChangeField.bind(this)}
            />
        )
    }

    handleChangeField(e) {
        const { fields } = this.props
        const field = e.target.value
        this.setState({
            ...this.state,
            field,
            type: fields[field].type || 'text'
        })
    }

    getRcsBoxSymbol() {
        const { symbols } = this.props
        const { type } = this.state
        return (
            <ConditionSpellingBoxSymbol
                className='rcs-box-symbol'
                type={type}
                symbols={symbols}
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
