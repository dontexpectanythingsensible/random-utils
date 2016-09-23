import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/letter' activeClassName='route--active'>Letter</Link>
    {' · '}
    <Link to='/lottery' activeClassName='route--active'>Lottery</Link>
    {' · '}
    <Link to='/todo' activeClassName='route--active'>Todo</Link>
  </div>
);

export default Header;
