const { createLogString, log } = require('../peasy-log')

const datestampRegex = `\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z`

test('createLogString prepends a timestamp', () => {
  expect(createLogString('ooo')).toMatch(new RegExp(`^${datestampRegex} : ooo$`))
})

test('createLogString separates arguments with a pipe', () => {
  expect(createLogString('ooo', 1, 'aaa')).toMatch(new RegExp(`^${datestampRegex} : ooo : 1 : aaa$`))
})

test(`createLogString doesn't add HTML tags to URLs`, () => {
  expect(createLogString('https://google.com')).toMatch(new RegExp(`^${datestampRegex} : https://google.com$`))
})

// TODO test colorisation. Ideas?
