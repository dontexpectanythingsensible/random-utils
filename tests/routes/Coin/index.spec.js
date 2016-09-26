import CoinRoute from 'routes/CoinFlip';

describe('(Route) Coin', () => {
  let _component;

  beforeEach(() => {
    _component = CoinRoute.component;
  });

  it('should return a route', () => {
    expect(typeof CoinRoute).to.equal('object');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
