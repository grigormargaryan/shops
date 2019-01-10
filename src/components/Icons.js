import React from 'react'
import Icon from '@mdi/react';
import * as inonName  from '@mdi/js';

export default ({ size , color, name }) => {
  let Iconsize = size ? size : 1.2
  let Iconcolor = color ? color : '#06137f'
  return (
    <Icon path = {inonName[name]}
          size={Iconsize}
          color={Iconcolor}
    />
  )
}