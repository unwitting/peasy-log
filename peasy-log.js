const colors = require('colors')
const Entities = require('html-entities').XmlEntities
const marked = require('marked')

const renderer = new marked.Renderer()
const entities = new Entities()

renderer.em = text => colors.cyan(text)
renderer.strong = text => colors.yellow(text)
renderer.del = text => colors.green(text)
renderer.paragraph = text => text
renderer.link = text => text

function colorise(s) {
  return entities.decode(marked(s, { renderer }))
}

function createLogString(...args) {
  const timestamp = new Date().toISOString()
  return colorise([timestamp, ...args].join(' : '))
}

function log(...args) {
  console.log(createLogString(...args))
}

module.exports = { createLogString, log }
