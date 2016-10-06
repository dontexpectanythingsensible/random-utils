import React from 'react';
import { getRandomInt } from 'services/utils';
import Ad from 'components/Ad';

const strings = [
  'It is certain',
  'Absolutely',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
];

export default class ListView extends React.Component {
  state = {
    text: ''
  }

  componentWillMount () {
    this.ask();
  }

  ask = () => {
    this.setState({ text: strings[getRandomInt(0, strings.length - 1)] });
  }

  render () {
    return (
      <div className='eightball'>
        <Ad />

        <p className='list__item'>{ this.state.text }</p>

        <button className='button' onClick={ this.ask }>Ask</button>
      </div>
    );
  }
}
