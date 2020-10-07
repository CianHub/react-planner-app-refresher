import React, { Component } from 'react';

export default class AddTask extends Component {
  state = {
    field: '',
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addTask.bind(this, {
      title: this.state.title,
      completed: false,
    });
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
        <input type="submit" className="btn btn-primary" value="submit"></input>
      </form>
    );
  }
}
