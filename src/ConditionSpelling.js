import React, { Component } from 'react'
import uuid from 'uuid'

import configDefault from './constants/configDefault'

import ConditionSpellingBox from './ConditionSpelling.box'

class ConditionSpelling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            config: this.getConfig(props),
            fields: props.fields || {},
            value: [this.getOneItemWithUid()],
            result: ' 1 = 1'
        }
    }

    getConfig(props) {
        return {
            symbols: props.symbols || configDefault.symbols,
            doors: props.doors || configDefault.doors,
            title:
                props.title !== undefined ? props.title : configDefault.title,
            error:
                props.error !== undefined ? props.error : configDefault.error,
            placeholderLeft:
                props.placeholderLeft !== undefined
                    ? props.placeholderLeft
                    : configDefault.placeholderLeft,
            placeholderRight:
                props.placeholderRight !== undefined
                    ? props.placeholderRight
                    : configDefault.placeholderRight,
            placeholderInput:
                props.placeholderInput !== undefined
                    ? props.placeholderInput
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
