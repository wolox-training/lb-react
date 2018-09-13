import React from 'react';

import style from './styles.scss';

export default class Square extends React.Component {
  render() {
    return (
      <button className={style.square} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
