import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const TodoItems = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Organize Closet",
    id: 2,
    completed: false
  },
  {
    task: "Fill out Registration Form",
    id: 3,
    completed: false
  },
  {
    task: "Return Items to Store",
    id: 4,
    completed: false
  },
  {
    task: "Pick Up Groceries",
    id: 5,
    completed: false
  },
  {
    task: "Finalize Presentation",
    id: 6,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      TodoItems
    };
  }

  toggleCompleted = itemId => {
    console.log('km: App.js: App: toggleCompleted: itemId: ', itemId);
    this.setState({
      TodoItems: this.state.TodoItems.map(item => {
        if (item.id === itemId) {    // If 'itemId' is, in fact, the item you are looking for (via item.id)
          return {    // Then create a new item with the completed toggle
            ...item, // <--- This creates a new object based on the key/values of existing object
            completed: !item.completed
          };
        }
        return item; // If not, just return the item because we don't need that item
      })
    });
  };  // A new grocery list is created in a new object that gets passed in setState.
      // setState will recognize that the components that are interested in this part of the state, it needs to re-render and do things differently.

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoitems={this.state.TodoItems} 
          toggleCompleted={this.toggleCompleted} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
