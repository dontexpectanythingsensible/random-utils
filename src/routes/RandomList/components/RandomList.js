import React from 'react';
import _ from 'lodash';

import Ad from 'components/Ad';

export default class RandomList extends React.Component {
  state = {
    text: [],
    selected: []
  }

  handleTextChange = e => {
    this.setState({ text: e.target.value.split('\n') });
  }

  randomise = e => {
    this.setState({ selected: _.shuffle(this.state.text) });
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

        <p className='about'>Enter a list in the text area, one item per line; the list will then be randomised.</p>

        <textarea className='list__input list__input--randomise'
          placeholder='One entry per line'
          onChange={ this.handleTextChange } />

        <button className='button list__randomise'
          onClick={ this.randomise }>Randomise</button>

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
