import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete } from '../actions'

class TodoList extends React.Component {


  render() {
    console.log(this.props.todos)
    return (
      <div>
        {this.props.todos.map((todo, id) => {
          return (
            <div key={todo.id}>
              <button type="button" onClick={() => this.props.toggleComplete(todo.id)}>Complete</button>{todo.newItem}
            </div>
          )
        })}
      </div>
    )
  }


}

const mapStateToProp = (state) => {
  // console.log(state, 'state');
  return {
    todos: state.todos

  }

}

const mapDispatchToProps = {
  toggleComplete: toggleComplete

}


export default connect(mapStateToProp, mapDispatchToProps)(TodoList)