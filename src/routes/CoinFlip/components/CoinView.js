import React from 'react';
import { getRandomInt } from 'services/utils';
import Coin from 'components/Coin';
import Slider from 'components/Slider';

export default class CoinView extends React.Component {
  state = {
    coins: [],
    amount: 1
  }

  flip = () => {
    const coins = [];
    for (let i = 0; i < this.state.amount; i++) {
      coins.push(getRandomInt(0, 1) === 1 ? 'heads' : 'tails');
    }

    this.setState({ coins });
  }

  componentWillMount () {
    this.flip();
  }

  handleChange = e => {
    let val = +e.target.value;

    if (e && e.target && e.target.name) {
      this.setState({ [e.target.name]: +val });
    }
  }

  renderCoin (val, i) {
    return (
      <Coin value={ val } key={ i } />
    );
  }

  render () {
    return (
      <div className='coin__view'>
        <Slider
          label='Amount'
          step='1'
          min='1'
          max='20'
          value={ this.state.amount }
          onChange={ this.handleChange } />
        <button className='button' onClick={ this.flip }>Again</button>

        <div className='coins__wrapper'>{ this.state.coins.map(this.renderCoin) }</div>

      </div>
    );
  }
}
