import ListRoute from 'routes/List';

describe('(Route) List', () => {
  let _component;

  beforeEach(() => {
    _component = ListRoute.component;
  });

  it('should return a route', () => {
    expect(typeof ListRoute).to.equal('object');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
