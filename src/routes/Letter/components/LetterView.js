import React from 'react';
import _ from 'lodash';

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
        <span className='letter__selected'>{ this.state.letter }</span>
        <button className='button letter__button'
          onClick={ this.handleClick }>
            Another
        </button>

        <label htmlFor='letter__exclude'>
          Letters to exclude
          <input className='letter__exclude'
            onChange={ this.handleChange }
            placeholder='Letters to exclude' />
        </label>
      </div>
    );
  }
};