import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Slider from 'components/Slider';
import Ad from 'components/Ad';
import Dice from 'components/Dice';
import DiceView from 'routes/Dice/components/DiceView';

describe('(View) Dice', () => {
  let _component;

  beforeEach(() => {
    _component = mount(<DiceView />);
  });

  it('should render', () => {
    expect(_component.find(Ad)).to.exist;
    expect(_component.find(Slider)).to.exist;
    expect(_component.find('button')).to.exist;
    expect(_component.find(Dice)).to.exist;
  });

  it('should handle change', () => {
    const spy = sinon.spy(_component.instance(), 'roll');

    expect(_component.state('amount')).to.equal(1);
    _component.instance().handleChange({ target: { value: 10, name: 'amount' } });

    expect(_component.state('amount')).to.equal(10);
    expect(spy).to.have.been.called;

    _component.instance().roll.restore();
  });

  it('should generate results', () => {
    _component.setState({ amount: 3 });
    _component.instance().roll();

    const dice = _component.state('dice');
    expect(dice.length).to.equal(3);
  });
});
