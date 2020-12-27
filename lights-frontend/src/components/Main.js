import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Container, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { ColorPicker } from 'material-ui-color';



export default function Main(props) {

    const [pixel, setPixel] = useState(0);
    const [colorOne, setColorOne] = useState(null);
    const [colorTwo, setColorTwo] = useState([0, 0, 0]);
    const [colorThree, setColorThree] = useState([0, 0, 0]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);

    function handleColorOneChange(color) {
        setColorOne(color);
    };

    function handlePixelIndexChange(e) {
        e.preventDefault()
        setPixel(e.target.value);
    }

    function handleStartIndexChange(e) {
        e.preventDefault()
        setStartIndex(e.target.value);
    }

    function handleEndIndexChange(e) {
        e.preventDefault()
        setEndIndex(e.target.value);
    }

    function clear(e) {
        e.preventDefault()
        console.log("Function Called!");
        fetch('/basics/clear', {
            method: 'GET',
        }).then(alert("Complete"))
    }

    function setPixelColor(e) {
        e.preventDefault()
        console.log(colorOne);
        fetch('/basics/set_pixel', {
            method: 'POST',
            body: JSON.stringify({'color': colorOne.rgb, 'index': pixel}),
        })
    }

    function fillRange(e) {
        e.preventDefault()
        console.log("Function Called");
        fetch('/basics/fill_range', {
            method: 'POST',
            body: JSON.stringify({'color': colorOne.rgb, 'start': startIndex, 'end': endIndex}),
        }).then(alert("Complete"));
    }

    function fill(e) {
        e.preventDefault()
        console.log("Function Called");
        fetch('/basics/fill', {
            method: 'POST',
            body: JSON.stringify({'color': colorOne.rgb}),
        }).then(alert("Complete"));
    }


    return (
        <div className="main">
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <form style={{flexDirection: 'row', display: 'flex'}} onSubmit={clear}>
                        <Container style={{width: "40%"}}>
                            <Button type="submit" variant="contained" style={{background: 'red', color: 'white'}} fullWidth>Clear</Button>
                        </Container>
                        <Container style={{width: "60%"}}></Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Clears the current leds. Setting them all to off.</Typography>
                </Grid>


                <Grid item xs={6}>
                    <form onSubmit={setPixelColor} style={{flexDirection: 'row', display: 'flex'}}>
                        <Container style={{width: "40%"}}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Set Pixel</Button>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <ColorPicker onChange={handleColorOneChange} value={colorOne} name="color" hideTextfield></ColorPicker>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <TextField onChange={handlePixelIndexChange} value={pixel} type="number"></TextField>
                        </Container>
                        <Container style={{width: "20%"}}>
                        </Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Sets the color of a given led to a specified color.</Typography>
                </Grid>


                <Grid item xs={6}>
                    <form onSubmit={fillRange} style={{flexDirection: 'row', display: 'flex'}}>
                        <Container style={{width: "40%"}}>
                            <Button type="sumbit" variant="contained" color="primary" fullWidth>Fill Section</Button>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <ColorPicker onChange={handleColorOneChange} value={colorOne} name="color" hideTextfield></ColorPicker>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <TextField onChange={handleStartIndexChange} value={pixel} type="number"></TextField>
                        </Container>
                        <Container style={{width: "20%"}}>
                            <TextField onChange={handleEndIndexChange} value={pixel} type="number"></TextField>
                        </Container>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5">Fills specified range of leds to the specified color.</Typography>
                </Grid>


                <Grid item xs={6}>
                    <form onSubmit={fill} style={{flexDirection: 'row', display: 'flex'}}>
                        <Container style={{width: "40%"}}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Fill All</Button>
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
                            <ColorPicker onChange={handleColorOneChange} value={colorOne} name="color" hideTextfield></ColorPicker>
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