const { check } = require('express-validator')

exports.validatorMovie = [
    check('dateDay').custom((dateDay) => {
        if (dateDay > Date.now()) {
          throw new Error(
            'End date of project must be after start date')
        }
        return true
      }),
    // check('movieId').exists()
]