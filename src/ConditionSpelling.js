import React, { Component } from 'react'

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
            value: []
        }
    }

    handleBoxChange(i, condition) {
        const { onChange } = this.props
        let value = [...this.state.value]
        value[i] = condition
        this.setState({
            ...this.state,
            value
        })
        onChange(value.join(''))
    }

    getConditionSpellingBoxes() {
        const { config, fields, value } = this.state
        const first = (
            <ConditionSpellingBox
                key='firstBox'
                first
                fields={fields}
                onChange={this.handleBoxChange.bind(this, 0)}
                {...config}
            />
        )
        return value.reduce(
            (target, item, i) => [
                ...target,
                <ConditionSpellingBox
                    key={`box${i}`}
                    fields={fields}
                    onChange={this.handleBoxChange.bind(this, i + 1)}
                    {...config}
                />
            ],
            [first]
        )
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
