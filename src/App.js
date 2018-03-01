import React, {Component} from 'react';
import './App.css';

import {Twemoji} from 'react-emoji-render';

const EmojiButton = ({onClick, children}) => (
  <a onClick={onClick} className="bigEmoji">
    <Twemoji text={children} />
  </a>
);

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

const moodEmojis = [
  '\u{1F636}',
  '\u{1F61E}',
  '\u{1F610}',
  '\u{1F60A}',
  '\u{1F604}',
];

const createMood = (id, mood) => ({id, mood, time: Date.now()});

class App extends Component {
  constructor() {
    super();
    const defaultState = {
      history: [],
      id: 0,
    };

    const oldState = window.localStorage.getItem('state');
    if (oldState != null) {
      try {
        this.state = JSON.parse(oldState);
      } catch (e) {
        this.state = defaultState;
      }
    } else {
      this.state = defaultState;
    }
  }

  onMoodClicked(which) {
    this.setState(
      oldState => ({
        history: [createMood(oldState.id, which), ...oldState.history],
        id: oldState.id + 1,
      }),
      () => {
        window.localStorage.setItem('state', JSON.stringify(this.state));
      },
    );
  }

  render() {
    return (
      <div className="App">
        <div className="upperCard">
          <div className="HowAreYou">How are you feeling right now?</div>
          <div className="Chooser">
            <EmojiButton onClick={() => this.onMoodClicked(1)}>😶</EmojiButton>
            <EmojiButton onClick={() => this.onMoodClicked(2)}>😞</EmojiButton>
            <EmojiButton onClick={() => this.onMoodClicked(3)}>😐</EmojiButton>
            <EmojiButton onClick={() => this.onMoodClicked(4)}>😊</EmojiButton>
            <EmojiButton onClick={() => this.onMoodClicked(5)}>😄</EmojiButton>
          </div>
        </div>
        <div className="Split" />
        <div className="History">
          {this.state.history.map(entry => (
            <div key={entry.id} className="MoodEntry">
              <div className="Time">
                <div className="Date">{dateFromTimestamp(entry.time)}</div>
                <div className="Time">{timeFromTimestamp(entry.time)}</div>
              </div>
              <div className="Score">
                <div>
                  <Twemoji
                    text={moodEmojis[entry.mood - 1]}
                    style={{fontSize: 32}}
                  />
                </div>
                <div>{entry.mood}/5</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
