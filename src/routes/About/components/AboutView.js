/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router';

export const AboutView = () => (
  <article className='about'>
    <h1>About</h1>
    <p>This site provides a selection of utilities for playing games; it was created by <a href='https://www.jamestease.co.uk' title='James Tease'>James Tease</a> (<a href='https://twitter.com/whostolemyhat' title='Contact James on Twitter'>@whostolemyhat</a>),
    a Javascript and Python consultant. The site is built with React and ES6.
    </p>

    <h2>Random letter picker</h2>
    <p>
      The <Link to='/'>random letter picker</Link> uses a <a href='https://bost.ocks.org/mike/shuffle/'>Fisher-Yates shuffle</a> which should avoid bias.
      However, all the random functions in the site use Javascript's built-in <code>Math.random</code> function; this means they're fine for picking random items, but should not
      be used for any security code (ie cryptography). See <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random'>MDN for more info</a>.
    </p>

    <h2>Dark Souls name generator</h2>
    <p>The <Link to='/dark-souls-name-generator'>Dark Souls name generator</Link> uses words and phrases from enemies, bosses and other NPCs from the three Dark Souls games, so there may be minor spoilers.</p>

    <h2>Lottery numbers generator</h2>
    <p>The <Link to='lottery'>lottery numbers generator</Link> is based on Javascript's built-in <code>Math.random</code> function, so should be sufficiently random for lotteries.
    It generates between one and twenty random integers between -500 and 500.</p>

    <h2>Coin toss</h2>
    <p>The <Link to='coin-toss'>coin toss generator</Link> also uses <code>Math.random</code>, and creates between one and twenty random coin tosses at a time.</p>

    <h2>Dice roll</h2>
    <p>The <Link to='dice-roll'>random dice roller</Link> allows you to roll up to ten dice; each dice can have between two and twenty sides (although I've never seen a two-sided die!)</p>

    <h2>Magic 8-ball</h2>
    <p>Ask the <Link to='magic-eight-ball'>magic eight ball</Link> a question, and it's clairvoyant powers will answer.</p>

    <h2>List randomiser</h2>
    <p>The <Link to='randomise-list'>list randomiser</Link> uses the <a href='https://bost.ocks.org/mike/shuffle/'>Fisher-Yates</a> to rearrange all the items in a list.</p>

    <h2>List draw</h2>
    <p>The <Link to='list'>list draw picker</Link> picks a random item from a list, and can also pick any number of random items from it (up to all the items).</p>

    <h2>Weighted list draw</h2>
    <p>The <Link to='weighted-list'>weighted list draw</Link> allows each item in a list to be given a weight, which changes the chance of the item being picked from the list.
    For instance, if you had a list containing Graham and Susan, and gave Graham a weight of 3, then Graham would be three times as likely to be drawn as Susan.</p>
  </article>
);

export default AboutView;
