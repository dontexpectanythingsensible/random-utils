import React from 'react';

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class LotteryView extends React.Component {
  state = {
    min: 0,
    max: 49,
    amount: 7,
    selected: []
  }

  handleChange = e => {
    if (e && e.target && e.target.id) {
      this.setState({ [e.target.id]: [e.target.value] });
    }
  }

  generate = () => {
    let newSelection = [];
    for (let i = 0; i < this.state.amount; i++) {
      newSelection.push(getRandomInt(this.state.min, this.state.max));
    }

    this.setState({ selected: newSelection });
  }

  render () {
    return (
      <div>
        <div>choose limit</div>
        <label htmlFor='min'>Min</label>
        <input type='number'
          id='min'
          step='1'
          min='0'
          max='500'
          placeholder='0'
          onChange={ this.handleChange }
          value={ this.state.min } />

        <label htmlFor='max'>Max</label>
        <input type='number'
          id='max'
          step='1'
          min='1'
          max='500'
          placeholder='500'
          onChange={ this.handleChange }
          value={ this.state.max } />

        <label htmlFor='amount'>Amount</label>
        <input type='number'
          id='amount'
          step='1'
          min='1'
          max='20'
          placeholder='1'
          onChange={ this.handleChange }
          value={ this.state.amount } />

        <button onClick={ this.generate }>Generate</button>

        { this.state.selected.join(' ') }
      </div>
    );
  }
}
