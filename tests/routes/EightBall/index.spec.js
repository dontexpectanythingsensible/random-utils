import route from 'routes/EightBall';

describe('(Route) EightBall', () => {
  let _component;

  beforeEach(() => {
    _component = route.component;
  });

  it('should return a route', () => {
    expect(typeof route).to.equal('object');
    expect(route.path).to.equal('magic-eight-ball');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
