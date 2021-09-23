const express = require('express');
const { 
    getAllCourses,
    getOneCourse,
    createCourse,
    updateCourse,
    deleteCourse
 } = require('../controllers/courses')
const router = express.Router({ mergeParams: true })

router
.route('/')
.get(getAllCourses)
.post(createCourse);

router
.route('/:id')
.get(getOneCourse)
.put(updateCourse)
.delete(deleteCourse);



module.exports = router