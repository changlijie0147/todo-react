import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  handlerKeyUp(e) {
    var that = this;
    if (e.keyCode == 13 && e.target.value != '') {
      console.log(e.target.value)
      let item = {
        id: that.props.todos.length+1,
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
          onKeyUp={that.handlerKeyUp.bind(this)}/>
      </header>
    )
  }
}