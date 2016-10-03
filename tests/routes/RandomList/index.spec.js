import ListRoute from 'routes/RandomList';

describe('(Route) RandomList', () => {
  let _component;

  beforeEach(() => {
    _component = ListRoute.component;
  });

  it('should return a route', () => {
    expect(typeof ListRoute).to.equal('object');
    expect(ListRoute.path).to.equal('randomise-list');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
