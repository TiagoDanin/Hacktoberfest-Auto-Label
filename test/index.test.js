/* eslint-disable no-undef */
const {Application} = require('probot')
const issuesOpenedPayload = require('./fixtures/issues.opened.json')
const myProbotApp = require('..')

describe('Hacktoberfest Auto Label Bot', () => {
	let app
	let github
	beforeEach(() => {
		app = new Application()
		app.load(myProbotApp)
		github = {
			issues: {
				addLabels: jest.fn().mockReturnValue(Promise.resolve({}))
			}
		}
		app.auth = () => Promise.resolve(github)
	})

	test('An issue is opened', async () => {
		await app.receive({
			name: 'issues.opened',
			payload: issuesOpenedPayload
		})
		expect(github.issues.addLabels).toHaveBeenCalled()
	})
})
