import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import ConditionSpelling from '../src/index'

storiesOf('ConditionSpelling', module)
    .add('default', () => {
        return (
            <Fragment>
                <ConditionSpelling />
                <br />
                <div>{'no props'}</div>
            </Fragment>
        )
    })
    .add('has fields', () => {
        const fields = {
            name: { name: 'name' },
            from: { name: 'come from' },
            age: { name: 'age', type: 'number' }
        }
        return (
            <Fragment>
                <ConditionSpelling fields={fields} />
                <br />
                <div>{'props <fields> :'}</div>
                <div>{JSON.stringify(fields, null, 4)}</div>
            </Fragment>
        )
    })
