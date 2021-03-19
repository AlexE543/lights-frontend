import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Container, InputLabel, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ColorPicker } from 'material-ui-color';



export default function Basics(props) {

    const BASE_URL = "http://10.31.222.26:5000"

    const [colorOne, setColorOne] = useState(null);
    const [colorTwo, setColorTwo] = useState(null);
    const [colorThree, setColorThree] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const [pixelIndex, setPixelIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);

    function handleColorOneChange(color) {
        setColorOne(color);
    };

    function handleColorTwoChange(color) {
        setColorTwo(color);
    };

    function handleColorThreeChange(color) {
        setColorThree(color);
    };


    function handleStartIndexChange(e) {
        e.preventDefault()
        setStartIndex(e.target.value);
    }

    function handlePixelIndexChange(e) {
        e.preventDefault()
        setPixelIndex(e.target.value);
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
                body: JSON.stringify({'color': colorOne.rgb, 'index': pixelIndex}),
            })
        }
    }

    function fillRange(e) {
        e.preventDefault()
        if (colorTwo == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/basics/fill_range', {
                method: 'POST',
                body: JSON.stringify({'color': colorTwo.rgb, 'start': startIndex, 'end': endIndex}),
            })
        }
    }

    function fill(e) {
        e.preventDefault()
        if (colorThree == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/basics/fill', {
                method: 'POST',
                body: JSON.stringify({'color': colorThree.rgb}),
            })
        }
    }


    return (
        <div className="main">
            <Grid container spacing={3} className="patterns">
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={setPixelColor} variant="contained" color="primary">Set Pixel</Button>
                </Grid>
                <Grid item xs={2}>
                    <InputLabel>Pick a color</InputLabel>
                    <ColorPicker onChange={handleColorOneChange} value={colorOne} name="color" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={2}>
                    <Container>
                        <InputLabel>Pixel Index</InputLabel>
                        <TextField onChange={handlePixelIndexChange} value={pixelIndex} type="number"></TextField>
                    </Container>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Button onClick={clear} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Clear</Button>
                </Grid>

                {/* Fill Section */}

                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={fillRange} variant="contained" color="primary">Fill Section</Button>
                </Grid>
                <Grid item xs={2}>
                    <InputLabel>Pick a color</InputLabel>
                    <ColorPicker onChange={handleColorTwoChange} value={colorTwo} name="color" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={2}>
                    <Container>
                        <InputLabel>Start Index</InputLabel>
                        <TextField onChange={handleStartIndexChange} value={startIndex} type="number"></TextField>
                    </Container>
                </Grid>
                <Grid item xs={2}>
                    <Container style={{marginTop: "2%"}}>
                        <InputLabel>End Index</InputLabel>
                        <TextField onChange={handleEndIndexChange} value={endIndex} type="number"></TextField>
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={clear} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Clear</Button>
                </Grid>

                {/* Fill All */}

                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={fill} variant="contained" color="primary" >Fill All</Button>
                </Grid>
                <Grid item xs={2}>
                    <InputLabel>Pick a color</InputLabel>
                    <ColorPicker onChange={handleColorThreeChange} value={colorThree} name="color" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Button onClick={clear} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Clear</Button>
                </Grid>
            </Grid>
        </div>
    )
}