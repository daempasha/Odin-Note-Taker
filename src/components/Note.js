import React from 'react';
import './Note.css';
import {IconButton, Paper, Grid} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

class Note extends React.Component{
    constructor(props){
        super(props);
    }

    onDelete = (item) => {
        this.props.delete(this.props.txt);
    }

    render(){
        return (
            <Paper className='note-margin'>
                <Grid container justify='flex-end'><Grid item><IconButton onClick={this.onDelete} size='small' color="inherit" aria-label="close"><CloseIcon /></IconButton></Grid></Grid>
                <p>{this.props.txt}</p>
            </Paper>);
    }
}

export default Note;