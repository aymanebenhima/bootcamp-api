const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Course = require("../models/Course");
const Bootcamp = require("../models/Bootcamp");

// @desc    Get all bootcamps
// @route   GET /api/v1/courses
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
exports.getAllCourses = asyncHandler(async (req, res, next) => {
    let query
  
    if(req.params.bootcampId) {
        query = Course.find({ bootcamp: req.params.bootcampId })
    } else {
        query = Course.find().populate({
          path: 'bootcamp',
          select: 'name description'
        })
    }

    const courses = await query
  
    res
      .status(200)
      .json({ 
        success: true,
        count: courses.length,
        data: courses
      });
  });

// @desc    Get single course
// @route   GET /api/v1/courses
// @access  Public
exports.getOneCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: 'bootcamp',
    select: 'name description'
  })
  if (!course)
    return next(
      new ErrorResponse(`Course not found with id of ${req.params.id}`, 404)
    );
  res.status(200).json({ success: true, data: course });
});

// @desc    Add new course
// @route   POST /api/v1/bootcamps/:bootcampId/courses
// @access  Private
exports.createCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId

  const bootcamp = await Bootcamp.findById(req.params.bootcampId)
  if (!bootcamp)
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.bootcampId}`, 404)
    );
    const course = await Course.create(req.body)
  res.status(200).json({ success: true, data: course });
});

// @desc    Update course by Id
// @route   PUT /api/v1/course/:id
// @access  Private
exports.updateCourse = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id)
  if (!course)
    return next(
      new ErrorResponse(`Course not found with id of ${req.params.id}`, 404)
    );

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!course) {
    return next(
      new ErrorResponse(`Course not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: course });
});

// @desc    Delete course by Id
// @route   DELETE /api/v1/courses
// @access  Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findByIdAndDelete(req.params.id).populate({
    path: 'bootcamp',
    select: 'name description'
  })
  if (!course) {
    return next(
      new ErrorResponse(`Course not found with id of ${req.params.id}`, 404)
    );
  }

  course.remove()

  res.status(200).json({ success: true, data: {} });
});