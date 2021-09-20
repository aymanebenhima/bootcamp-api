const express = require('express');
const { 
    getAllBootcamps,
    getOneBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
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



module.exports = router