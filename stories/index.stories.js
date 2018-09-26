// @ts-check

// Packages
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Ours
import Input from '../src/components/Input';
import Send from '../src/components/Send';
import Composer from '../src/components/Composer';
// import Bubble from '../src/components/Bubble';
import Time from '../src/components/Time';
import Text from '../src/components/Text';

storiesOf('Input', module)
	.add('Default', () => <Input />)
	.add('Custom text', () => <Input text="initial input text" />)
	.add('Custom handler', () => (
		<Input
			onSubmit={action('Submitted')}
			onTextChange={action('Text changed')}
		/>
	));

storiesOf('Send', module)
	.add('Default', () => <Send />)
	.add('Custom handler', () => <Send onSubmit={action('Submitted')} />);

storiesOf('Composer', module)
	.add('Default', () => <Composer />)
	.add('Custom handler', () => <Composer />)
	.add('Custom renderer', () => (
		<Composer
			renderSend={props => (
				<Send {...props} buttonStyle={{ background: 'aquamarine' }} />
			)}
		/>
	));

// storiesOf('Bubble', module)
// 	.add('Left', () => <Bubble />)
// 	.add('Right', () => <Bubble position="right" />);

storiesOf('Time', module)
	.add('Left', () => <Time value="Wed Sep 26 16:09:43 +03 2018" />)
	.add('Right', () => (
		<Time value="Wed Sep 26 16:09:43 +03 2018" position="right" />
	));

storiesOf('Text', module)
	.add('Default', () => (
		<Text value="Eu reprehenderit non esse qui consectetur ullamco id eu enim dolore. Tempor ex pariatur exercitation laborum officia http://nulla proident sunt excepteur reprehenderit sint. Ex ullamco ex irure eiusmod officia. Ut magna velit do sunt.com tempor eiusmod." />
	))
	.add('Custom style', () => (
		<Text
			value="Eu reprehenderit non esse qui consectetur ullamco id eu enim dolore. Tempor ex pariatur exercitation laborum officia http://nulla proident sunt excepteur reprehenderit sint. Ex ullamco ex irure eiusmod officia. Ut magna velit do sunt.com tempor eiusmod."
			linkStyle={{ color: 'red' }}
		/>
	));
