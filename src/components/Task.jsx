import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Task extends Component {
    render() {
        return (
            <h3>
                {this.props.task.title}
            </h3>
        )
    }
}

Task.propTypes = { task: PropTypes.object.isRequired }

export default Task
