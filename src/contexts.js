// @ts-check

// Packages
import { createContext } from 'react';

const TextContext = createContext({
	// Input text
	text: '',
	// A helper to send current text buffer
	send: () => {},
	// A helper to update current text, from text input probably
	updateText: _ => {}
});

export { TextContext };
