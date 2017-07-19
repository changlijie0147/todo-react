import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handlerKeyUp = this.handlerKeyUp.bind(this);
  }

  handlerKeyUp(e) {
    var that = this;
    var id = that.props.todos.length>0?that.props.todos[that.props.todos.length-1].id+1:0
    if (e.keyCode == 13 && e.target.value != '') {
      let item = {
        id: id,
        name: e.target.value,
        isDone: false
      }
      e.target.value =  '';
      that.props.addTodos(item);
    }
  }
  
  render() {
    var that = this;
    return (
      <header className="header">
        <input
          type="text"
          placeholder="What nedds to be done?"
          onKeyUp={that.handlerKeyUp}/>
      </header>
    )
  }
}