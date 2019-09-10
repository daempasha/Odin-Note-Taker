import React from 'react';
import './Notes.css';
import Note from './Note'

function Notes(props){
    return (
      <div>
        {props.notes.map(
            item => <Note delete={props.delete} txt={item}/>)}
      </div>
    );
  }

export default Notes;