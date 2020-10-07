import React from 'react';
import Task from './Task';

export default class Planner extends React.Component {
    render() {
        return this.props.tasks.map((task) => {
            return <Task key={task.id} task={task} />
        })
    }
}
