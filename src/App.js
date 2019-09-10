import React from 'react';
import styled from 'styled-components'
import './App.css';
import Header from './components/Header.js'
import {Button, Paper, OutlinedInput} from '@material-ui/core/';
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

    this.deleteItem = this.deleteItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteItem(item){
      if(this.state.submit.includes(item)){
        console.log('okay');
        this.setState({submit: this.state.submit.filter(li => li !== item)});
      }
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
          <Notes delete={this.deleteItem} notes={this.state.submit}/>
        </div>
    ); 
  }
}


export default App;
