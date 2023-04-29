import React from 'react'
import './App.css';
import Form from './Form';
import WindowTracker from './windowTracker';

class App extends React.Component {
  state = {
    character: {}
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/2")
      .then(res => res.json())
      .then(data => {
        this.setState({character: data})
    })
  }
  render() {
    return(
      <>
        <h1>{this.state.character.name}</h1>
        <WindowTracker />
        <Form />
      </>
    )
  }
}

export default App;
