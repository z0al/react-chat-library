import React from 'react';
import renderer from 'react-test-renderer';

import Send from '../components/Send';

it('should render <Send /> and compare with snapshot', () => {
	const component = renderer.create(<Send />);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
