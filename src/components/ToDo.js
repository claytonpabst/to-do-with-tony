import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js';
import './ToDo.css';

class ToDo extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDoList: [
        "Clean the car",
        "Trash",
        "Mow the lawn",
      ]
    }
  }

  render() {
    return (
      <div className="to-do_to-do-list-wrapper">
        <ul>
          {this.state.toDoList.map((item, i) => {
            return(
              <ToDoItem 
                toDoItem = {this.state.toDoList[i]}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default ToDo;