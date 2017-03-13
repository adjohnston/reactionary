import React, { Component, PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'
import {
  List,
  Item
} from 'components/styled/List'
import { Message } from 'components/styled/Note'
import { InputText } from 'components/styled/Input'

const isType = (propType, type) => propType === type
const isRequired = propType => typeof propType === 'object' ? true : false
const type = prop => isRequired(prop) ? prop[0] : prop

class Types extends Component {
  constructor(props) {
    super(props)

    this.InputElement = this.InputElement.bind(this)
  }

  InputElement(prop, propType) {
    const {
      state,
      setProp
    } = this.props

    let inputElement

    if (isType(propType, 'string') || isType(propType, 'number')) {
      inputElement = (
        <InputText
          type="text"
          value={state[prop]}
          onChange={({target: {value}}) => {
            setProp(prop, isType(propType, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (propType === 'bool') {
      inputElement = (
        <input
          type="checkbox"
          checked={state[prop]}
          onClick={({target: {checked}}) => setProp(prop, checked)} />
      )
    }

    return inputElement || null
  }

  render() {
    const typeGroups = this.props.types

    return typeGroups && (
      <section>
        <Subtitle>
          Types
        </Subtitle>

        <section>
          {Object.keys(typeGroups).map((group) => (
            <div>
              <h3
                key={group}>
                {group}
              </h3>

              <List>
                {Object.keys(typeGroups[group]).map((prop) => {
                  const type = typeGroups[group][prop].type
                  const msg = typeGroups[group][prop].msg
                  return (
                    <Item
                      key={prop}>
                      <b>{prop}</b> - {type[0]}{type[1] ? '*' : null}<br />
                      {msg}<br />
                      {this.InputElement(prop, type[0])}
                    </Item>
                  )
                })}
              </List>
            </div>
          ))}
        </section>
      </section>
    ) || null
  }
}

Types.propTypes = {
  setProp: PropTypes.func.isRequired,
  props: PropTypes.object
}

export default Types