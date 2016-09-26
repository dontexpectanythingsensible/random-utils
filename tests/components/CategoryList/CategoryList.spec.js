import React from 'react';
import CategoryList from 'components/CategoryList';
import { shallow } from 'enzyme';

describe('(component) CategoryList', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<CategoryList />);
  });

  it('should have a list', () => {
    _component.setState({ visible: true }).update();

    expect(_component.find('ul')).to.exist;
    expect(_component.find('h1')).to.exist;
    expect(_component.find('li').length).to.equal(33);
  });

  it('should toggle visiblity', () => {
    expect(_component.find('ul')).not.to.exist;

    _component.find('h1').simulate('click');

    expect(_component.find('ul')).to.exist;
  });
});
