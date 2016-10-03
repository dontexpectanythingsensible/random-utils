import React from 'react';
import { mount } from 'enzyme';

import Ad from 'components/Ad';
import ListView from 'routes/RandomList/components/RandomList';

describe('(View) RandomList', () => {
  let _component;

  beforeEach(() => {
    _component = mount(<ListView />);
  });

  it('should render', () => {
    expect(_component.find('div')).to.exist;
    expect(_component.find('textarea')).to.exist;
    expect(_component.find('button')).to.exist;
    expect(_component.find('.nav__external')).to.exist;
    expect(_component.find(Ad)).to.exist;
  });

  it('should handle text change', () => {
    expect(_component.state('text')).to.eql([]);
    _component.find('textarea').simulate('change', { target: { value: 'test\ntest2' } });
    _component.update();
    expect(_component.state('text')).to.eql(['test', 'test2']);
  });

  it('should pick selected amount', () => {
    _component.setState({ text: ['test', 'test2', 'test3', 'test4', 'test5', 'test6'] });
    _component.find('button').simulate('click');
    expect(_component.find('.list__item').length).to.equal(6);
  });
});
