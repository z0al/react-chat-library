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
	.add('Left', () => <Time time="Wed Sep 26 16:09:43 +03 2018" />)
	.add('Right', () => (
		<Time time="Wed Sep 26 16:09:43 +03 2018" position="right" />
	));
