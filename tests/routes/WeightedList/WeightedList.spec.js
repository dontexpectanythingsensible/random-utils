import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Ad from 'components/Ad';
import WeightedList from 'routes/WeightedList/components/WeightedList';
import ListItem from 'components/List';

describe('(View) List', () => {
  let _component;

  beforeEach(() => {
    _component = mount(<WeightedList />);
  });

  it('should render', () => {
    expect(_component.find('div')).to.exist;
    expect(_component.find(ListItem)).to.exist;
    expect(_component.find('button')).to.exist;
    expect(_component.find('.nav__external')).to.exist;
    expect(_component.find(Ad)).to.exist;
  });

  it('should handle range change', () => {
    const spy = sinon.spy(_component.instance(), 'randomise');

    expect(_component.state('amount')).to.equal(1);
    _component.instance().handleChange({ target: { value: 4, name: 'amount' } });
    _component.update();
    expect(_component.state('amount')).to.equal(4);
    expect(spy).to.have.been.called;

    _component.instance().randomise.restore();
  });

  it('should handle text change', () => {
    expect(_component.state('items')).to.eql([{ id: 1, text: '', number: 1 }]);

    _component.instance().handleTextChange({ id: 1, text: 'hello', number: 5 });
    expect(_component.state('items')).to.eql([{ id: 1, text: 'hello', number: 5 }]);
  });

  it('should pick selected amount', () => {
    _component.setState({ items: [
      {
        text: 'test',
        id: 0,
        number: 1
      },
      {
        text: 'test1',
        id: 1,
        number: 1
      },
      {
        text: 'test2',
        id: 2,
        number: 4
      },
      {
        text: 'test3',
        id: 3,
        number: 2
      }]
    });
    _component.find('.list__randomise').simulate('click');
    expect(_component.find('.list__item').length).to.equal(1);

    _component.setState({ amount: 3 });
    _component.find('.list__randomise').simulate('click');
    expect(_component.find('.list__item').length).to.equal(3);
  });

  it('should add items', () => {
    expect(_component.state('items')).to.eql([{ id: 1, text: '', number: 1 }]);

    _component.instance().addItem();
    expect(_component.state('items')).to.eql([
      { id: 1, text: '', number: 1 },
      { id: 2, text: '', number: 1 }
    ]);
  });

  it('should remove items', () => {
    _component.setState({
      items: [
        { id: 1, text: '', number: 1 },
        { id: 2, text: '', number: 1 },
        { id: 43, text: '', number: 1 }
      ]
    });

    _component.instance().removeItem(1);
    expect(_component.state('items').length).to.equal(2);
    expect(_component.state('items').filter(item => item.id === 43).length).to.equal(1);
  });
});
