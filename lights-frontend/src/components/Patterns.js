import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Container, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ColorPicker } from 'material-ui-color';



export default function Patterns(props) {

    const BASE_URL = "http://127.0.0.1:5000"

    const [colorOne, setColorOne] = useState(null);
    const [colorTwo, setColorTwo] = useState(null);
    const [colorThree, setColorThree] = useState(null);

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
        if (colorOne == null || colorTwo == null || colorThree == null) {
            alert("You must enter three colors");
        }
        else {
            fetch(BASE_URL + '/patterns/set_tri_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb, 'color_two': colorTwo.rgb, 'color_three': colorThree.rgb}),
            })
        }
    }

    function setAlternate(e) {
        e.preventDefault()
        if (colorOne == null || colorTwo == null) {
            alert("You must enter two colors");
        }
        else {
            fetch(BASE_URL + '/patterns/set_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb, 'color_two': colorTwo.rgb}),
            })
        }
    }

    function startAlternating(e) {
        e.preventDefault()
        if (colorOne == null || colorTwo == null) {
            alert("You must enter two colors");
        }
        else {
            fetch(BASE_URL + '/patterns/start_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb, 'color_two': colorTwo.rgb}),
            })
        }
    }

    function startTriAlternating(e) {
        e.preventDefault()
        if (colorOne == null || colorTwo == null || colorThree == null) {
            alert("You must enter three colors");
        }
        else {
            fetch(BASE_URL + '/patterns/start_tri_alternating', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb, 'color_two': colorTwo.rgb, 'color_three': colorThree.rgb}),
            })
        }
    }

    function shootLeft(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/shoot_left', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb}),
            })
        }
    }

    function slideLeft(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/slide_left', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb}),
            })
        }
    }

    function slideMiddle(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/slide_middle', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb}),
            })
        }
    }

    function slideRight(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/slide_right', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb}),
            })
        }
    }

    function shootRight(e) {
        e.preventDefault()
        if (colorOne == null) {
            alert("You must enter a color");
        }
        else {
            fetch(BASE_URL + '/patterns/shoot_right', {
                method: 'POST',
                body: JSON.stringify({'color_one': colorOne.rgb}),
            })
        }
    }


    return (
        <div className="patterns">
            <Grid container className="patterns" spacing={3}>
                <Grid item xs={3}></Grid>
                <Grid item xs={2}>
                    <ColorPicker onChange={color => setColorOne(color)} value={colorOne} name="colorOne" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={2}>
                    <ColorPicker onChange={color => setColorTwo(color)} value={colorTwo} name="colorTwo" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={2}>
                    <ColorPicker onChange={color => setColorThree(color)} value={colorThree} name="colorThree" hideTextfield></ColorPicker>
                </Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={12}>
                    <Button onClick={handleStop} variant="contained" style={{backgroundColor: 'red', marginLeft: '20%', marginRight: '20%', width: '50%'}}>Stop Playing</Button>   
                </Grid>



                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={flashFade} variant="contained" color="primary" fullWidth>Flash Fade</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={setTriAlternate} variant="contained" color="primary" fullWidth>Set Tri Alternate</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={setAlternate} variant="contained" color="primary" fullWidth>Set Alternate</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={startAlternating} variant="contained" color="primary" fullWidth>Start Alternating</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={startTriAlternating} variant="contained" color="primary" fullWidth>Start Tri Alternating</Button>
                </Grid>
                <Grid item xs={1}></Grid>




                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={shootLeft} variant="contained" color="primary" fullWidth>Shoot Left</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={slideLeft} variant="contained" color="primary" fullWidth>Slide Left</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={slideMiddle} variant="contained" color="primary" fullWidth>Slide Middle</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={slideRight} variant="contained" color="primary" fullWidth>Slide Right</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="patternButton" onClick={slideRight} variant="contained" color="primary" fullWidth>Shoot Right</Button>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}