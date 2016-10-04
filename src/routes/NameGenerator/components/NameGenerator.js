import React from 'react';
import { getRandomInt } from 'services/utils';

const prefixes = ["Asylum", "Bell", "Black", "Capra", "Ceaseless", "Centipede", "Chaos", "Witch", "Dragon", "Crossbreed", "Dark Sun", "Demon", "Slayer", "Executioner", "Gaping", "Gravelord", "Lord", "Iron", "Cinder", "Knight", "Father", "Abyss", "Moonlight", "Sanctuary", "Stray", "Taurus", "Armoured", "Golden", "Crystal", "Giant", "Undead", "Giant Undead", "Hellkite", "Parasitic", "Prowling", "Prince", "Grey", "Maneater", "Iron", "Paladin", "Xanthous", "Marvellous", "Big Hat", "Black Iron", "Crestfallen", "Darkstalker", "Gravelord", "Hawkeye", "Kingseeker", "Lord's Blade", "Stone"];
const types = ["Demon", "Gargoyle", "Dragon", "Witch", "Golem", "Knight", "Wolf", "Butcher", "Tusk", "Golem", "Rat", "Hydra", "Wall Hugger", "Prince", "Slayer", "King", "Blacksmith", "Princess", "Merchant"];
const suffixes = ["of Chaos", "of the Abyss", "of Cinder", "of Thorns", "of the Darkroot Wood", "of Astora", "of Zena", "of Oolacile", "of Vinheim", "of Sunlight", "of Carim", "of the Great Swamp", "of Thorolund", "of Izalith", "of the East", "of Catarina"];
const nicknames = ["the Scaleless", "the Great", "the Rock", "the Crow"];

export default class NameGenerator extends React.Component {
  state= {
    bossName: 'Brian'
  }

  getName = () => {
    let out;
    const name = 'Brian';

    switch (getRandomInt(1, 9)) {
      case 1:
      // prefix type
        out = `${ prefixes[getRandomInt(0, prefixes.length - 1)] } ${ types[getRandomInt(0, types.length - 1)] }`;
        break;

      // prefix name
      case 2:
        out = `${ prefixes[getRandomInt(0, prefixes.length - 1)] } ${ name }`;
        break;

      // name, type suffix
      case 4:
        out = `${ name }, ${ types[getRandomInt(0, types.length - 1)] } ${ suffixes[getRandomInt(0, suffixes.length - 1)] } `;
        break;

      // name suffix
      case 5:
        out = ` ${ name } ${ suffixes[getRandomInt(0, suffixes.length - 1)] }`;
        break;

      // name nickname suffix
      case 6:
        out = `${ name } ${ nicknames[getRandomInt(0, nicknames.length - 1)] } ${ suffixes[getRandomInt(0, suffixes.length - 1)] }`;
        break;

      // prefix type name
      case 7:
        out = `${ prefixes[getRandomInt(0, prefixes.length - 1)] } ${ types[getRandomInt(0, types.length - 1)] } ${ name }`;
        break;

      // prefix name nickname
      case 8:
        out = `${ prefixes[getRandomInt(0, prefixes.length - 1)] } ${ name } ${ nicknames[getRandomInt(0, nicknames.length - 1)] }`;
        break;

      // name nickname prefix type
      case 3:
        out = `${ name } ${ nicknames[getRandomInt(0, nicknames.length - 1)] } ${ prefixes[getRandomInt(0, prefixes.length - 1)] } ${ types[getRandomInt(0, types.length - 1)] }`;
        break;

      // prefix name, type suffix
      case 9:
        out = `${ prefixes[getRandomInt(0, prefixes.length - 1)] } ${ name }, ${ types[getRandomInt(0, types.length - 1)] } ${ suffixes[getRandomInt(0, suffixes.length - 1)] }`;
        break;
    }

    this.setState({ bossName: out });
  }

  render () {
    return (
      <div>{ this.state.bossName } <button onClick={ this.getName }>Another</button></div>
    );
  }
}
