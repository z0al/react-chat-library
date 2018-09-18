// @ts-check

// Packages
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Ours
import { Context, propsToContext } from '../src/context';
import Day from '../src/components/Day';
import Time from '../src/components/Time';
import Send from '../src/components/Send';
import Composer from '../src/components/Composer';
import MessageText from '../src/components/MessageText';

storiesOf('Day', module)
	.add('Default', () => <Day date="Sun Sep 16 13:12:32 +03 2018" />)
	.add('Custom style', () => (
		<Day
			date="Sun Sep 16 13:12:32 +03 2018"
			textStyle={{ color: 'red', fontStyle: 'italic' }}
		/>
	))
	.add('Custom format', () => (
		<Day date="Sun Sep 16 13:12:32 +03 2018" format="l" />
	));

storiesOf('Time', module)
	.add('Default', () => <Time date="Sun Sep 16 13:12:32 +03 2018" />)
	.add('Custom style', () => (
		<Time
			date="Sun Sep 16 13:12:32 +03 2018"
			textStyle={{ left: { color: 'red', fontStyle: 'italic' } }}
		/>
	))
	.add('Custom format', () => (
		<Time date="Sun Sep 16 13:12:32 +03 2018" format="LTS" />
	));

storiesOf('Send', module)
	.add('Default', () => <Send />)
	.add('Always show', () => <Send alwaysShow={true} />)
	.add('Custom onSend()', () => (
		<Context.Provider
			value={propsToContext({
				inputText: 'foo',
				onSend: action('Send fired')
			})}
		>
			<Send alwaysShow={true} onSend={action('clicked')} />
		</Context.Provider>
	));

storiesOf('Composer', module)
	.add('Default', () => <Composer />)
	.add('Custom onTextChange()', () => (
		<Context.Provider
			value={propsToContext({
				onTextChange: action('Text Changed')
			})}
		>
			<Composer />
		</Context.Provider>
	));

storiesOf('MessageText', module)
	.add('Default', () => <MessageText />)
	.add('Custom text', () => (
		<MessageText text="Hey, check out this http://google.com, let me know what you think" />
	))
	.add('Custom style', () => (
		<MessageText
			text="Hey, check out this http://google.com, let me know what you think"
			linkStyle={{ color: 'red' }}
		/>
	));
