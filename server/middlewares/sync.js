const AsyncRequestError = require('../errors').AsyncRequestError

const sync = (router) => [
  (req, res, next) => {
    if (req.xhr) {
      throw AsyncRequestError
    }
    return next()
  },
  router,
  (error, req, res, next) => {
    if (error instanceof AsyncRequestError) {
      return next()
    }

    return next(error)
  }
]

module.exports = sync