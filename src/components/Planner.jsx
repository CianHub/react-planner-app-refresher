import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

export default class Planner extends React.Component {
  render() {
    return this.props.tasks.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          markComplete={this.props.markComplete}
          deleteTask={this.props.deleteTask}
        />
      );
    });
  }
}

Planner.propTypes = {
  tasks: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
