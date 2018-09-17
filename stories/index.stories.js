import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Time from '../src/Time';

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
