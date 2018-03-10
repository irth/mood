import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MoodChooser from './MoodChooser';
import MoodHistory from './MoodHistory';

export default class MainView extends Component {
  static propTypes = {
    primaryKey: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        mood: PropTypes.number,
        time: PropTypes.number,
      }),
    ).isRequired,
    onMoodCreated: PropTypes.func.isRequired,
    onMoodEntryClick: PropTypes.func.isRequired,
  };

  onMoodSelected = mood =>
    this.props.onMoodCreated({
      id: this.props.primaryKey,
      time: Date.now(),
      mood,
    });

  render() {
    return (
      <div className="MainView App">
        <div className="upperCard">
          <div className="HowAreYou">How are you feeling right now?</div>
          <MoodChooser onSelected={this.onMoodSelected} />
        </div>
        <MoodHistory
          history={this.props.history}
          onMoodEntryClick={this.props.onMoodEntryClick}
        />
      </div>
    );
  }
}
