import React, { Component } from 'react'
import uuid from 'uuid'

import configDefault from './constants/configDefault'

import ConditionSpellingBox from './ConditionSpelling.box'

class ConditionSpelling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            config: this.getConfig(props.config || {}),
            fields: props.fields || {},
            value: [this.getOneItemWithUid()],
            result: ' 1 = 1'
        }
    }

    getConfig(config) {
        return {
            symbols: config.symbols || configDefault.symbols,
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
        if (result !== preState.result) onChange(result, value)
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
        let value = [...this.state.value]
        value.splice(index + 1, 0, this.getOneItemWithUid())
        this.setState({
            ...this.state,
            value
        })
    }

    handleDelete(index) {
        let value = [...this.state.value]
        value.splice(index, 1)
        if (value.length === 0) value = [this.getOneItemWithUid()]
        const result = this.getResult(value)
        this.setState({
            ...this.state,
            value,
            result
        })
    }

    getRcsBoxes() {
        const { config, fields, value } = this.state
        return value.map(({ id }, index) => (
            <ConditionSpellingBox
                key={id}
                id={id}
                first={index === 0}
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
