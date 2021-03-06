import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Container, InputLabel, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ColorPicker } from 'material-ui-color';



export default function Patterns(props) {

    const BASE_URL = "http://127.0.0.1:5000"

    const [colorOne, setColorOne] = useState(null);
    const [colorTwo, setColorTwo] = useState(null);
    const [colorThree, setColorThree] = useState(null);
    const [colorFour, setColorFour] = useState(null);
    const [colorFive, setColorFive] = useState(null);
    const [colorSix, setColorSix] = useState(null);
    const [colorSeven, setColorSeven] = useState(null);
    const [colorEight, setColorEight] = useState(null);
    const [colorNine, setColorNine] = useState(null);

    function handleStop(e) {
        e.preventDefault()
        fetch(BASE_URL + '/patterns/stop_playing', {
            method: 'GET',
        })
    }

    function flashFade(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/flash_fade', {
                method: 'POST',
                body: JSON.stringify({'color': colorOne.rgb}),
            })
        }
    }

    function setTriAlternate(e) {
        e.preventDefault()
        if (colorTwo == null || colorThree == null || colorFour == null) {
            alert("You must enter three colors");
        }
        else {
            fetch(BASE_URL + '/patterns/set_tri_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorTwo.rgb, 'color_two': colorThree.rgb, 'color_three': colorFour.rgb}),
            })
        }
    }

    function setAlternate(e) {
        e.preventDefault()
        if (colorFive == null || colorSix == null) {
            alert("You must enter two colors");
        }
        else {
            fetch(BASE_URL + '/patterns/set_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorFive.rgb, 'color_two': colorSix.rgb}),
            })
        }
    }

    function startAlternating(e) {
        e.preventDefault()
        if (colorFive == null || colorSix == null) {
            alert("You must enter two colors");
        }
        else {
            fetch(BASE_URL + '/patterns/start_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorFive.rgb, 'color_two': colorSix.rgb}),
            })
        }
    }

    function startTriAlternating(e) {
        e.preventDefault()
        if (colorTwo == null || colorThree == null || colorFour == null) {
            alert("You must enter three colors");
        }
        else {
            fetch(BASE_URL + '/patterns/start_tri_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorTwo.rgb, 'color_two': colorThree.rgb, 'color_three': colorFour.rgb}),
            })
        }
    }

    function shootLeft(e) {
        e.preventDefault()
        if (colorSeven == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/shoot_left', {
                method: 'POST',
                body: JSON.stringify({'color': colorSeven.rgb}),
            })
        }
    }

    function slideLeft(e) {
        e.preventDefault()
        if (colorSeven == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/slide_left', {
                method: 'POST',
                body: JSON.stringify({'color': colorSeven.rgb}),
            })
        }
    }

    function slideMiddle(e) {
        e.preventDefault()
        if (colorSeven == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/slide_middle', {
                method: 'POST',
                body: JSON.stringify({'color': colorSeven.rgb}),
            })
        }
    }

    function slideRight(e) {
        e.preventDefault()
        if (colorSeven == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/slide_right', {
                method: 'POST',
                body: JSON.stringify({'color': colorSeven.rgb}),
            })
        }
    }

    function shootRight(e) {
        e.preventDefault()
        if (colorSeven == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/shoot_right', {
                method: 'POST',
                body: JSON.stringify({'color': colorSeven.rgb}),
            })
        }
    }


    return (
        <div className="patterns">
            <Grid container className="patterns" spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={flashFade} variant="contained" color="primary">Flash Fade</Button>
                </Grid>
                <Grid item xs={2}>
                    <InputLabel>Color One</InputLabel>
                    <ColorPicker onChange={color => setColorOne(color)} value={colorOne} name="colorOne" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={handleStop} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Stop Playing</Button>   
                </Grid>

                {/* Set Tri Alternate */}

                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={setTriAlternate} variant="contained" color="primary">Set Tri Alternate</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={startTriAlternating} variant="contained" color="primary">Start Tri Alternating</Button>
                </Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 1</InputLabel>
                    <ColorPicker onChange={color => setColorTwo(color)} value={colorTwo} name="colorOne" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 2</InputLabel>
                    <ColorPicker onChange={color => setColorThree(color)} value={colorThree} name="colorTwo" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 3</InputLabel>
                    <ColorPicker onChange={color => setColorFour(color)} value={colorFour} name="colorThree" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <Button onClick={handleStop} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Stop Playing</Button>   
                </Grid>

                {/* Set Alternate */}

                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={setAlternate} variant="contained" color="primary">Set Alternate</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={startAlternating} variant="contained" color="primary">Start Alternating</Button>
                </Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 1</InputLabel>
                    <ColorPicker onChange={color => setColorFive(color)} value={colorFive} name="colorOne" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 2</InputLabel>
                    <ColorPicker onChange={color => setColorSix(color)} value={colorSix} name="colorTwo" hideTextfield></ColorPicker>
                </Grid>
                <Grid itex xs={2}></Grid>
                <Grid item xs={4}>
                    <Button onClick={handleStop} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Stop Playing</Button>   
                </Grid>

                {/* Shoot/Slide Left Shoot/Slide Right*/}

                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={shootLeft} variant="contained" color="primary">Shoot Left</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={slideLeft} variant="contained" color="primary">Slide Left</Button>
                </Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 1</InputLabel>
                    <ColorPicker onChange={color => setColorSeven(color)} value={colorSeven} name="colorOne" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={4}>
                    <Button onClick={handleStop} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Stop Playing</Button>   
                </Grid>


                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={slideMiddle} variant="contained" color="primary">Slide Middle</Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 1</InputLabel>
                    <ColorPicker onChange={color => setColorSeven(color)} value={colorSeven} name="colorOne" hideTextfield></ColorPicker>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid item xs={4}>
                    <Button onClick={handleStop} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Stop Playing</Button>   
                </Grid>


                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Button className="patternButton" onClick={slideRight} variant="contained" color="primary">Slide Right</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={shootRight} variant="contained" color="primary">Shoot Right</Button>
                </Grid>
                <Grid item xs={1}>
                    <InputLabel>Color 1</InputLabel>
                    <ColorPicker onChange={color => setColorSeven(color)} value={colorSeven} name="colorOne" hideTextfield></ColorPicker>
                </Grid>
                <Grid itex xs={3}></Grid>
                <Grid item xs={4}>
                    <Button onClick={handleStop} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Stop Playing</Button>   
                </Grid>






                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}