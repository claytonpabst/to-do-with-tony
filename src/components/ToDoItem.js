import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
  render() {
    return (
      <li>
        <h3>
          {this.props.toDoItem}
        </h3>
        <button>Details</button>
        <button>Completed</button>
        <button>Done</button>
      </li>
    );
  }
}

export default ToDoItem;