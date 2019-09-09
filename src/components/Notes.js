import React from 'react';
import './Notes.css';
import {Checkbox, Button, Paper, Grid, OutlinedInput} from '@material-ui/core/';
import Note from './Note'

function Notes(props){
    return (
      <div>
        {props.notes.map(
            item => <Note txt={item}/>)}
      </div>
    );
  }

export default Notes;