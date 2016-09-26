import React from 'react';

export const Slider = props => (
  <div>
    <label htmlFor='amount'>{ props.label }</label>
    <input type='range'
      name='amount'
      min={ props.min }
      max={ props.max }
      value={ props.value }
      onChange={ props.onChange } />
    <input type='number'
      name='amount'
      step={ props.step }
      min={ props.min }
      max={ props.max }
      placeholder='1'
      onChange={ props.onChange }
      value={ props.value } />
  </div>
);

Slider.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.number.isRequired,
  step: React.PropTypes.string.isRequired,
  min: React.PropTypes.string.isRequired,
  max: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};
