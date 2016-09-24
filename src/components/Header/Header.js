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
        <button className='nav__toggle' onClick={ this.toggle }>Nav</button>

        { this.state.visible
          ? <nav className='nav'>
              <button className='nav__close' onClick={ this.toggle }>Close</button>
              <ul>
                <li><IndexLink to='/' activeClassName='route--active' onClick={ this.toggle }>Letter</IndexLink></li>
                <li><Link to='/lottery' activeClassName='route--active' onClick={ this.toggle }>Lottery</Link></li>
                <li><Link to='/about' activeClassName='route--active' onClick={ this.toggle }>About</Link></li>
                <li><Link to='/todo' activeClassName='route--active' onClick={ this.toggle }>Todo</Link></li>
              </ul>
            </nav>
          : null
        }
      </header>
    );
  }
}