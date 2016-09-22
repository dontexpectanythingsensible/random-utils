import LetterRoute from 'routes/Letter';

describe('(Route) Letter', () => {
  let _component;

  beforeEach(() => {
    _component = LetterRoute.component;
  });

  it('should return a route', () => {
    expect(typeof LetterRoute).to.equal('object');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
