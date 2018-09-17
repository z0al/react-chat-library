import Colors from '../colors';

it('should compare Colors with snapshot', () => {
	expect(Colors).toMatchSnapshot();
});
