import React from 'react';
import './Note.css';
import {IconButton, Checkbox, Button, Paper, Grid, OutlinedInput} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

function Note(props){
    return (
        <Paper className='note-margin'>
            <Grid container justify='flex-end'><Grid item><IconButton size='small'  color="inherit" aria-label="close"><CloseIcon /></IconButton></Grid></Grid>
            <p>{props.txt}</p>
        </Paper>);
}

export default Note;