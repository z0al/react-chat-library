import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Day from '../src/components/Day';
import Time from '../src/components/Time';

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
