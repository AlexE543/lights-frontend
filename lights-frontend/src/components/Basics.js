import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Container, InputLabel, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ColorPicker } from 'material-ui-color';



export default function Basics(props) {

    const BASE_URL = "http://127.0.0.1:5000"

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
        fetch(BASE_URL + '/basics/clear', {
            method: 'GET',
        })
    }

    function setPixelColor(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/basics/set_pixel', {
                method: 'POST',
                body: JSON.stringify({'color': colorOne.rgb, 'index': startIndex}),
            })
        }
    }

    function fillRange(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/basics/fill_range', {
                method: 'POST',
                body: JSON.stringify({'color': colorOne.rgb, 'start': startIndex, 'end': endIndex}),
            })
        }
    }

    function fill(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/basics/fill', {
                method: 'POST',
                body: JSON.stringify({'color': colorOne.rgb}),
            })
        }
    }


    return (
        <div className="main">
            <Grid container spacing={3} className="patterns">
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <InputLabel>Pick a color</InputLabel>
                    <ColorPicker onChange={handleColorOneChange} value={colorOne} name="color" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={2}></Grid>
                <Container>
                    <InputLabel>Start/Pixel Index</InputLabel>
                    <TextField onChange={handleStartIndexChange} value={startIndex} type="number"></TextField>
                </Container>
                <Container style={{marginTop: "2%"}}>
                    <InputLabel>End Index</InputLabel>
                    <TextField onChange={handleEndIndexChange} value={endIndex} type="number"></TextField>
                </Container>

                <Grid item xs={12}>
                    <Button onClick={clear} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Clear</Button>
                </Grid>



                <Grid item xs={4}>
                    <Container style={{width: "40%"}}>
                        <Button className="patternButton" onClick={setPixelColor} variant="contained" color="primary">Set Pixel</Button>
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Container style={{width: "40%"}}>
                        <Button className="patternButton" onClick={fillRange} variant="contained" color="primary">Fill Section</Button>
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Container>
                        <Button className="patternButton" onClick={fill} variant="contained" color="primary" >Fill All</Button>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}