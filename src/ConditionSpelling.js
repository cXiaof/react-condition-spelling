import React, { Component } from 'react'
import uuid from 'uuid'

import configDefault from './constants/configDefault'
import copyDefault from './constants/copyDefault'

import ConditionSpellingBox from './ConditionSpelling.box'

class ConditionSpelling extends Component {
    constructor(props) {
        super(props)
        const max = Math.max(~~props.max, 0) || Infinity
        const showAll =
            props.showAll && props.max !== undefined && max !== Infinity
        const data = this.getInitData(max, showAll)
        const copy = { ...copyDefault, ...props.copy }
        const config = { ...configDefault, ...props.config }
        const fields = this.getFiedls(props.fields, config)
        const condition = copy.alwaysTrue
        const spelling = copy.waiting
        this.state = {
            max,
            showAll,
            data,
            copy,
            config,
            fields,
            condition,
            spelling
        }
    }

    getOneItemWithUid() {
        return { id: uuid.v1().toString() }
    }

    getInitData(max, showAll) {
        if (!showAll) return [this.getOneItemWithUid()]
        let arr = []
        for (let i = 0; i < max; i++) {
            arr.push(this.getOneItemWithUid())
        }
        return arr
    }

    getFiedls(fields = [], config) {
        return fields.reduce((target, field) => {
            const { dataType, fieldName, name } = field
            let type = ''
            Object.entries(config).forEach(([key, { dataTypes, symbols }]) => {
                if (key !== 'doors' && key !== 'default') {
                    if (dataTypes.includes(dataType)) type = key
                }
            })
            target[name || fieldName] = {
                fieldName,
                type: type || 'text',
                symbols: type ? config[type].symbols : config.default
            }
            return target
        }, {})
    }

    componentDidMount() {
        const { onLoad } = this.props
        const { condition, spelling } = this.getResultObj()
        if (onLoad) onLoad(condition, spelling)
    }

    componentDidUpdate(preProps, preState) {
        const { condition } = this.state
        const { onChange } = this.props
        if (onChange && condition !== preState.condition) {
            const result = this.getResultObj()
            onChange(result)
        }
    }

    getResultObj() {
        let { condition, spelling, copy, data } = this.state
        spelling = condition ? spelling : copy.waiting
        condition = condition || copy.alwaysTrue
        return {
            condition,
            spelling,
            inputs: data
        }
    }

    getCondition(data) {
        return data.reduce(
            (target, { condition }) => `${target}${condition || ''}`,
            ''
        )
    }

    getSpelling(data) {
        return data.reduce(
            (target, { spelling }) => `${target}${spelling || ''}`,
            ''
        )
    }

    handleBoxChange(i, condition, spelling, state) {
        let data = [...this.state.data]
        data[i] = {
            ...data[i],
            condition,
            spelling,
            state
        }
        condition = this.getCondition(data)
        spelling = this.getSpelling(data)
        this.setState({
            ...this.state,
            data,
            condition,
            spelling
        })
    }

    handleInsert(index) {
        let { data, max } = this.state
        if (data.length === max) return
        data.splice(index + 1, 0, this.getOneItemWithUid())
        this.setState({
            ...this.state,
            data
        })
    }

    handleDelete(index) {
        const { max, showAll } = this.state
        let data = [...this.state.data]
        data.splice(index, 1)
        if (data.length === 0) data.push(this.getOneItemWithUid())
        if (showAll)
            for (let index = 0; index < max - data.length; index++) {
                data.push(this.getOneItemWithUid())
            }
        const condition = this.getCondition(data)
        const spelling = this.getSpelling(data)
        this.setState({
            ...this.state,
            data,
            condition,
            spelling
        })
    }

    getRcsBoxes() {
        const { max, showAll, data, copy, config, fields } = this.state
        return data.map(({ id }, index) => (
            <ConditionSpellingBox
                key={id}
                id={id}
                first={index === 0}
                noInsert={showAll || max === data.length}
                doors={config.doors}
                fields={fields}
                onChange={this.handleBoxChange.bind(this, index)}
                onAdd={this.handleInsert.bind(this, index)}
                onDelete={this.handleDelete.bind(this, index)}
                {...copy}
            />
        ))
    }

    getRcsBody() {
        const { fields, copy } = this.state
        if (Object.keys(fields).length === 0) return copy.error
        return this.getRcsBoxes()
    }

    render() {
        return (
            <div className='react-condition-spelling'>{this.getRcsBody()}</div>
        )
    }
}

export default ConditionSpelling
