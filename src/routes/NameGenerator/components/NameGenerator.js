import React from 'react';
import { getRandomInt } from 'services/utils';
import Ad from 'components/Ad';

/* eslint-disable max-len */
const prefixes = ['Asylum', 'Bell', 'Black', 'Capra', 'Ceaseless', 'Centipede', 'Chaos', 'Crossbreed', 'Dark Sun', 'Slayer', 'Executioner', 'Gaping', 'Gravelord', 'Iron', 'Cinder', 'Father', 'Abyss', 'Moonlight', 'Sanctuary', 'Stray', 'Taurus', 'Armoured', 'Golden', 'Crystal', 'Giant', 'Undead', 'Giant Undead', 'Hellkite', 'Parasitic', 'Prowling', 'Prince', 'Grey', 'Maneater', 'Iron', 'Paladin', 'Xanthous', 'Marvellous', 'Big Hat', 'Black Iron', 'Crestfallen', 'Darkstalker', 'Gravelord', 'Hawkeye', 'Kingseeker', 'Lord\'s Blade', 'Stone', 'Silent', 'Belfry', 'Captain', 'Emerald', 'Grave Warden', 'Lonesome', 'Manscorpion', 'Hag', 'Mild Mannered', 'Royal', 'Sorcerer', 'Sparkling', 'Steady Hand', 'Old', 'Ruin', 'Old Iron', 'Covetous', 'Baleful', 'Prowling', 'Ancient', 'Burnt', 'Slumbering', 'Ivory', 'Fume', 'Sir', 'Nameless', 'Pilgrim', 'Jester', 'Ashen', 'Abbess', 'Rapacious', 'Drifter', 'Woodland Child', 'Peculiar', 'Holy', 'Yellowfinger', 'Longfinger', 'Knight-Slayer', 'Curse-Rotted', 'Deacon', 'High Lord', 'Old Demon', 'Pontiff', 'Boreal', 'Unbreakable', 'Ringfinger'];
const types = ['Demon', 'Gargoyle', 'Dragon', 'Witch', 'Golem', 'Knight', 'Wolf', 'Butcher', 'Tusk', 'Golem', 'Rat', 'Hydra', 'Wall Hugger', 'Prince', 'Slayer', 'King', 'Blacksmith', 'Princess', 'Merchant', 'Scholar', 'Oracle', 'Guard', 'Captain', 'Chancellor', 'Herald', 'Housekeeper', 'Laddersmith', 'Manscorpion', 'Warrior', 'Trader', 'Lord', 'Sentinel', 'Queen', 'Ogre', 'Denizen', 'Seeker', 'Watcher', 'Devourer', 'Outrider Knight', 'High Priestess', 'Mother'];
const suffixes = ['of Chaos', 'of the Abyss', 'of Cinder', 'of Thorns', 'of the Darkroot Wood', 'of Astora', 'of Zena', 'of Oolacile', 'of Vinheim', 'of Sunlight', 'of Carim', 'of the Great Swamp', 'of Thorolund', 'of Izalith', 'of the East', 'of Catarina', 'of the First Sin', 'of Jugo', 'of Mirrah', 'of Lanafir', 'of Olaphis', 'of Song', 'of Londor', 'of the Spurned', 'of the Sunless Realms', 'of Carim', 'of the Boreal Valley', 'of the Deep', 'of Lothric Castle', 'of Courland', 'of Rebirth'];
const nicknames = ['the Scaleless', 'the Great', 'the Rock', 'the Crow', 'the Cartographer', 'the Wanderer', 'the Pardoner', 'the Outcast', 'the Armourer', 'the Crestfallen', 'the Lost', 'the Ruined', 'the Baleful', 'the King\'s Pet', 'the Squalid', 'the Explorer', 'the Butcher', 'the Deserter', 'the Hushed', 'the Giant', 'the Consumed'];
/* eslint-enable max-len */

export default class NameGenerator extends React.Component {
  state= {
    name: 'Brian',
    bossName: ''
  }

  componentWillMount () {
    this.getName();
  }

  handleChange = e => {
    let val = e.target.value;
    if (val === '') {
      val = 'Brian';
    }

    this.setState({ name: e.target.value });
  }

  getName = () => {
    let out;
    const name = this.state.name;

    const prefix = prefixes[getRandomInt(0, prefixes.length - 1)];
    const type = types[getRandomInt(0, types.length - 1)];
    const nickname = nicknames[getRandomInt(0, nicknames.length - 1)];
    const suffix = suffixes[getRandomInt(0, suffixes.length - 1)];

    switch (getRandomInt(1, 10)) {
      case 1:
      // prefix type
        out = `${ prefix } ${ type }`;
        break;

      // prefix name
      case 2:
        out = `${ prefix } ${ name }`;
        break;

      // name nickname prefix type
      case 3:
        out = `${ name } ${ nickname }, ${ prefix } ${ type }`;
        break;

      // name, type suffix
      case 4:
        out = `${ name }, ${ type } ${ suffix } `;
        break;

      // name suffix
      case 5:
        out = `${ name } ${ suffix }`;
        break;

      // name nickname suffix
      case 6:
        out = `${ name } ${ nickname } ${ suffix }`;
        break;

      // prefix type name
      case 7:
        out = `${ prefix } ${ type } ${ name }`;
        break;

      // prefix name nickname
      case 8:
        out = `${ prefix } ${ name } ${ nickname }`;
        break;

      // prefix name, type suffix
      case 9:
        out = `${ prefix } ${ name }, ${ type } ${ suffix }`;
        break;

      // name nickname type
      case 10:
        out = `${ name }, ${ nickname } ${ type }`;
        break;

      // name type
      case 11:
        out = `${ type } ${ name }`;
        break;
    }

    this.setState({ bossName: out });
  }

  render () {
    return (
      <div className='names'>
        <Ad />

        <input type='text' name='name' placeholder='Brian' value={ this.state.name } onChange={ this.handleChange } />
        <button onClick={ this.getName } className='button'>Another</button>

        <p className='list__item'>{ this.state.bossName }</p>
      </div>
    );
  }
}
