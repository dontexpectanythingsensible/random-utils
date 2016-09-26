import React from 'react';
import { mount } from 'enzyme';

import Slider from 'components/Slider';
import Coin from 'components/Coin';
import CoinView from 'routes/CoinFlip/components/CoinView';

describe('(View) Coin', () => {
  let _component;

  beforeEach(() => {
    _component = mount(<CoinView />);
  });

  it('should render', () => {
    expect(_component.find(Slider)).to.exist;
    expect(_component.find('button')).to.exist;
    expect(_component.find(Coin)).to.exist;
  });

  it('should handle change', () => {
    expect(_component.state('amount')).to.equal(1);
    _component.instance().handleChange({ target: { value: 10, name: 'amount' } });

    expect(_component.state('amount')).to.equal(10);
  });

  it('should generate results', () => {
    _component.setState({ amount: 3 });
    _component.instance().flip();

    const coins = _component.state('coins');
    expect(coins.length).to.equal(3);
    expect(coins.indexOf('heads') > -1 || coins.indexOf('tails') > -1).to.be.true;
  });
});
