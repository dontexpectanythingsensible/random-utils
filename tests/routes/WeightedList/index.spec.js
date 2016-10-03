import WeightedListRoute from 'routes/WeightedList';

describe('(Route) WeightedList', () => {
  let _component;

  beforeEach(() => {
    _component = WeightedListRoute.component;
  });

  it('should return a route', () => {
    expect(typeof WeightedListRoute).to.equal('object');
    expect(WeightedListRoute.path).to.equal('weighted-list');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
