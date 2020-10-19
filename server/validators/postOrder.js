const { body, validationResult } = require('express-validator');

const postOrder = [
  body('name', 'Must cointains only charaters.').isAlpha(),
  body('name').isLength({ min: 2 }),

  body('phone', 'Must cointains valid mobile phone number').isMobilePhone(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json(Array.from(errors.array()));
    }

    return next()
  }
]

export default postOrder