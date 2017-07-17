import React, {Component} from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModify:false
    }

    this.changeStatus = this.changeStatus.bind(this);
    this.beforeModify = this.beforeModify.bind(this);
    this.afterModify = this.afterModify.bind(this);
    this.onBlur = this.onBlur.bind(this);    
  }

  changeStatus() {
    this.props.todo.isDone = !this.props.todo.isDone;
    this.props.modifyTodo(this.props.todo.isDone,this.props.todo.id,'isDone');
  }

  beforeModify() {
    this.setState({
      isModify:!this.state.isModify
    })
  }

  afterModify(e) {
    if(e.keyCode == 13) {
      console.log(e.target.value);
      this.props.modifyTodo(e.target.value,this.props.todo.id,'name');
      this.setState({
        isModify:!this.state.isModify
      })
    }
  }

  onBlur() {
    this.setState({
        isModify:!this.state.isModify
    })
  }

  render() {
    return (
      <li className="clearfix">
        <div className="pull-left">
          <input type="checkbox" checked={this.props.todo.isDone?true:false} onChange={this.changeStatus}/>
        </div>
        <div className="item-form">
          <p className={this.props.todo.isDone?'complete':''} onDoubleClick={this.beforeModify}>{this.props.todo.name}</p>
          {
            this.state.isModify?<input className="input" type="text" onKeyUp={this.afterModify} onBlur={this.onBlur} autoFocus defaultValue={this.props.todo.name}/>:null
          }
        </div>
      </li>
    )
  }
}