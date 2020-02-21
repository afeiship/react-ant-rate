# react-ant-rate
> Rate for react.

## installation
```shell
npm install -S @feizheng/react-ant-rate
```

## update
```shell
npm update @feizheng/react-ant-rate
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | number | -       | Default value.                        |
| onChange  | func   | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-rate/dist/style.scss";

  // customize your styles:
  $react-ant-rate-options: ()
  ```
2. import js
  ```js
  import ReactAntRate from '@feizheng/react-ant-rate';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactAntRate />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-rate/
