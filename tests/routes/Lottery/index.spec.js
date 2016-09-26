import LotteryRoute from 'routes/Lottery';

describe('(route) Lottery', () => {
  let _component;

  beforeEach(() => {
    _component = LotteryRoute.component;
  });

  it('should return a route', () => {
    expect(typeof LotteryRoute).to.equal('object');
  });

  it('should define a component', () => {
    expect(typeof _component).to.equal('function');
  });
});
