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
import Message from '../src/components/Message';
import MessageList from '../src/components/MessageList';
import Messenger from '../src/components/Messenger';

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
const date = 'Wed Sep 26 17:08:00 +03 2018';

storiesOf('Bubble', module)
	.add('Left', () => <Bubble text={text} date={date} />)
	.add('Right', () => <Bubble text={text} date={date} position="right" />);

storiesOf('Time', module)
	.add('Left', () => <Time date={date} />)
	.add('Right', () => (
		<Time position="right" style={{ color: 'red' }} date={date} />
	));

storiesOf('Text', module)
	.add('Default', () => (
		<Text
			position="right"
			style={{ color: 'green' }}
			linkStyle={{ color: 'green', fontWeight: 'bold' }}
			text={text}
		/>
	))
	.add('Custom style', () => <Text linkStyle={{ color: 'red' }} text={text} />);

storiesOf('Day', module)
	.add('Default', () => <Day date={date} />)
	.add('Custom style', () => <Day textStyle={{ color: 'red' }} date={date} />);

storiesOf('Message', module)
	.add('Left', () => <Message text={text} date={date} />)
	.add('Right', () => <Message text={text} date={date} position="right" />);

const messages = [
	{ text: 'Hey', date: 'Thu Sep 27 18:56:12 +03 2018', user: { _id: 2 } },
	{
		text: 'Hello friend',
		date: 'Thu Sep 27 16:56:12 +03 2018',
		sent: true,
		received: true,
		user: { _id: 1 }
	},
	{
		text: 'How are you doing?',
		date: 'Thu Sep 28 16:56:12 +03 2018',
		sent: true,
		received: true,
		user: { _id: 1 }
	},
	{
		text: 'Hello?',
		date: 'Thu Sep 28 16:57:12 +03 2018',
		sent: true,
		user: { _id: 1 }
	}
];
storiesOf('Message List', module).add('Default', () => (
	<MessageList messages={messages} user={{ _id: 1 }} />
));

storiesOf('Messenger', module).add('Default', () => (
	<Messenger
		messages={messages}
		alwaysShowSend={true}
		user={{ _id: 1 }}
		onSend={text => {
			messages.push({
				text,
				user: { _id: 1 },
				date: Date(),
				sent: true,
				received: true
			});
		}}
		onTextChange={action('TextChange')}
	/>
));
