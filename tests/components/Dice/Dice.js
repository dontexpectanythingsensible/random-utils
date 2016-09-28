import React from 'react';
import Dice from 'components/Dice';
import { shallow } from 'enzyme';

describe('(component) Dice', () => {
  let _component, _props;

  beforeEach(() => {
    _props = {
      max: 5
    };

    _component = shallow(<Dice { ..._props } />);
  });

  it('should show value', () => {
    expect(_component.state('value')).to.exist;
  });

  it('should have an input', () => {
    expect(_component.find('input[type="number"]')).to.exist;
    expect(_component.find('input[type="number"]').prop('value')).to.equal(_component.state('max'));
  });
});
