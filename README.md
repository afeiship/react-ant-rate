# react-ant-rate
> Rate for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-rate
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | number | false    | -       | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-rate/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-rate/dist/style.scss";

  // customize your styles:
  $react-ant-rate-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntRate from '@jswork/react-ant-rate';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-rate/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-rate/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-rate
[version-url]: https://npmjs.org/package/@jswork/react-ant-rate

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-rate
[license-url]: https://github.com/afeiship/react-ant-rate/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-rate
[size-url]: https://github.com/afeiship/react-ant-rate/blob/master/dist/react-ant-rate.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-rate
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-rate
