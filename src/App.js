import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Planner from './components/Planner';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './components/About';

class App extends React.Component {
  state = {
    tasks: [
      { id: 1, title: 'Feed Franklin', completed: true },
      { id: 2, title: 'Laundry', completed: false },
      { id: 3, title: 'Clean kitchen', completed: false },
    ],
  };

  addNewTask = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { ...task, id: this.state.tasks.length + 1 },
      ],
    });
  };

  markComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: [...this.state.tasks].filter((task) => {
        if (task.id === id) {
          return false;
        }
        return true;
      }),
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            <Route
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTask addNewTask={this.addNewTask}></AddTask>
                  <Planner
                    tasks={this.state.tasks}
                    markComplete={this.markComplete}
                    deleteTask={this.deleteTask}
                  ></Planner>
                </React.Fragment>
              )}
            ></Route>
            <Route
              path="/about"
              render={(props) => (
                <React.Fragment>
                  <About></About>
                </React.Fragment>
              )}
            ></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
