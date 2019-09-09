import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import styled from 'styled-components'
import './App.css';
import Header from './components/Header.js'
import {Checkbox, Button, Paper, Grid, OutlinedInput} from '@material-ui/core/';
import Notes from './components/Notes'

const Background = styled.div`
    display: grid;
    margin: 0 10vw;
    grid-template-columns: 400px 200px;
`;

const input = {
  'margin': '5px 5px',
  'height': '36px'
}




class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      'value':'',
      'submit':[]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.value != ''){
      this.setState(prevState => ({
        'submit':[...prevState.submit, this.state.value], 'value':''
      }));
    }
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  render(){
    return (
      <div>
        <a><Header title={'ODIN'} /></a>
          <Paper className='paper-margin'>
            <form noValidate onSubmit={this.handleSubmit}>
              <OutlinedInput value={this.state.value} onChange={this.handleChange} style={input}/>
              <Button variant='outlined' type='submit'>+ Add note</Button>
            </form>
          </Paper>
          <Notes notes={this.state.submit}/>
        </div>
    ); 
  }
}


export default App;
