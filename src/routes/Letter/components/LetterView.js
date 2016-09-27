import React from 'react';
import _ from 'lodash';
import Ad from 'components/Ad';

import CategoryList from 'components/CategoryList';

// TODO: other alphabets

export default class LetterView extends React.Component {
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  state = {
    excluded: []
  };

  handleChange = e => {
    let excluded = e.target.value;
    excluded = excluded
                .replace(/[^A-Za-z]/g, '')
                .split('')
                .map(letter => letter.toLowerCase());
    this.setState({ excluded });
  }

  handleClick = () => {
    this.shuffle();
  }

  shuffle () {
    const letters = this.letters.filter(letter => this.state.excluded.indexOf(letter) < 0);
    const letter = _.shuffle(letters)[0];
    this.setState({ letter });
  }

  componentWillMount () {
    this.shuffle();
  }

  render () {
    return (
      <div className='letter__wrapper'>
        <Ad />

        <form className='form letter__options'>
          <label htmlFor='letter__exclude'>
            Letters to exclude
          </label>
          <input className='letter__exclude'
            type='text'
            onChange={ this.handleChange }
            placeholder='q, x, y' />
        </form>
        <button className='button letter__button'
          onClick={ this.handleClick }>
            Another
        </button>

        <span className='letter__selected'>{ this.state.letter }</span>

        <CategoryList />
      </div>
    );
  }
};
