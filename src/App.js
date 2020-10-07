import React from 'react';
import './App.css';
import Planner from './components/Planner';

class App extends React.Component {
  state = {
    tasks: [
      { id: 1, title: 'Feed Franklin', completed: true },
      { id: 2, title: 'Laundry', completed: false },
      { id: 3, title: 'Clean kitchen', completed: false },
    ],
  };

  markComplete = (e) => {
    console.log('hi')
  }

  render() {
    return (
      <div className="App">
        <Planner tasks={this.state.tasks} markComplete={this.markComplete}></Planner>
      </div>
    );
  }
}

export default App;
