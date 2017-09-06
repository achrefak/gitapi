import React, { Component } from 'react';
import { getUserByUsername } from './lib/gitHubConnectors'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {user: '', gitResponse: undefined}
  }

  gitByUsername(){

    getUserByUsername(this.state.user)
    .then(response => {
      console.log(response.data);
      this.setState({ gitResponse: response.data });
    })
    .catch(error => {
      console.log(error);
    });

  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to GITAPI</h2>
        </div>
        <p className="App-intro">
          To get started, enter your <code>Github Username</code> and click search.
        </p>

        <input type='text' size='50' value={this.state.user} onChange={e => this.setState({user: e.target.value })}/>

        <input type='button' size='50' value='Search' onClick={e => this.gitByUsername() }/>

        <p>{this.state.gitResponse ? JSON.stringify(this.state.gitResponse) : null}</p>

      </div>
    );
  }
}

export default App;
