import React from 'react';

const Context = React.createContext({
	locale: 'en',
	input: { text: '' }
});

export default Context;
