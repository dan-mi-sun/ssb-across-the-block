var html = require('yo-yo')
var pull = require('pull-stream')
var paraMap = require('pull-paramap')

var lastDaysBlocks = require('../source/last-days-blocks')
var getName = require('../async/get-name')
// var getBacklinks = require('../async/get-backlinks')
var Posts = require('./posts')
var BlockMessages = require('./block-messages.js')

var state = {
  daysAgo: 0
}

var htmlTarget = html`
  <div>Loading...</div>
`
var secondHtmlTarget = html`
  <div>Loading 2...</div>
`

module.exports = function App (server) {
  const app = html`
    <div className='app'>
      <h1>Days Blocks</h1>
      <section>
        <button onclick=${() => changeDate(-1)}> Back </ button>
        <button onclick=${() => changeDate(+1)}> Fwd </ button>
      </section>
      ${htmlTarget}
      ${secondHtmlTarget}
    </div>
  `

  renderDay(server, state)
  renderBlockComments(server, state)

  return app

  function changeDate (step) {
    state.daysAgo = state.daysAgo + step
    renderDay(server, state)
  }
}

function renderDay (server, state) {
  html.update(htmlTarget, html`<div>Loading... </div>`)

  pull(
    lastDaysBlocks(server, state.daysAgo),
    paraMap(getName(server), 50),
    // paraMap(getBacklinks(server), 50),
    pull.collect((error, results) => {
      if (error) console.log(error)

      html.update(htmlTarget, Posts(results))
    })
  )
}

function renderBlockComments (server, state) {
  html.update(seondHtmlTarget, html`<div>Loading block comment...</div>`)

  pull(
    lastDaysBlocks(server, state.daysAgo),
    paraMap(getName(server), 50),
    pull.collect((error, results) => {
      if (error) console.log(error)

      html.update(secondHtmlTarget, BlockMessages(results)) // Block messages
    })
  )
}
