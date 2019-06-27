import React, { Component } from 'react'

import ConditionSpellingBoxDoor from './ConditionSpelling.box.door'
import ConditionSpellingBoxParenthese from './ConditionSpelling.box.parenthese'
import ConditionSpellingBoxField from './ConditionSpelling.box.field'
import ConditionSpellingBoxSymbol from './ConditionSpelling.box.symbol'

class ConditionSpellingBox extends Component {
    constructor(props) {
        super(props)
        const { fields, doors } = props
        const [door] = Object.keys(doors)
        const [field, { symbols }] = Object.entries(fields)[0]
        const [symbol] = Object.keys(symbols)
        this.state = {
            door,
            left: '',
            field,
            symbols,
            symbol,
            value: '',
            right: '',
            init: true
        }
    }

    componentDidUpdate() {
        let { symbols, symbol, init } = this.state
        const { onChange } = this.props
        if (init || !symbols[symbol]) return
        const condition = this.getCondition()
        if (this.lastCondition !== condition) {
            this.lastCondition = condition
            const spelling = this.getSpelling()
            onChange(condition, spelling, { ...this.state })
        }
    }

    getCondition() {
        const { fields, doors, first } = this.props
        let { door, field, left, right, symbols, symbol, value } = this.state
        const { type, fieldName } = fields[field]
        const noNeedValue = symbols[symbol].noNeedValue
        const preprocess = symbols[symbol].preprocess
        symbol = symbols[symbol].symbol
        value = preprocess ? preprocess(value) : value
        value = type === 'text' ? ` '${value}'` : ` ${value}`
        if (noNeedValue) value = ''
        let condition = ` ${left}${fieldName} ${symbol}${value}${right}`
        if (!first) condition = ` ${doors[door]}${condition}`
        return condition
    }

    getSpelling() {
        const { first } = this.props
        let { door, field, left, right, symbols, symbol, value } = this.state
        const noNeedValue = symbols[symbol].noNeedValue
        value = noNeedValue ? '' : ` ${value}`
        let spelling = `${left}${field} ${symbol}${value}${right}`
        if (!first) spelling = ` ${door} ${spelling}`
        return spelling
    }

    setStateWithEvent(key, e) {
        this.setState({
            ...this.state,
            [key]: e.target.value,
            init: false
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
                reg={new RegExp(/\(/g)}
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
        const { value } = this.state
        const field = e.target.value
        const { type, symbols } = fields[field]
        let nextState = { ...this.state, symbols, field, init: false }
        if (type === 'number') {
            const parse = parseFloat(value).toString()
            if (value !== parse) nextState.value = ''
        }
        this.setState(nextState)
    }

    getRcsBoxSymbol() {
        const { fields } = this.props
        const { field, symbols } = this.state
        return (
            <ConditionSpellingBoxSymbol
                className='rcs-box-symbol'
                type={fields[field].type}
                symbols={symbols}
                onChange={this.setStateWithEvent.bind(this, 'symbol')}
            />
        )
    }

    getRcsBoxValue() {
        const { fields, placeholderInput } = this.props
        const { field, symbols, symbol } = this.state
        return (
            <input
                className='rcs-box-value'
                disabled={symbols[symbol] && symbols[symbol].noNeedValue}
                type={fields[field].type}
                placeholder={placeholderInput}
                onChange={this.setStateWithEvent.bind(this, 'value')}
            />
        )
    }

    getRcsBoxParentheseRight() {
        const { placeholderRight } = this.props
        return (
            <ConditionSpellingBoxParenthese
                reg={new RegExp(/\)/g)}
                placeholder={placeholderRight}
                className='rcs-box-parenthese rcs-box-right'
                onChange={this.setStateWithEvent.bind(this, 'right')}
            />
        )
    }

    getRcsBoxButtons() {
        const { onAdd, onDelete, noInsert } = this.props
        return (
            <span className='rcs-box-buttons'>
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
            </span>
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
