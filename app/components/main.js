import React, {Component} from 'react';
import Header from './header';
import TodoList from './todos';
import Footer from './footer';
import './main.scss';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          name: '吃饭',
          isDone: false
        }, {
          id: 2,
          name: '睡觉',
          isDone: false
        }, {
          id: 3,
          name: '打豆豆',
          isDone: false
        }
      ],
      view: 'SHOW_ALL'
    }
    this.addTodos = this.addTodos.bind(this);
    this.modifyTodo = this.modifyTodo.bind(this);   
    this.changeView = this.changeView.bind(this); 
  }
  //添加一个
  addTodos(item) {
    var that = this;
    that.state.todos.push(item)
    this.setState({
        todos:that.state.todos
    })
  }
  //修改一个
  modifyTodo(todo,index,name) {
    console.log(todo,index)
    this.state.todos[index-1][name] = todo;
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

  render() {
    var that = this;
    return (
      <div className="todos">
        <h1 className="title">todos</h1>
        <Header addTodos={that.addTodos} todos={that.state.todos}></Header>
        <TodoList view={that.state.view} modifyTodo={that.modifyTodo} todos={that.state.todos}></TodoList>
        <Footer todos={that.state.todos} changeView={that.changeView}></Footer>
      </div>
    );
  }
}