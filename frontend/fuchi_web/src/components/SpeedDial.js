import React from 'react'

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab'

const actions = [
  {
    name: 'test',
    icon: null,
  },
]

export default () => (
  <SpeedDial
    ariaLabel="SpeedDial example"
    hidden={false}
    icon={<SpeedDialIcon />}
    open
    direction
  >
    {actions.map(action => (
        <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    ))}
  </SpeedDial>
)
