import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status:1
    }
    this.showAll = this.showAll.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
  }

  showAll () {
    this.setState({
      status:1
    })
    this.props.changeView('SHOW_ALL');
  }

  showActive() {
    // let todos = this.props.todos.filter(item => !item.isDone);
    this.setState({
      status:2
    });
    this.props.changeView('SHOW_ACTIVE');
  }

  showCompleted() {
    // let todos = this.props.todos.filter(item => item.isDone)
    this.setState({
      status:3
    });
    this.props.changeView('SHOW_COMPLETED');
  }

  render() {
    var that = this;
    var todos = this.props.todos.filter(item => !item.isDone);
    // console.log(todos)

    return (
      this.props.todos.length > 0? 
      <div className="footer clearfix">
          <span className="pull-left stip">
            {todos.length}&nbsp;
            items left
          </span>
          <ul className="pull-left tabs">
            <li onClick={this.showAll} className={that.state.status ==1?'select pull-left':'pull-left'}>All</li>
            <li onClick={this.showActive} className={that.state.status ==2?'select pull-left':'pull-left'}>Active</li>
            <li onClick={this.showCompleted} className={that.state.status ==3?'select pull-left':'pull-left'}>Completed</li>
          </ul>
        </div>
      : null)
  }
}