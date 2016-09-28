import React from 'react';
import { getRandomInt } from 'services/utils';

export default class Dice extends React.Component {
  static propTypes = {
    max: React.PropTypes.number
  }

  state = {
    value: 1,
    max: 1
  };

  componentWillMount () {
    this.roll(this.props.max);
    this.setState({ max: this.props.max });
  }

  componentWillReceiveProps (nextProps) {
    // this is called by diceview::roll
    // passes down next props
    const max = this.state.max || nextProps.max;
    this.roll(max);
  }

  roll (max) {
    this.setState({ value: getRandomInt(1, max) });
  }

  handleChange = e => {
    this.setState({ max: +e.target.value });
    this.roll(+e.target.value);
  }

  render () {
    return (
      <div className='dice'>
        { this.state.value }
        <input type='number'
          step='1'
          min='2'
          max='20'
          onChange={ this.handleChange }
          value={ this.state.max } />
      </div>
    );
  }
}
