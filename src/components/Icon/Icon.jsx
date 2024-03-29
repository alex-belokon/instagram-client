import React from 'react';
import * as Icons from '../../themes/icons'

const Icon = (props) => {
  const { type, color, onClick, className, stroke } = props
  const IconJSX = Icons[type]

  if (!IconJSX) return null

  return (
    <span onClick={onClick}>
      {IconJSX({
        color: color,
        className: className,
        stroke: stroke
      })}
    </span>
  );
}

export default Icon;