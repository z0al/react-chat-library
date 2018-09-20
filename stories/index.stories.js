// @ts-check

// Packages
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Ours
import { Context, propsToContext } from '../src/context';
import TextInput from '../src/components/TextInput';

storiesOf('TextInput', module)
	.add('Default', () => <TextInput />)
	.add('Custom handler', () => (
		<Context.Provider
			value={propsToContext({ onTextChange: action('onTextChange') })}
		>
			<TextInput placeholder="my placeholder" />
		</Context.Provider>
	));
