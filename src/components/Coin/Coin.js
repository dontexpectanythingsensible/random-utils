import React from 'react';

export const Coin = props => (
  <span className={ `coin coin--${ props.value }` }>{ props.value }</span>
);

Coin.propTypes = {
  value: React.PropTypes.string.isRequired
};
