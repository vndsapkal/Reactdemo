import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
       projects: []
    }
}
componentWillMount(){
  this.setState({
    projects: [
      {
          title: 'Business Website',
          category: 'Web Design'
      },
      {
          title: 'Social App',
          category: 'Mobile development'
      },
      {
          title: 'Ecommerce Shopping cart',
          category: 'Web Development'
      }
  ]
  });
}
  render() {
    return (
      <div className="App">
          <AddProject />
          <Projects projects={this.state.projects} />
          
          <br/>
      </div>
    );
  }
}

export default App;
