import React from 'react';
import renderer from 'react-test-renderer';

import Composer from '../components/Composer';

it('should render <Composer /> and compare with snapshot', () => {
	const component = renderer.create(<Composer />);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
