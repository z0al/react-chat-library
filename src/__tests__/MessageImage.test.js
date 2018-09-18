import React from 'react';
import renderer from 'react-test-renderer';

import MessageImage from '../components/MessageImage';

it('should render <MessageImage /> and compare with snapshot', () => {
	const component = renderer.create(<MessageImage />);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
