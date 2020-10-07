import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Task extends Component {
    getStyle = (completed) => ({
        textDecoration: this.props.task.completed ? 'line-through' : 'none',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
    });

    markComplete = (e) => console.log(e.target.value)

    render() {
        const { id, title } = this.props.task
        return (
            <div style={this.getStyle(this.props.completed)}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title}</p>
            </div>
        );
    }
}

Task.propTypes = { task: PropTypes.object.isRequired, markComplete: PropTypes.func.isRequired };

export default Task;
