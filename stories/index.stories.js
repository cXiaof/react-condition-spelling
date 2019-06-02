import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import ConditionSpelling from '../src/index'

storiesOf('ConditionSpelling', module)
    .add('default', () => {
        return (
            <Fragment>
                <ConditionSpelling />
                <br />
                <h4>{'no props'}</h4>
            </Fragment>
        )
    })
    .add('has fields', () => {
        const fields = {
            name: { name: 'name', type: 'text' },
            from: { name: 'come from', type: 'text' },
            age: { name: 'age', type: 'number' }
        }
        return (
            <Fragment>
                <ConditionSpelling
                    fields={fields}
                    onChange={(condition) => console.log(condition)}
                />
                <br />
                <h4>{'props <fields> :'}</h4>
                <div>{getJSONstr(fields)}</div>
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
