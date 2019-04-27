const express = require('express')
const router = express.Router()

/* GET - testing API. */
router.get('/', (req, res) => {
    res.send('API is working!')
})

module.exports = router