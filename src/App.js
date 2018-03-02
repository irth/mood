import React, {Component} from 'react';
import './App.css';

import MainView from './MainView';
import EntryView from './EntryView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.loadState(),
      view: {name: 'MainView', args: null},
    };
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
    const {id, history} = this.state;
    window.localStorage.setItem(
      'state',
      JSON.stringify({
        id,
        history,
      }),
    );
  }

  onMoodCreated = moodEntry => {
    this.setState(
      oldState => ({
        history: [moodEntry, ...oldState.history],
        id: oldState.id + 1,
      }),
      () => this.saveState(),
    );
  };

  render() {
    const {view} = this.state;

    switch (view.name) {
      case 'EntryView':
        return (
          <EntryView {...this.state.history.find(e => e.id == view.args.id)} />
        );

      case 'MainView':
      default:
        return (
          <MainView
            primaryKey={this.state.id}
            history={this.state.history}
            onMoodCreated={this.onMoodCreated}
            onMoodEntryClick={id =>
              this.setState({view: {name: 'EntryView', args: {id}}})
            }
          />
        );
    }
  }
}
export default App;
