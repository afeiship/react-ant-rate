import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Rate } from 'antd';

const CLASS_NAME = 'react-ant-rate';

export default class ReactAntRate extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.number,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    onChange({ target: { value: inEvent } });
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <Rate
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}

