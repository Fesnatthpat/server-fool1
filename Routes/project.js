const express = require('express')
const router = express.Router()
const { read, list, create, update, remove } = require('../Controllers/project')

// http://localhost:5000/api/project

router.get('/project', list)
router.get('/project/:id', read)
router.post('/project', create)
router.put('/project/:id', update)
router.delete('/project/:id', remove)


module.exports = router