import React from 'react';
import LetterView from 'routes/Letter/components/LetterView';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('(View) Letter', () => {
  let _component;

  beforeEach(() => {
    _component = mount(<LetterView />);
  });

  it('should render', () => {
    expect(_component.find('input')).to.exist;
    expect(_component.find('button')).to.exist;
    expect(_component.find('.letter__selected')).to.exist;
  });

  it('should have a list of letters', () => {
    const letters = _component.instance().letters;
    expect(letters).to.exist;
    expect(letters.length).to.equal(26);
    expect(letters[0]).to.match(/a/);
    expect(letters[25]).to.match(/z/);
    expect(letters[10]).to.match(/k/);
  });

  it('should generate a letter on load', () => {
    expect(_component.find('.letter__selected').text()).not.to.equal('');
    const letter = _component.state('letter');
    expect(letter).not.to.equal('');
    expect(_component.find('.letter__selected').text()).to.equal(letter);
  });

  it('should generate a letter on click', () => {
    const spy = sinon.spy(_component.instance(), 'shuffle');
    _component.find('button').simulate('click');

    expect(spy).to.have.been.called;
    _component.instance().shuffle.restore();
  });

  it('should exclude specified letters', () => {
    _component.find('input').simulate('change', { target: { value: 'a,W x+z' } });
    const excluded = _component.state('excluded');

    expect(excluded.length).to.equal(4);
    expect(excluded[0]).to.match(/a/);
    expect(excluded[1]).to.match(/w/);
    expect(excluded[2]).to.match(/x/);
    expect(excluded[3]).to.match(/z/);

    _component.find('input').simulate('change', { target: { value: 'abcdefghijlnopqrstuvwxyz' } });
    _component.instance().shuffle();

    const letter = _component.state('letter');
    expect('km'.split('').indexOf(letter)).not.to.equal(-1);
  });
});
