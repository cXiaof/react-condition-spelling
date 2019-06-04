import React, { Component } from 'react'
import uuid from 'uuid'

import config from './constants/configDefault'

import ConditionSpellingBox from './ConditionSpelling.box'

class ConditionSpelling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {
                symbols: props.symbols || config.symbols,
                doors: props.doors || config.doors,
                tip: props.tip !== undefined ? props.tip : config.tip,
                error: props.error !== undefined ? props.error : config.error
            },
            fields: props.fields || {},
            value: [this.getOneItemWithUid()]
        }
    }

    getOneItemWithUid() {
        return { id: uuid.v1().toString() }
    }

    handleBoxChange(i, condition) {
        const { onChange } = this.props
        let value = [...this.state.value]
        value[i] = { ...value[i], condition }
        this.setState({
            ...this.state,
            value
        })
        const result = value.reduce(
            (target, item) => target + item.condition,
            ''
        )
        onChange(result)
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
        this.setState({
            ...this.state,
            value
        })
    }

    getConditionSpellingBoxes() {
        const { config, fields, value } = this.state
        return value.map(({ id }, index) => (
            <ConditionSpellingBox
                key={id}
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
        return this.getConditionSpellingBoxes()
    }

    render() {
        return (
            <div className='react-condition-spelling'>{this.getRcsBody()}</div>
        )
    }
}

export default ConditionSpelling
