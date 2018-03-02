import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class EntryView extends Component {
  static propTypes = {
    mood: PropTypes.number,
    time: PropTypes.number,
  };

  render() {
    return (
      <div>
        <h1>{this.props.mood}</h1>
        <h3>{this.props.time}</h3>
      </div>
    );
  }
}
