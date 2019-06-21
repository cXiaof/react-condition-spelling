import React, { Fragment } from 'react'

export const TipTitle = ({ text }) => (
    <Fragment>
        <br />
        <strong>{text || ''}</strong>
    </Fragment>
)

export const TipFormat = ({ title, data }) => (
    <Fragment>
        <br />
        <TipTitle text={title}></TipTitle>
        <pre>{JSON.stringify(data || '', null, 4)}</pre>
    </Fragment>
)
