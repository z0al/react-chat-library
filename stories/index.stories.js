// @ts-check

// Packages
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Ours
import { TextContext } from '../src/contexts';
import TextInput from '../src/components/TextInput';
import Send from '../src/components/Send';

storiesOf('TextInput', module)
	.add('Default', () => <TextInput />)
	.add('Custom text', () => (
		<TextContext.Provider
			value={{
				text: 'initial input text',
				send: () => {},
				updateText: () => {}
			}}
		>
			<TextInput />
		</TextContext.Provider>
	))
	.add('Custom handler', () => (
		<TextContext.Provider
			value={{
				text: '',
				send: action('Send'),
				updateText: action('updateText')
			}}
		>
			<TextInput placeholder="my placeholder" />
		</TextContext.Provider>
	));

storiesOf('Send', module)
	.add('Default', () => <Send />)
	.add('Custom handler', () => (
		<TextContext.Provider
			value={{
				text: 'initial input text',
				send: action('send'),
				updateText: () => {}
			}}
		>
			<Send />
		</TextContext.Provider>
	));
