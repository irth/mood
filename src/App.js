import React, {Component} from 'react';
import './App.css';

import MoodChooser from './MoodChooser';
import MoodHistory from './MoodHistory';

const createMood = (id, mood) => ({id, mood, time: Date.now()});

class App extends Component {
  constructor() {
    super();
    this.state = this.loadState();
  }

  loadState() {
    let state = null;
    try {
      state = JSON.parse(window.localStorage.getItem('state'));
    } catch (e) {
      state = null;
    }

    return (
      state || {
        history: [],
        id: 0,
      }
    );
  }

  saveState() {
    window.localStorage.setItem('state', JSON.stringify(this.state));
  }

  onMoodSelected = which => {
    this.setState(
      oldState => ({
        history: [createMood(oldState.id, which), ...oldState.history],
        id: oldState.id + 1,
      }),
      () => this.saveState(),
    );
  };

  render() {
    return (
      <div className="App">
        <div className="upperCard">
          <div className="HowAreYou">How are you feeling right now?</div>
          <MoodChooser onSelected={this.onMoodSelected} />
        </div>
        <MoodHistory history={this.state.history} />
      </div>
    );
  }
}
export default App;
