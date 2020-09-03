const SyncRequestError = require('../errors').SyncRequestError

const async = (router) => [
  (req, res, next) => {
    if (!req.xhr) {
      throw SyncRequestError
    }
    return next()
  },
  router,
  (error, req, res, next) => {
    if (error instanceof SyncRequestError) {
      return next()
    }

    return next(error)
  }
]

module.exports = async