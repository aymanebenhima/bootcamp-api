const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load envs vars
dotenv.config({ path: './config/config.env' })

// Load models
const Bootcamp = require('./models/Bootcamp')
const Course = require('./models/Course')

// Connect to db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Read JSON files
const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
)
const courses = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8')
)

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps)
        await Course.create(courses)

        console.log('Data imported successfuly...'.green.inverse);
        process.exit();
    } catch (err) {
        console.log(err)
    }
}

// Delete data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();
        await Course.deleteMany();
        
        console.log('Data Destroyed successefuly...'.red.inverse)
        process.exit()
    } catch (error) {
        console.log(err)
    }
}

if(process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}