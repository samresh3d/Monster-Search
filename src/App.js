import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFeld:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters: user}))
  }

  handleChange = e => {this.setState({searchFeld: e.target.value})}
    
  render(){

    const {monsters, searchFeld } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchFeld.toLowerCase()));
    
    return(
      <div className="App">
        <h1>Monster Finder</h1>
        <SearchBox placeholder = "Find your Monster" handleChange = {this.handleChange}  />
        <CardList monsters={filteredMonster} />
        
      </div>

    )
  }
}

export default App;
