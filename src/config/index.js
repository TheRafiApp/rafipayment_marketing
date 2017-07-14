import _ from 'lodash'

const defaults = {
  debug: true,
  sentry: false,
  sentry_url: null,
  urls: {
    url: window.location.protocol + '//app.' + window.location.hostname
  }
}

const env = process.env.NODE_ENV
const env_config = require(`./env/${env}`).config

const config = _.merge(defaults, env_config)

export default config
