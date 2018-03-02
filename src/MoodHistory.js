import React from 'react';

import MoodEmoji from './MoodEmoji';

const leftPadNum = n => `0${n}`.substr(-2);

const dateFromTimestamp = timestamp => {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${leftPadNum(date.getMonth() + 1)}-${leftPadNum(
    date.getDate(),
  )}`;
};

const timeFromTimestamp = timestamp => {
  const date = new Date(timestamp);
  return `${leftPadNum(date.getHours())}:${leftPadNum(date.getMinutes())}`;
};

export default ({history, onMoodEntryClick}) => (
  <div className="History">
    {history.map(entry => (
      <div
        onClick={() => onMoodEntryClick(entry.id)}
        role="button"
        key={entry.id}
        className="MoodEntry">
        <div className="Time">
          <div className="Date">{dateFromTimestamp(entry.time)}</div>
          <div className="Time">{timeFromTimestamp(entry.time)}</div>
        </div>
        <div className="Score">
          <div>
            <MoodEmoji mood={entry.mood} />
          </div>
          <div>{entry.mood}/5</div>
        </div>
      </div>
    ))}
  </div>
);
