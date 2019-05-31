import React, { Component } from 'react'

import ConditionSpellingBoxField from './ConditionSpelling.box.field'
import ConditionSpellingBoxDoor from './ConditionSpelling.box.door'
import ConditionSpellingBoxSymbol from './ConditionSpelling.box.symbol'
import { Object } from 'es6-shim'

class ConditionSpellingBox extends Component {
    constructor(props) {
        super(props)
        let initState = { type: 'text' }
        const { fields, symbols, doors, first } = props
        const keysFields = Object.keys(fields)
        const keysSymbols = Object.keys(symbols)
        const keysDoors = Object.keys(doors)
        if (keysFields.length > 0) initState.field = keysFields[0]
        if (keysSymbols.length > 0) initState.symbol = keysSymbols[0]
        if (!first && keysDoors.length > 0) initState.door = keysDoors[0]
        this.state = initState
    }

    componentDidUpdate() {
        const { field } = this.state
        const symbolValue = this.getConditionSymbolValue()
        if (symbolValue) {
            const { symbol, value } = symbolValue
            console.log(`${field} ${symbol}${value || ''}`)
        }
    }

    getConditionSymbolValue() {
        const { symbol, value, type } = this.state
        const { symbols } = this.props
        const { preprocess } = symbols[symbol]
        if (value === undefined) return
        let result = preprocess ? preprocess(value) : value
        if (result === null) return { symbol: symbols[symbol].symbol }
        result = type === 'text' ? ` '${result}'` : ` ${result}`
        return { value: result, symbol: symbols[symbol].symbol }
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
        return (
            <ConditionSpellingBoxSymbol
                className='rcs-box-symbol'
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
