import React from 'react';

const Context = React.createContext({
	locale: 'en',
	formats: {
		date: 'll',
		time: 'LT'
	}
});

export default Context;
