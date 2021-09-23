const express = require('express');
const { 
    getAllCourses,
    getOneCourse,
    createCourse,
    updateCourse,
    deleteCourse
 } = require('../controllers/courses')

 const Course = require('../models/Course')

 const getResults = require('../middleware/getResults')

 const router = express.Router({ mergeParams: true })

router
.route('/')
.get(getResults(Course,{
    path: 'bootcamp',
    select: 'name description'
  }), getAllCourses)
.post(createCourse);

router
.route('/:id')
.get(getOneCourse)
.put(updateCourse)
.delete(deleteCourse);



module.exports = router