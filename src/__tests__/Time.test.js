import React from 'react';
import renderer from 'react-test-renderer';

import Time from '../components/Time';

it('should render <Time /> and compare with snapshot', () => {
	const component = renderer.create(<Time />);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
