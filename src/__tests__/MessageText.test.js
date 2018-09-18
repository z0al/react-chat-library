import React from 'react';
import renderer from 'react-test-renderer';

import MessageText from '../components/MessageText';

it('should render <MessageText /> and compare with snapshot', () => {
	const component = renderer.create(<MessageText />);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
