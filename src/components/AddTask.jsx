import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  state = {
    title: '',
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addNewTask.bind(this, {
      title: this.state.title,
      completed: false,
    })();
  };

  change = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form style={{ display: 'flex', padding: '5px' }} onSubmit={this.submit}>
        <input
          type="text"
          name="title"
          placeholder="Add Task"
          style={{ flex: 1 }}
          onChange={this.change}
          value={this.state.title}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

AddTask.propTypes = {
  addNewTask: PropTypes.func.isRequired,
};
