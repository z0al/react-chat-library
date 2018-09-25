import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';

import Send from '../Send';

test('should match the snapshot', () => {
	const tree = renderer.create(<Send />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('should show user custom label', () => {
	const label = 'Hello world';
	const { getByText } = render(<Send label={label} />);
	expect(getByText(label)).not.toBe(null);
});
