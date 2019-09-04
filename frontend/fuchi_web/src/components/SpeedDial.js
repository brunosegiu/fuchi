import React from 'react'

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab'
import { styled } from '@material-ui/styles';

import AddIcon from '@material-ui/icons/AddCircle';

const actions = [
  {
    name: 'Add match',
    icon: <AddIcon/>,
  },
]

const CustomSpeedDial = styled(SpeedDial)({
  position: 'absolute',
  bottom: "1vh",
  right:"1vw"
})

export default () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return <CustomSpeedDial
  ariaLabel="dial"
  hidden={false}
  icon={<SpeedDialIcon />}
  open={open}
  direction
  onClick={toggleOpen}
  onMouseEnter={handleOpen}
  onMouseLeave={handleClose}
  direction="up"
>
  {actions.map(action => (
      <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
    />
  ))}
</CustomSpeedDial>
}
  
