const express = require('express');
const { 
    getAllBootcamps,
    getOneBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius
 } = require('../controllers/bootcamps')
const router = express.Router()

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