const express = require('express')
const router = express.Router()
const request = require('request')

router.use('/api', (req, res) => {

  const API_URL = ''

  let options = {
    method: req.method,
    url: API_URL + req.url,
    json: req.body
  }

  req.pipe(request(options)).pipe(res)

})

/* GET home page. */
router.get('/:key?', (req, res) => {
  res.render('index', { title: 'Express' })
})

module.exports = router
