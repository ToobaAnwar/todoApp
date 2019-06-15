import React, { Component } from 'react';
import './App.css';
import Todo from './todo.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      items: [],
      deleteItem : function(){

      }
    };
  }

  onChange = (event) => {
    this.setState({ todo: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todo: '',
      items: [...this.state.items, this.state.todo]
    });
  }
  deleteItem = (item) =>{
    this.setState({
      items: this.state.items.filter(i => i !== item)
    })
  }

  render() {
    return (
      <div  className="App">
        <h2>MY TODO APP :)</h2>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.todo} onChange={this.onChange} />
          <button>SUBMIT</button>
        </form>
        <Todo items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}
