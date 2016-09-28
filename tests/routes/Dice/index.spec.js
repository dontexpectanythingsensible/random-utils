import DiceRoute from 'routes/Dice';

describe('(Route) Dice', () => {
  let _component;

  beforeEach(() => {
    _component = DiceRoute.component;
  });

  it('should return a route', () => {
    expect(typeof DiceRoute).to.equal('object');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
