import React, { Component } from 'react'

import localeText from './constants/localeText'

import ConditionSpellingBox from './ConditionSpelling.box'

class ConditionSpelling extends Component {
    constructor(props) {
        super(props)
        const propLocaleText = props.localeText || {}
        const propFields = props.fields || []
        this.state = {
            localeText: {
                symbols: { ...localeText.symbols, ...propLocaleText.symbols },
                doors: { ...localeText.doors, ...propLocaleText.doors }
            },
            fields: propFields
        }
    }

    getConditionSpellingBoxes() {
        const { localeText, fields } = this.state
        return <ConditionSpellingBox fields={fields} {...localeText} />
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
