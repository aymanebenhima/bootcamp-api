// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getAllBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({
                success: true,
                msg: `Show all bootcamps`,
                hello: req.hello
            })
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getOneBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Show one bootcamp ${req.params.id}` })
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Create new bootcamp` })
}

// @desc    Update bootcamp by Id
// @route   PUT /api/v1/bootcamps
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Update bootcamp ${$req.params.id}` })
}

// @desc    Delete bootcamp by Id
// @route   DELETE /api/v1/bootcamps
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Delete bootcamp ${$req.params.id}` })
}
