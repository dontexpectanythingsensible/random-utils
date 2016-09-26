/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router';

export const AboutView = () => (
  <article className='about'>
    <h1>About</h1>
    <p>This site provides a selection of utilities for playing games; it was created by <a href='https://www.jamestease.co.uk' title='James Tease'>James Tease</a> (<a href='https://twitter.com/whostolemyhat' title='Contact James on Twitter'>@whostolemyhat</a>),
    a Javascript and Python consultant. The site is built with React and ES6.
    </p>

    <h2>Randomness</h2>
    <p>
      The <Link to='/'>random letter picker</Link> uses a <a href='https://bost.ocks.org/mike/shuffle/'>Fisher-Yates shuffle</a> which should avoid bias.
      However, all the random functions in the site use Javascript's built-in <code>Math.random()</code> function; this means they're fine for picking random items, but should not
      be used for any security code (ie cryptography). See <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random'>MDN for more info</a>.
    </p>
  </article>
);

export default AboutView;
