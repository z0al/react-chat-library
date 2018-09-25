import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';

import Input from '../Input';

test('should match the snapshot', () => {
	const tree = renderer.create(<Input />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('should set initial text from Context', () => {
	const text = 'Hello world';
	const { getByTestId } = render(<Input text={text} />);
	expect(getByTestId('text-input').innerHTML).toEqual(text);
});
