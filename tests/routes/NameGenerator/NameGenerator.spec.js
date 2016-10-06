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

  // when component is created, the button onclick is bound to this.getName
  //  before the spy has been created, which is a new function
  // so the new function (bound to 'this') gets called, not the spy
  // it('should generate names', () => {
  //   const spy = sinon.spy(_component.instance(), 'setState');
  //   const buttonSpy = sinon.spy(_component.find('button').prop('onClick'));
  //   _component.find('button').simulate('click');

  //   expect(buttonSpy).to.have.been.called;
  //   expect(spy).to.have.been.calledWith(sinon.match({ bossName: sinon.match.string }));
  //   _component.instance().getName.restore();
  // });
});
