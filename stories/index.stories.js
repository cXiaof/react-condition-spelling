import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import ConditionSpelling from '../src/index'

const mockFields = {
    name: { name: 'name', type: 'text' },
    from: { name: 'come from', type: 'text' },
    age: { name: 'age', type: 'number' }
}
const mockConfig = {
    symbols: {
        text: {
            '=': { symbol: '=' },
            like: { symbol: 'LIKE', preprocess: (value) => `%${value}%` },
            'is null': { symbol: 'IS NULL', noNeedValue: true }
        },
        number: { '=': { symbol: '=' }, '≠': { symbol: '<>' } }
    }
}
const mockConfigChZn = {
    symbols: {
        text: {
            等于: { symbol: '=' },
            不等于: { symbol: '<>' },
            包含: {
                symbol: 'LIKE',
                preprocess: (value) => `%${value}%`
            },
            开始于: {
                symbol: 'LIKE',
                preprocess: (value) => `${value}%`
            },
            结束于: {
                symbol: 'LIKE',
                preprocess: (value) => `%${value}`
            },
            为null: { symbol: 'IS NULL', noNeedValue: true }
        },
        number: { '=': { symbol: '=' }, '≠': { symbol: '<>' } }
    }
}

storiesOf('function', module)
    .add('Normal: has fields', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    fields={mockFields}
                    onChange={(condition, inputs) => {
                        console.log(condition)
                        console.log(inputs)
                    }}
                />
                <br />
                <strong>{'mock fields :'}</strong>
                <div>{getJSONstr(mockFields)}</div>
            </Fragment>
        )
    })
    .add('Error: no fields', () => {
        return (
            <Fragment>
                <ConditionSpelling />
                <br />
                <strong>{'no props'}</strong>
            </Fragment>
        )
    })
    .add('Custom length', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    max={3}
                    fields={mockFields}
                    onChange={(condition, inputs) => {
                        console.log(condition)
                        console.log(inputs)
                    }}
                />
                <br />
                <strong>{`max = { 3 }`}</strong>
            </Fragment>
        )
    })
    .add('Custom config', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    fields={mockFields}
                    config={mockConfig}
                    onChange={(condition, inputs) => {
                        console.log(condition)
                        console.log(inputs)
                    }}
                />
                <br />
                <strong>{'mock fields :'}</strong>
                <div>{getJSONstr(mockFields)}</div>
                <br />
                <strong>{'mock config :'}</strong>
                <div>{getJSONstr(mockConfig)}</div>
            </Fragment>
        )
    })
    .add('Locale language', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    fields={mockFields}
                    config={mockConfigChZn}
                    onChange={(condition, inputs) => {
                        console.log(condition)
                        console.log(inputs)
                    }}
                />
                <br />
                <strong>{'mock fields :'}</strong>
                <div>{getJSONstr(mockFields)}</div>
                <br />
                <strong>{'mock config :'}</strong>
                <div>{getJSONstr(mockConfigChZn)}</div>
            </Fragment>
        )
    })

const getJSONstr = (obj) => (
    <Fragment>
        {Object.entries(obj).map(([key, value]) => (
            <div key={`${key}`}>
                {key}: {JSON.stringify(value, null, 4)}
            </div>
        ))}
    </Fragment>
)
