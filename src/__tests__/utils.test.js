import { isSameDay, isSameUser, CSS } from '../utils';

describe('utils / isSameDay', () => {
	it('should test if same day', () => {
		const now = new Date();
		expect(isSameDay({ createdAt: now }, { createdAt: now })).toBe(true);
	});
});

describe('utils / isSameUser', () => {
	it('should test if same user', () => {
		const message = { user: { _id: 1 } };
		expect(isSameUser(message, message)).toBe(true);
	});
});

describe('utils / CSS', () => {
	it('should merge styles correctly', () => {
		const s1 = { color: 'red', background: 'white' };
		const s2 = { color: 'blue' };
		const s3 = { color: 'blue', background: 'white' };
		expect(CSS([s1, s2])).toEqual(s3);
	});
});
