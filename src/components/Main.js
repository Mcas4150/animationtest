import React, { Component } from 'react';
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <PrimaryContainer/>
        <SecondaryContainer/>
      </div>
    )
  }
}

