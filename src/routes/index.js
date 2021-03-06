import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Todo from './Todo';
import Letter from './Letter';
import Lottery from './Lottery';
import Coin from './CoinFlip';
import Dice from './Dice';
import List from './List';
import WeightedList from './WeightedList';
import RandomList from './RandomList';
import NameGenerator from './NameGenerator';
import EightBall from './EightBall';
import About from './About';
// import CounterRoute from './Counter';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Letter,
  childRoutes : [
    // CounterRoute(store),
    Todo,
    Lottery,
    Coin,
    Dice,
    List,
    WeightedList,
    RandomList,
    NameGenerator,
    EightBall,
    About
  ]
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
