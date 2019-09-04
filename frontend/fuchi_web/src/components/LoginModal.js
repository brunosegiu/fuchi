import React from 'react'

import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

import SignIn from './SignIn';
import { styled, Typography } from '@material-ui/core';

const ModalContainer = styled(Paper)({
    position:"absolute",
    width: "25vw",
    height: "25vh",
    top: "37.5vh",
    right: "37.5vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly"
})

export default ({open}) => {
    return <Modal open={open}>
        <ModalContainer>
            <Typography>Sign in to track your matches, setup teams and more!</Typography>
        <SignIn></SignIn></ModalContainer>
    </Modal>
}