import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types'

export default class Planner extends React.Component {
    markComplete = () => {
        console.log('hi')
    }
    render() {
        return this.props.tasks.map((task) => {
            return <Task key={task.id} task={task} markComplete={this.markComplete} />
        })
    }
}

Planner.propTypes = { tasks: PropTypes.array.isRequired }
