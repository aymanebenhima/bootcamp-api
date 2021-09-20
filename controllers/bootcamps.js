const Bootcamp = require('../models/Bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getAllBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res
            .status(200)
            .json({ success: true, count: bootcamps.length, data: bootcamps })
    } catch (err) {
        res
            .status(400)
            .json({ success: false, error: err.message })
    }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getOneBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if(!bootcamp)
            return res.status(400).json({ success: false})
        res
            .status(200)
            .json({ success: true, data: bootcamp })

    } catch (err) {
        res
            .status(400)
            .json({ success: false, error: err.message })
    }
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res
            .status(201)
            .json({ success: true, data: bootcamp })
        
    } catch (err) {
        res
            .status(400)
            .json({ success: false, error: err.message })
    }
}

// @desc    Update bootcamp by Id
// @route   PUT /api/v1/bootcamps
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!bootcamp) {
            return res.status(400).json({ success: false })
        }
        res
            .status(200)
            .json({ success: true, data: bootcamp })
        
    } catch (err) {
        res
        .status(400)
        .json({ success: false, error: err.message })
    }
}

// @desc    Delete bootcamp by Id
// @route   DELETE /api/v1/bootcamps
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        if(!bootcamp) {
            return res.status(400).json({ success: false })
        }
        res
            .status(200)
            .json({ success: true, data: {} })
        
    } catch (err) {
        res
        .status(400)
        .json({ success: false, error: err.message })
    }
}
