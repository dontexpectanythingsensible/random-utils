import React from 'react';
import classnames from 'classnames';

export default class CategoryList extends React.Component {
  state = {
    visible: false
  }

  toggleVisibility = e => {
    this.setState({ visible: !this.state.visible });
  }

  render () {
    const classes = classnames('toggle', {
      'toggle--open': this.state.visible
    });

    return (
      <div className='categories'>
        <h1 className='categories__heading' onClick={ this.toggleVisibility }>
          Categories <i className={ classes }>&#x25bc;</i>
        </h1>
        { this.state.visible
        ? <ul>
          <li>Sports star (surname)</li>
          <li>Body of water</li>
          <li>Cheese</li>
          <li>A boy's name</li>
          <li>A girl's name</li>
          <li>A film</li>
          <li>Insect</li>
          <li>Things that grow</li>
          <li>Fruit</li>
          <li>Musical instrument</li>
          <li>Colour</li>
          <li>A fish</li>
          <li>Country</li>
          <li>Tools</li>
          <li>Plant</li>
          <li>A city</li>
          <li>Hobbies</li>
          <li>Parts of the body</li>
          <li>Disease</li>
          <li>Things in the sky</li>
          <li>A play</li>
          <li>Things with tails</li>
          <li>Spice or herb</li>
          <li>Cooking utensil</li>
          <li>Author</li>
          <li>Vegetable</li>
          <li>Card game</li>
          <li>Board game</li>
          <li>Things found in a hospital</li>
          <li>Word ending with 'n'</li>
          <li>Word with double letters</li>
          <li>Food eaten raw</li>
          <li>Things you store items in</li>
        </ul>
        : null }
      </div>
    );
  }
}
