import TodoRoute from 'routes/Todo';

describe('(Route) Todo', () => {
  let _component;

  beforeEach(() => {
    _component = TodoRoute.component();
  });

  it('should return a route', () => {
    expect(typeof TodoRoute).to.equal('object');
  });

  it('should define a component', () => {
    expect(_component.type).to.equal('ul');
  });
});
