import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';

import { Context, propsToContext } from '../../context';
import TextInput from '../TextInput';

test('should match the snapshot', () => {
	const tree = renderer.create(<TextInput />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('should set initial text from Context', () => {
	const text = 'Hello world';
	const { getByTestId } = render(
		<Context.Provider value={propsToContext({ inputText: text })}>
			<TextInput />
		</Context.Provider>
	);
	expect(getByTestId('text-input').innerHTML).toEqual(text);
});
