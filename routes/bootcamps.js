const express = require('express');
const { 
    getAllBootcamps,
    getOneBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius,
    uploadPhotoBootcamp
 } = require('../controllers/bootcamps')

 const Bootcamp = require('../models/Bootcamp')
 const getResults = require('../middleware/getResults')

// Include other resources routes
const courseRouter = require('./courses')

const router = express.Router()

// Re-route into other resource routers
router
.use('/:bootcampId/courses', courseRouter)

router
.route('/')
.get(getResults(Bootcamp, 'courses'), getAllBootcamps)
.post(createBootcamp);

router
.route('/:id')
.get(getOneBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);

router
.route('/:id/photo')
.put(uploadPhotoBootcamp)

router
    .route('/radius/:zipcode/:distance')
    .get(getBootcampsInRadius)


module.exports = router