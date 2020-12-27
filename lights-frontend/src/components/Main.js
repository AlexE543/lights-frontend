import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Container, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { ColorPicker } from 'material-ui-color';


function clear() {
    fetch('/basics/clear', {
        method: 'GET',
    }).then(alert("Complete"))
}

export default function Main(props) {
    return (
        <div className="main">
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <form style={{flexDirection: 'row', display: 'flex'}} onSubmit={clear}>
                        <Container style={{width: "40%"}}>
                            <Button variant="contained" style={{background: 'red', color: 'white'}} fullWidth>Clear</Button>
                        </Container>
                        <Container style={{width: "60%"}}></Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Clears the current leds. Setting them all to off.</Typography>
                </Grid>

                <Grid item xs={6}>
                    <form style={{flexDirection: 'row', display: 'flex'}}>
                        <Container style={{width: "40%"}}>
                            <Button variant="contained" color="primary" fullWidth>Fill Section</Button>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <ColorPicker defaultValue="red" hideTextfield></ColorPicker>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <TextField type="number" defaultValue="0"></TextField>
                        </Container>
                        <Container style={{width: "20%"}}>
                        </Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Sets the color of a given led to a specified color.</Typography>
                </Grid>

                <Grid item xs={6}>
                    <form style={{flexDirection: 'row', display: 'flex'}}>
                        <Container style={{width: "40%"}}>
                            <Button variant="contained" color="primary" fullWidth>Fill Section</Button>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <ColorPicker defaultValue="red" hideTextfield></ColorPicker>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <TextField type="number" defaultValue="0"></TextField>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <TextField type="number" defaultValue="0"></TextField>
                        </Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Fills specified range of leds to the specified color.</Typography>
                </Grid>

                <Grid item xs={6}>
                    <form style={{flexDirection: 'row', display: 'flex'}}>
                        <Container style={{width: "40%"}}>
                            <Button variant="contained" color="primary" fullWidth>Fill All</Button>
                        </Container>
                        <Container style={{width: "60%"}}>
                            <ColorPicker defaultValue="red" hideTextfield></ColorPicker>
                        </Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Fills the whole led strip to a specified color.</Typography>
                </Grid>

                <Grid item xs={6}>
                    <form style={{flexDirection: 'row', display: 'flex'}}>
                        <Container style={{width: "40%"}}>
                            <Button variant="contained" color="primary" fullWidth>Fill All</Button>
                        </Container>
                        <Container style={{width: "60%"}}>
                            <ColorPicker defaultValue="red" hideTextfield></ColorPicker>
                        </Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Fills the whole led strip to a specified color.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}