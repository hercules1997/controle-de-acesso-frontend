import PropTypes from 'prop-types'
import React from 'react'

import { ComponentInput } from './style'

export function Input ({ children, ...rest }) {
  return <ComponentInput {...rest}>{children}</ComponentInput>
}

Input.propTypes = {
  children: PropTypes.string || PropTypes.number
}
