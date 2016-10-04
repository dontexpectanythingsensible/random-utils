import route from 'routes/NameGenerator';

describe('(Route) NameGenerator', () => {
  let _component;

  beforeEach(() => {
    _component = route.component;
  });

  it('should return a route', () => {
    expect(typeof route).to.equal('object');
    expect(route.path).to.equal('dark-souls-name-generator');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
