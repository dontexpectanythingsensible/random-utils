import React from 'react';
import _ from 'lodash';

import Ad from 'components/Ad';
import Slider from 'components/Slider';

export default class ListView extends React.Component {
  state = {
    text: [],
    amount: 1,
    selected: []
  }

  handleTextChange = e => {
    this.setState({ text: e.target.value.split('\n') });
  }

  randomise = e => {
    this.setState({ selected: _.shuffle(this.state.text).slice(0, this.state.amount) });
  }

  handleChange = e => {
    const val = +e.target.value;
    this.state[e.target.name] = +val;
    this.randomise();
  }

  renderItem (item, i) {
    return (
      <div className='list__item' key={ i }>{ item }</div>
    );
  }

  render () {
    return (
      <div className='list__view'>
        <Ad />

        <textarea className='list__input'
          placeholder='One entry per line'
          onChange={ this.handleTextChange } />

        <Slider
          label='Number to draw'
          step='1'
          min='1'
          max={ this.state.text.length || '1' }
          value={ this.state.amount }
          onChange={ this.handleChange } />

        <button className='button list__randomise'
          onClick={ this.randomise }>Draw</button>

        <p>
          <a href='https://www.jamestease.co.uk/team-generator' title='Random team generator' className='nav__external'>
            Split into random teams
          </a>
        </p>

        { this.state.selected.map(this.renderItem) }
      </div>
    );
  }
}
