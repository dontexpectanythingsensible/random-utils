import React from 'react';
import { mount } from 'enzyme';

import Ad from 'components/Ad';
import NameGenerator from 'routes/NameGenerator/components/NameGenerator';

describe('(View) NameGenerator', () => {
  let _component;

  beforeEach(() => {
    _component = mount(<NameGenerator />);
  });

  it('should render', () => {
    expect(_component.find('.names')).to.exist;
    expect(_component.find('.list__item')).to.exist;
    expect(_component.find('input[type="text"]')).to.exist;
    expect(_component.find('button')).to.exist;
    expect(_component.find(Ad)).to.exist;
  });

  it('should handle text change', () => {
    expect(_component.state('name')).to.equal('Brian');
    _component.find('input').simulate('change', { target: { value: 'Sandra' } });
    _component.update();
    expect(_component.state('name')).to.equal('Sandra');
  });

  it('should generate names', () => {
    expect(_component.find('.list__item').text().indexOf('Brian') >= 0).to.be.true;
    _component.find('input').simulate('change', { target: { value: 'Sandra' } });
    _component.find('button').simulate('click');

    expect(_component.find('.list__item').text().indexOf('Sandra') >= 0).to.be.true;
  });
});
