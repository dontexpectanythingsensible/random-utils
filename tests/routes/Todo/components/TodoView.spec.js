import React from 'react';
import { TodoView } from 'routes/Todo/components/TodoView';
import { render } from 'enzyme';

describe('(View) Todo', () => {
  let _component;

  beforeEach(() => {
    _component = render(<TodoView />);
  });

  it('Renders a list', () => {
    expect(_component.find('ul')).to.exist;
  });

  it('should render list items', () => {
    const item = _component.find('li');
    expect(item).to.exist;
  });
});
