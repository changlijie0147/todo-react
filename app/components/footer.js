import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status:1,
      completed:false
    }
    this.showAll = this.showAll.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  componentWillMount() {
    var completeds = this.props.todos.filter(item => item.isDone);
    if(completeds.length>0) {
      this.setState({
        completed:true
      })
    }
  }
  
  componentWillReceiveProps(nextProps) {
    var completeds = nextProps.todos.filter(item => item.isDone);
    if(completeds.length>0) {
      this.setState({
        completed:true
      })
    }
    else {
      this.setState({
        completed:false
      })
    }
  }

  showAll () {
    this.setState({
      status:1
    })
    this.props.changeView('SHOW_ALL');
  }

  showActive() {
    this.setState({
      status:2
    });
    this.props.changeView('SHOW_ACTIVE');
  }

  showCompleted() {
    this.setState({
      status:3
    });
    this.props.changeView('SHOW_COMPLETED');
  }

  clearCompleted() {
    var todos = this.props.todos.filter((item)=>item.isDone == false);
    this.props.clearCompleted(todos);
  }

  render() {
    var that = this;
    var todos = this.props.todos.filter(item => !item.isDone);
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
          {
            this.state.completed?<span className="pull-right stip clear" onClick={this.clearCompleted}>Clear completed</span>:null
          }
        </div>
      : null)
  }
}