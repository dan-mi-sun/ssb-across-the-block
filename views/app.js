var html = require('yo-yo')
var pull = require('pull-stream')
var paraMap = require('pull-paramap')

var lastDaysBlocks = require('../source/last-days-blocks')
var getName = require('../async/get-name')
var Posts = require('./posts')

var state = {
  daysAgo: 0
}

var resultsEl = html`
  <div>Loading...</div>
`

module.exports = function App (server) {
  const app = html`
    <div className='app'>
      <h1>Days Blocks</h1>
      <section>
        <button onclick=${() => changeDate(-1)}> Back </ button>
        <button onclick=${() => changeDate(+1)}> Fwd </ button>
      </section>
      ${resultsEl}
    </div>
  `

  renderDay(server, state)

  return app

  function changeDate (step) {
    state.daysAgo = state.daysAgo + step
    renderDay(server, state)
  }
}

function renderDay (server, state) {
  html.update(resultsEl, html`<div>Loading... </div>`)

  pull(
    lastDaysBlocks(server, state.daysAgo),
    paraMap(getName(server), 50),
    // paraMap(getBacklinks(id)),
    pull.collect((error, results) => {
      if (error) console.log(error)

      html.update(resultsEl, Posts(results))
    })
  )
}
