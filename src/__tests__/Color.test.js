import Color from '../colors';

it('should compare Color with snapshot', () => {
  expect(Color).toMatchSnapshot();
});
