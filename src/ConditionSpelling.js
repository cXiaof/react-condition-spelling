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
                tip: props.tip !== undefined ? props.tip : config.tip
            },
            fields: props.fields || {},
            value: []
        }
    }

    handleBoxChange(i, e) {}

    getConditionSpellingBoxes() {
        const { config, fields, value } = this.state
        return value.reduce(
            (target, item, i) => [
                ...target,
                <ConditionSpellingBox
                    key={`box${i}`}
                    fields={fields}
                    onChange={this.handleBoxChange.bind(this, i)}
                    {...config}
                />
            ],
            [
                <ConditionSpellingBox
                    key='firstBox'
                    first
                    fields={fields}
                    onChange={this.handleBoxChange.bind(this, 0)}
                    {...config}
                />
            ]
        )
    }

    render() {
        return (
            <div className='react-condition-spelling'>
                {this.getConditionSpellingBoxes()}
            </div>
        )
    }
}

export default ConditionSpelling
