const express = require('express');
const { 
    getAllBootcamps,
    getOneBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius
 } = require('../controllers/bootcamps')

// Include other resources routes
const courseRouter = require('./courses')

const router = express.Router()

// Re-route into other resource routers
router
.use('/:bootcampId/courses', courseRouter)

router
.route('/')
.get(getAllBootcamps)
.post(createBootcamp);

router
.route('/:id')
.get(getOneBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);

router
    .route('/radius/:zipcode/:distance')
    .get(getBootcampsInRadius)


module.exports = router