import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntRate from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = { value: 3 };
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-rate">
        <article class="message is-info">
          <div class="message-header">Value changed:</div>
          <div class="message-body">
            <ReactAntRate
              className="mb-5"
              value={this.state.value}
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
            />
          </div>
        </article>

        <article class="message">
          <div class="message-header">Value changed:</div>
          <div class="message-body">{JSON.stringify(this.state.value)}</div>
        </article>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
