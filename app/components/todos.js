import React, {Component} from 'react';
import Todo from './todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    }
  }

  render() {
    var that = this;
    let todos=[];
    if(this.props.view == 'SHOW_ALL') {
      this.state.todos.forEach(function(item) {
        todos.push(item);
      }, this);
    }
    if(this.props.view == 'SHOW_ACTIVE') {
     this.state.todos.forEach(function(item) {
       if(!item.isDone)
        todos.push(item);
      }, this);
    }
    if(this.props.view == 'SHOW_COMPLETED') {
      this.state.todos.forEach(function(item) {
        if(item.isDone)
        todos.push(item);
      }, this);
    }
    
    return (
      <ul className="todo-list">
        {
          todos.map((item,i)=>{
            return <Todo handleDel={this.props.handleDel} modifyTodo={that.props.modifyTodo} todo={item} key={i}></Todo>
          })
        }
      </ul>
    )
  }
}