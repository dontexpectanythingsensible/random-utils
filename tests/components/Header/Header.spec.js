import React from 'react';
import Header from 'components/Header/Header';
import { IndexLink, Link } from 'react-router';
import { mount } from 'enzyme';

describe('(Component) Header', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = mount(<Header />);
  });

  describe('toggle', () => {
    it('should have a toggle', () => {
      expect(_wrapper.find('.nav__toggle')).to.exist;
    });

    it('should toggle nav visibility', () => {
      _wrapper.find('.nav__toggle').simulate('click');

      expect(_wrapper.state('visible')).to.equal(true);
      expect(_wrapper.find('.nav')).to.exist;
    });
  });

  describe('Navigation links...', () => {
    beforeEach(() => {
      _wrapper.setState({ visible: true });
    });

    it('Should render a Link to Letter route', () => {
      expect(_wrapper.find(IndexLink)).to.exist;
      expect(_wrapper.find(IndexLink).text()).to.match(/Letter/);
      expect(_wrapper.find(IndexLink).prop('to')).to.equal('/');
    });

    it('Should render a Link to Lottery route', () => {
      expect(_wrapper.find(Link)).to.exist;
      expect(_wrapper.find(Link).at(1).text()).to.match(/Lottery/);

      expect(_wrapper.find(Link).at(1).prop('to')).to.equal('/lottery');
    });

    it('Should render a Link to Coin route', () => {
      const link = _wrapper.find(Link).at(2);

      expect(link).to.exist;
      expect(link.text()).to.match(/Coin toss/);

      expect(link.prop('to')).to.equal('/coin-toss');
    });

    it('Should render a Link to Dice route', () => {
      const link = _wrapper.find(Link).at(3);

      expect(link).to.exist;
      expect(link.text()).to.match(/Dice roll/);

      expect(link.prop('to')).to.equal('/dice-roll');
    });

    it('Should render a Link to List route', () => {
      const link = _wrapper.find(Link).at(4);

      expect(link).to.exist;
      expect(link.text()).to.match(/List draw/);

      expect(link.prop('to')).to.equal('/list');
    });

    it('Should render a Link to List route', () => {
      const link = _wrapper.find(Link).at(5);

      expect(link).to.exist;
      expect(link.text()).to.match(/Weighted list draw/);

      expect(link.prop('to')).to.equal('/weighted-list');
    });

    it('Should render a Link to random list route', () => {
      const link = _wrapper.find(Link).at(6);

      expect(link).to.exist;
      expect(link.text()).to.match(/Randomise list/);

      expect(link.prop('to')).to.equal('/randomise-list');
    });

    it('Should render a Link to About route', () => {
      const link = _wrapper.find(Link).at(7);

      expect(link).to.exist;
      expect(link.text()).to.match(/About/);

      expect(link.prop('to')).to.equal('/about');
    });

    it('Should render a link to team generator', () => {
      const link = _wrapper.find('.nav__external');

      expect(link).to.exist;
      expect(link.text()).to.match(/Random team generator/);

      expect(link.prop('href')).to.equal('https://jamestease.co.uk/team-generator');
    });
  });
});
