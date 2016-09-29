import React from 'react';
import Ad from 'components/Ad';
import Slider from 'components/Slider';
import Dice from 'components/Dice';

export default class DiceView extends React.Component {
  state = {
    amount: 1
  };

  roll = () => {
    const dice = [];
    for (let i = 0; i < this.state.amount; i++) {
      // slightly unintuitive - roll again button tries to create more
      // but since they have the same key it just sends props down to
      // existing components, which calls componentWillReceiveProps
      // which then uses current state as max
      dice.push(<Dice max={ 6 } key={ i } />);
    }

    this.setState({ dice });
  }

  handleChange = e => {
    const val = +e.target.value;
    this.state[e.target.name] = +val;
    this.roll();
  }

  componentWillMount () {
    this.roll();
  }

  render () {
    return (
      <div className='dice__wrapper'>
        <Ad />

        <Slider
          label='Number of dice'
          step='1'
          min='1'
          max='10'
          value={ this.state.amount }
          onChange={ this.handleChange } />

        <button onClick={ this.roll } className='button'>Roll again</button>

        <div className='dice__output'>
          { this.state.dice.map(die => die) }
        </div>
      </div>
    );
  }
}
