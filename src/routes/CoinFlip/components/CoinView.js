import React from 'react';
import { getRandomInt } from 'services/utils';
import Coin from 'components/Coin';
import Slider from 'components/Slider';
import Ad from 'components/Ad';

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
      // sync
      this.state[e.target.name] = +val;
      this.flip();
    }
  }

  renderCoin (val, i) {
    return (
      <Coin value={ val } key={ i } />
    );
  }

  render () {
    const headCount = this.state.coins.reduce(function (count, coin) {
      // console.log(prev, curr);
      if (coin === 'heads') {
        return count + 1;
      }

      return count;
    }, 0);

    return (
      <div className='coin__view'>
        <Ad />

        <Slider
          label='Amount'
          step='1'
          min='1'
          max='20'
          value={ this.state.amount }
          onChange={ this.handleChange } />
        <button className='button' onClick={ this.flip }>Again</button>

        { this.state.amount > 3
        ? <div className='coin__count'>
          { `heads: ${ headCount }, tails: ${ this.state.coins.length - headCount }` }
        </div>
         : null
       }

        <div className='coins__wrapper'>{ this.state.coins.map(this.renderCoin) }</div>

      </div>
    );
  }
}
