import React, {Component} from 'react';
import Header from './header';
import TodoList from './todos';
import Footer from './footer';
import './main.scss';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    var todos = localStorage.getItem('todos');
    console.log(JSON.parse(todos));
    this.state = {
      todos:todos?JSON.parse(todos):[],
      view: 'SHOW_ALL'
    }
    this.addTodos = this.addTodos.bind(this);
    this.modifyTodo = this.modifyTodo.bind(this);   
    this.changeView = this.changeView.bind(this); 
    this.handleDel = this.handleDel.bind(this);
  }
  //添加一个
  addTodos(item) {
    var that = this;
    that.state.todos.push(item)
    localStorage.setItem("todos",JSON.stringify(that.state.todos));
    this.setState({
        todos:that.state.todos
    })
  }
  //修改一个
  modifyTodo(val,index,name) {
    console.log(val,index)
    var todo = this.state.todos.find((item)=>item.id == index);
    todo[name] = val;
    localStorage.setItem("todos",JSON.stringify(this.state.todos));
    this.setState({
      todos:this.state.todos
    })
  }
  //下面状态改变
  changeView(view){
    this.setState({
      view:view
    })
  }
  //删除一个
  handleDel(todo) {
    var todos = this.state.todos;
    todos.forEach((item,index)=>{
      if(item.id == todo.id) {
        todos.splice(index,1)
      }
    })
    localStorage.setItem("todos",JSON.stringify(this.state.todos));
    this.setState({
      todos:todos
    })
  }

  render() {
    var that = this;
    return (
      <div className="todos">
        <h1 className="title">todos</h1>
        <Header addTodos={that.addTodos} todos={that.state.todos}></Header>
        <TodoList handleDel={this.handleDel} view={that.state.view} modifyTodo={that.modifyTodo} todos={that.state.todos}></TodoList>
        <Footer todos={that.state.todos} changeView={that.changeView}></Footer>
      </div>
    );
  }
}