import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>toggle is Show</button>
        {this.state.isShow === true ? <Counter /> : null}
      </div >
    );
  }
}

export default App;