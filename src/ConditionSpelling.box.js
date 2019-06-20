import React, { Component } from 'react'

import ConditionSpellingBoxField from './ConditionSpelling.box.field'
import ConditionSpellingBoxDoor from './ConditionSpelling.box.door'
import ConditionSpellingBoxSymbol from './ConditionSpelling.box.symbol'
import ConditionSpellingBoxParenthese from './ConditionSpelling.box.parenthese'

class ConditionSpellingBox extends Component {
    constructor(props) {
        super(props)
        const { fields, symbols, doors } = props
        const [field, { type }] = Object.entries(fields)[0]
        const [symbol, { noNeedValue }] = Object.entries(symbols[type])[0]
        let initState = { field, type, symbol, noNeedValue }
        initState.door = Object.keys(doors)[0]
        this.state = initState
    }

    componentDidUpdate() {
        const { onChange, doors, first } = this.props
        let { field, door, left, right } = this.state
        const symbolValue = this.getConditionSymbolValue()
        let condition
        if (symbolValue) {
            let { symbol, value } = symbolValue
            value = value || ''
            left = left || ''
            right = right || ''
            condition = ` ${left}${field} ${symbol}${value}${right}`
            if (!first && door) condition = ` ${doors[door]}${condition}`
        }
        if (this.lastCondition !== condition) {
            this.lastCondition = condition
            onChange(condition, { ...this.state })
        }
    }

    getConditionSymbolValue() {
        const { symbol, value, type } = this.state
        const { symbols } = this.props
        const target = symbols[type][symbol]
        if (!target) return
        const { preprocess, noNeedValue } = target
        if (noNeedValue) return { symbol: target.symbol }
        let result = preprocess ? preprocess(value) : value
        if (value === undefined) return
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
        const { first, doors, title } = this.props
        return (
            <ConditionSpellingBoxDoor
                className='rcs-box-door'
                title={first ? title : null}
                doors={doors}
                onChange={this.setStateWithEvent.bind(this, 'door')}
            />
        )
    }

    getRcsBoxParentheseLeft() {
        const { placeholderLeft } = this.props
        return (
            <ConditionSpellingBoxParenthese
                left
                placeholder={placeholderLeft}
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
        let { value } = this.state
        const field = e.target.value
        const nextType = fields[field].type || 'text'
        let nextState = {
            ...this.state,
            field,
            type: nextType
        }
        if (nextType === 'number') {
            const parse = parseFloat(value).toString()
            if (value !== parse) nextState.value = undefined
        }
        this.setState(nextState)
    }

    getRcsBoxSymbol() {
        const { symbols } = this.props
        const { type } = this.state
        return (
            <ConditionSpellingBoxSymbol
                className='rcs-box-symbol'
                type={type}
                symbols={symbols}
                onChange={this.handleChangeSymbol.bind(this)}
            />
        )
    }

    handleChangeSymbol(e) {
        const { symbols } = this.props
        const { type } = this.state
        const symbol = e.target.value
        const { noNeedValue } = symbols[type][symbol]
        this.setState({
            ...this.state,
            symbol,
            noNeedValue
        })
    }

    getRcsBoxValue() {
        const { type, noNeedValue } = this.state
        const { placeholderInput } = this.props
        return (
            <input
                className='rcs-box-value'
                disabled={noNeedValue}
                type={type}
                placeholder={placeholderInput}
                onChange={this.setStateWithEvent.bind(this, 'value')}
            />
        )
    }

    getRcsBoxParentheseRight() {
        const { placeholderRight } = this.props
        return (
            <ConditionSpellingBoxParenthese
                right
                placeholder={placeholderRight}
                className='rcs-box-parenthese rcs-box-right'
                onChange={this.setStateWithEvent.bind(this, 'right')}
            />
        )
    }

    getRcsBoxButtons() {
        const { onAdd, onDelete, noInsert } = this.props
        return (
            <div className='rcs-box-buttons'>
                <i
                    className='rcs_iconfont rcs-icon-delete'
                    onClick={onDelete}
                />
                {noInsert ? null : (
                    <i
                        className='rcs_iconfont rcs-icon-insert'
                        onClick={onAdd}
                    />
                )}
            </div>
        )
    }

    render() {
        const { id } = this.props
        return (
            <div id={id} className='rcs-box'>
                {this.getRcsBoxDoor()}
                {this.getRcsBoxParentheseLeft()}
                {this.getRcsBoxField()}
                {this.getRcsBoxSymbol()}
                {this.getRcsBoxValue()}
                {this.getRcsBoxParentheseRight()}
                {this.getRcsBoxButtons()}
            </div>
        )
    }
}

export default ConditionSpellingBox
