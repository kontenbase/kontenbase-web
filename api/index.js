/* eslint-disable global-require */
const { createRequestHandler } = require('@remix-run/vercel')

module.exports = createRequestHandler({
  build: require('./build'),
})
