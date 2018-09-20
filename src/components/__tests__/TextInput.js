import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from '../TextInput';

test('should match the snapshot', () => {
	const tree = renderer.create(<TextInput />).toJSON();
	expect(tree).toMatchSnapshot();
});
