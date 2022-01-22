// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


import axios from 'axios'

const spies = {
	get: jest.spyOn(axios, 'get'),
	patch: jest.spyOn(axios, 'patch'),
	post: jest.spyOn(axios, 'post')
}

beforeEach(() => {
	jest.resetAllMocks()
})

afterEach(() => {
	expect(spies.get).not.toHaveBeenCalled()
	expect(spies.patch).not.toHaveBeenCalled()
	expect(spies.post).not.toHaveBeenCalled()
})
