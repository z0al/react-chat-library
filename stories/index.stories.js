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

storiesOf('Day', module)
	.add('With date', () => <Day date="Sun Sep 16 13:12:32 +03 2018" />)
	.add('With custom style', () => (
		<Day
			date="Sun Sep 16 13:12:32 +03 2018"
			textStyle={{ color: 'red', fontStyle: 'italic' }}
		/>
	))
	.add('With custom format', () => (
		<Day date="Sun Sep 16 13:12:32 +03 2018" format="l" />
	));

storiesOf('Time', module)
	.add('With date', () => <Time date="Sun Sep 16 13:12:32 +03 2018" />)
	.add('With custom style', () => (
		<Time
			date="Sun Sep 16 13:12:32 +03 2018"
			textStyle={{ left: { color: 'red', fontStyle: 'italic' } }}
		/>
	))
	.add('With custom format', () => (
		<Time date="Sun Sep 16 13:12:32 +03 2018" format="LTS" />
	));

storiesOf('Send button', module)
	.add('Default', () => <Send />)
	.add('Always show', () => <Send alwaysShow={true} />)
	.add('With custom onSend()', () => (
		<Context.Provider
			value={propsToContext({
				inputText: 'foo',
				onSend: action('Send fired')
			})}
		>
			<Send alwaysShow={true} onSend={action('clicked')} />
		</Context.Provider>
	));
