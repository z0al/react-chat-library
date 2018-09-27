// @ts-check

// Packages
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Ours
import Input from '../src/components/Input';
import Send from '../src/components/Send';
import Composer from '../src/components/Composer';
import Bubble from '../src/components/Bubble';
import Time from '../src/components/Time';
import Text from '../src/components/Text';
import Day from '../src/components/Day';

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

const text =
	'Eu reprehenderit non esse qui consectetur ullamco id eu enim dolore. Tempor ex pariatur exercitation laborum officia http://nulla proident sunt excepteur reprehenderit sint. Ex ullamco ex irure eiusmod officia. Ut magna velit do sunt.com tempor eiusmod.';
const time = 'Wed Sep 26 17:08:00 +03 2018';

storiesOf('Bubble', module)
	.add('Left', () => <Bubble text={text} time={time} />)
	.add('Right', () => <Bubble text={text} time={time} position="right" />);

storiesOf('Time', module)
	.add('Left', () => <Time>{time}</Time>)
	.add('Right', () => (
		<Time position="right" style={{ color: 'red' }}>
			{time}
		</Time>
	));

storiesOf('Text', module)
	.add('Default', () => (
		<Text
			position="right"
			style={{ color: 'green' }}
			linkStyle={{ color: 'green', fontWeight: 'bold' }}
		>
			{text}
		</Text>
	))
	.add('Custom style', () => <Text linkStyle={{ color: 'red' }}>{text}</Text>);

storiesOf('Day', module)
	.add('Default', () => <Day>{time}</Day>)
	.add('Custom style', () => <Day textStyle={{ color: 'red' }}>{time}</Day>);
