import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MoodEmoji from './MoodEmoji';

export default class EntryView extends Component {
  static propTypes = {
    mood: PropTypes.number,
    time: PropTypes.number,
    onNoteChange: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onBackClick: PropTypes.func.isRequired,
  };

  render() {
    const {
      mood,
      time,
      note,
      onNoteChange,
      onDeleteClick,
      onBackClick,
    } = this.props;
    const date = new Date(time);

    return (
      <div className="EntryView App">
        <div
          className="upperCard"
          style={{textAlign: 'center', padding: '.5em'}}>
          <div>
            <MoodEmoji mood={mood} size={64} />
          </div>
          <div style={{fontSize: '1.2em'}}>
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'stretch',
            margin: '.5em',
          }}>
          <textarea
            placeholder="Notes..."
            onChange={event => onNoteChange(event.target.value)}
            value={note}
            style={{
              flex: 1,
              padding: 0,
              margin: 0,
              border: 0,
              outline: 0,
            }}
          />
          <div
            style={{
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <a style={{color: '#1E90FF'}} onClick={() => onBackClick()}>
              back
            </a>
            <a style={{color: 'red'}} onClick={() => onDeleteClick()}>
              delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}
