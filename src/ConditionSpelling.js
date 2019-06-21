import React, { Component } from 'react'
import uuid from 'uuid'

import configDefault from './constants/configDefault'

import ConditionSpellingBox from './ConditionSpelling.box'

class ConditionSpelling extends Component {
    constructor(props) {
        super(props)
        this.alwaysTrue = ' 1 = 1'
        const max = Math.max(~~props.max, 0) || Infinity
        const showAll =
            props.showAll && props.max !== undefined && max !== Infinity
        const config = this.getConfig(props.config)
        const fields = this.getFiedls(props.fields, config.dataTypes)
        const value = this.getInitValue(max, showAll)
        const result = this.alwaysTrue
        this.state = { max, showAll, config, fields, value, result }
    }

    getInitValue(max, showAll) {
        if (!showAll) return [this.getOneItemWithUid()]
        let arr = []
        for (let i = 0; i < max; i++) {
            arr.push(this.getOneItemWithUid())
        }
        return arr
    }

    getFiedls(fields, dataTypes = {}) {
        if (!Array.isArray(fields) || fields.length === 0) return {}
        return fields.reduce((result, field) => {
            const { fieldName, dataType, name } = field
            result[fieldName] = Object.entries(dataTypes).reduce(
                (target, [key, types]) => {
                    if (types.includes(dataType)) target.type = key
                    return target
                },
                { name, type: '*' }
            )
            return result
        }, {})
    }

    getConfig(config = {}) {
        return {
            symbols: config.symbols || configDefault.symbols,
            dataTypes: config.dataTypes || configDefault.dataTypes,
            doors: config.doors || configDefault.doors,
            title:
                config.title !== undefined ? config.title : configDefault.title,
            error:
                config.error !== undefined ? config.error : configDefault.error,
            placeholderLeft:
                config.placeholderLeft !== undefined
                    ? config.placeholderLeft
                    : configDefault.placeholderLeft,
            placeholderRight:
                config.placeholderRight !== undefined
                    ? config.placeholderRight
                    : configDefault.placeholderRight,
            placeholderInput:
                config.placeholderInput !== undefined
                    ? config.placeholderInput
                    : configDefault.placeholderInput
        }
    }

    componentDidUpdate(preProps, preState) {
        const { onChange } = this.props
        const { result, value } = this.state
        if (onChange && result !== preState.result)
            onChange(result || this.alwaysTrue, value)
    }

    getOneItemWithUid() {
        return { id: uuid.v1().toString() }
    }

    getResult(value) {
        return value.reduce(
            (target, { condition }) => `${target}${condition || ''}`,
            ''
        )
    }

    handleBoxChange(i, condition, data) {
        let value = [...this.state.value]
        value[i] = {
            ...value[i],
            condition,
            data,
            illegal: condition === undefined
        }
        const result = this.getResult(value)
        this.setState({
            ...this.state,
            value,
            result
        })
    }

    handleInsert(index) {
        let { value, max } = this.state
        if (value.length === max) return
        value.splice(index + 1, 0, this.getOneItemWithUid())
        this.setState({
            ...this.state,
            value
        })
    }

    handleDelete(index) {
        let { max, showAll } = this.state
        let value = [...this.state.value]
        value.splice(index, 1)
        if (value.length === 0) value = [this.getOneItemWithUid()]
        if (showAll)
            for (let index = 0; index < max - value.length; index++) {
                value.push(this.getOneItemWithUid())
            }
        const result = this.getResult(value)
        this.setState({
            ...this.state,
            value,
            result
        })
    }

    getRcsBoxes() {
        const { showAll, max, config, fields, value } = this.state
        return value.map(({ id }, index) => (
            <ConditionSpellingBox
                key={id}
                id={id}
                first={index === 0}
                noInsert={showAll || max === value.length}
                fields={fields}
                onChange={this.handleBoxChange.bind(this, index)}
                onAdd={this.handleInsert.bind(this, index)}
                onDelete={this.handleDelete.bind(this, index)}
                {...config}
            />
        ))
    }

    getRcsBody() {
        const { fields, config } = this.state
        if (Object.keys(fields).length === 0) return config.error
        return this.getRcsBoxes()
    }

    render() {
        return (
            <div className='react-condition-spelling'>{this.getRcsBody()}</div>
        )
    }
}

export default ConditionSpelling
