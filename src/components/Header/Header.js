import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export default class Header extends React.Component {
  state = {
    visible: false
  }

  toggle = () => {
    // don't use e.preventDefault since we're using this for the Link handler
    // preventDefault will stop transition
    this.setState({ visible: !this.state.visible });
  }

  render () {
    return (
      <header className='header'>
        <button className='nav__toggle' onClick={ this.toggle }>Menu</button>

        { this.state.visible
          ? <nav className='nav'>
            <ul>
              <li><button className='nav__close' onClick={ this.toggle }>Close</button></li>
              <li><IndexLink to='/' activeClassName='route--active' onClick={ this.toggle }>Letter</IndexLink></li>
              <li><Link to='/lottery' activeClassName='route--active' onClick={ this.toggle }>Lottery</Link></li>
              <li><Link to='/coin-toss' activeClassName='route--active' onClick={ this.toggle }>Coin toss</Link></li>
              <li><Link to='/dice-roll' activeClassName='route--active' onClick={ this.toggle }>Dice roll</Link></li>
              <li><Link to='/list' activeClassName='route--active' onClick={ this.toggle }>List draw</Link></li>
              <li>
                <Link to='/weighted-list' activeClassName='route--active' onClick={ this.toggle }>
                  Weighted list draw
                </Link>
              </li>
              <li>
                <Link to='/randomise-list' activeClassName='route--active' onClick={ this.toggle }>Randomise list</Link>
              </li>
              <li>
                <Link to='/dark-souls-name-generator' activeClassName='route--active' onClick={ this.toggle }>
                  Dark Souls boss name generator
                </Link>
              </li>
              <li><Link to='/about' activeClassName='route--active' onClick={ this.toggle }>About</Link></li>
              <li>
                <a href='https://jamestease.co.uk/team-generator' className='nav__external'>Random team generator</a>
              </li>
            </ul>
          </nav>
        : null
        }
      </header>
    );
  }
}
