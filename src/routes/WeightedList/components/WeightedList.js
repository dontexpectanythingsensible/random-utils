import React from 'react';
import _ from 'lodash';

import Ad from 'components/Ad';
import Slider from 'components/Slider';
import ListItem from 'components/List';

export default class ListView extends React.Component {
  state = {
    items: [{ id: 1, text: '', number: 1 }],
    amount: 1,
    selected: [],
    idCount: 1
  }

  handleTextChange = updated => {
    const items = _.clone(this.state.items);
    let item = items.filter(item => item.id === updated.id)[0];
    item.number = updated.number;
    item.text = updated.text;

    this.setState({ items });
  }

  randomise = e => {
    const weighted = [];
    this.state.items.forEach(item => {
      for (let i = 0; i < item.number; i++) {
        weighted.push(item.text);
      }
    });

    // shuffle then remove duplicates
    const shuffled = _.uniq(_.shuffle(weighted));
    this.setState({ selected: shuffled.slice(0, this.state.amount) });
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

  addItem = () => {
    this.state.idCount++;

    const item = {
      id: this.state.idCount,
      text: '',
      number: 1
    };
    const items = _.clone(this.state.items);
    items.push(item);
    this.setState({ items: items });
  }

  removeItem = id => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
  }

  renderListItems () {
    const items = [];

    for (let i = 1; i <= this.state.idCount; i++) {
      const item = this.state.items.filter(item => item.id === i);
      if (item.length) {
        items.push(
          <ListItem { ...item[0] }
            onChange={ this.handleTextChange }
            onRemove={ this.removeItem }
            key={ i } />
        );
      }
    }

    return items;
  }

  render () {
    return (
      <div className='list__view'>
        <Ad />

        <p className='about'>This draws items from a list based on weightings; for instance, an item
        with weighting '3' is three times as likely to be drawn as an item with weighting '1'.</p>

        { this.renderListItems() }
        <button onClick={ this.addItem } className='button button--add'>Add another</button>

        <Slider
          label='Number to draw'
          step='1'
          min='1'
          max={ this.state.items.length || '1' }
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
