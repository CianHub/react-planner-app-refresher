import React, { Component } from 'react';

export default class AddTask extends Component {
  render() {
    return (
      <form>
        <input type="text" name="title" placeholder="" />
      </form>
    );
  }
}
