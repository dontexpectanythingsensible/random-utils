import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Ad from 'components/Ad';
import EightBall from 'routes/EightBall/components/EightBall';

describe('(View) EightBall', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<EightBall />);
  });

  it('should render', () => {
    expect(_component.find('.eightball')).to.exist;
    expect(_component.find('.list__item')).to.exist;
    expect(_component.find('button')).to.exist;
    expect(_component.find(Ad)).to.exist;
  });
});
