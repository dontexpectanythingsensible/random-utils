import React from 'react';
import { getRandomInt, compareNumbers } from 'services/utils';
import Slider from 'components/Slider';

export default class LotteryView extends React.Component {
  state = {
    min: 1,
    max: 49,
    amount: 7,
    selected: []
  }

  handleChange = e => {
    let val = +e.target.value;

    if (e && e.target && e.target.name) {
      if (e.target.name === 'max' && val <= this.state.min) {
        val = this.state.min + 1;
      }

      this.state[e.target.name] = +val;
      this.generate();
    }
  }

  generate = () => {
    let newSelection = [];
    for (let i = 0; i < this.state.amount; i++) {
      let num = getRandomInt(this.state.min, this.state.max);

      while (newSelection.indexOf(num) >= 0) {
        num = getRandomInt(this.state.min, this.state.max);
      }
      newSelection.push(num);
    }

    this.setState({ selected: newSelection });
  }

  componentWillMount () {
    this.generate();
  }

  renderNumber (num, i) {
    return (
      <span className='lottery__number' key={ i }>{ num }</span>
    );
  }

  render () {
    return (
      <div className='lottery'>
        <form>
          <label htmlFor='min'>Min</label>
          <input type='number'
            name='min'
            step='1'
            min='-500'
            max='500'
            placeholder='0'
            onChange={ this.handleChange }
            value={ this.state.min } />

          <label htmlFor='max'>Max</label>
          <input type='number'
            name='max'
            step='1'
            min='-500'
            max='500'
            placeholder='500'
            onChange={ this.handleChange }
            value={ this.state.max } />

          <Slider
            label='Amount'
            step='1'
            min='1'
            max='20'
            value={ this.state.amount }
            onChange={ this.handleChange } />
        </form>

        <button className='button lottery__button' onClick={ this.generate }>Generate</button>

        <span className='lottery__numbers'>{ this.state.selected.sort(compareNumbers).map(this.renderNumber) }</span>

        <p className='lottery_info'>This will generate the specified number of random numbers between
        the set minimum and maximum (inclusive), with no duplicates.</p>
      </div>
    );
  }
}
