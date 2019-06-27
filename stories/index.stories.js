import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import ConditionSpelling from '../src/index'

import { TipTitle, TipFormat } from './utils.component'
import {
    fields,
    config,
    configChZn,
    copyChZn,
    onChange
} from './utils.mockData'

storiesOf('react-condition-spelling', module)
    .add('Normal: has fields', () => {
        return (
            <Fragment>
                <ConditionSpelling fields={fields} onChange={onChange} />
                <TipFormat title={'mock fields :'} data={fields}></TipFormat>
            </Fragment>
        )
    })
    .add('Error: no fields', () => {
        return (
            <Fragment>
                <ConditionSpelling />
                <TipTitle text={'no props'} />
            </Fragment>
        )
    })
    .add('Custom length', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    max={3}
                    fields={fields}
                    onChange={onChange}
                />
                <TipTitle text={'max = { 3 }'} />
            </Fragment>
        )
    })
    .add('Show All', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    max={3}
                    showAll
                    fields={fields}
                    onChange={onChange}
                />
                <TipTitle text={'showAll = { true }'} />
                <TipTitle
                    text={'work only if has prop: max ( custom length )'}
                />
                <div>max = {3}</div>
            </Fragment>
        )
    })
    .add('Custom config', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    config={config}
                    fields={fields}
                    onChange={onChange}
                />
                <TipFormat title={'mock config :'} data={config}></TipFormat>
                <TipFormat title={'mock fields :'} data={fields}></TipFormat>
            </Fragment>
        )
    })
    .add('Locale language', () => {
        return (
            <Fragment>
                <ConditionSpelling
                    config={configChZn}
                    copy={copyChZn}
                    fields={fields}
                    onChange={onChange}
                />
                <TipFormat
                    title={'mock config :'}
                    data={configChZn}
                ></TipFormat>
                <TipFormat title={'mock copy :'} data={copyChZn}></TipFormat>
                <TipFormat title={'mock fields :'} data={fields}></TipFormat>
            </Fragment>
        )
    })
