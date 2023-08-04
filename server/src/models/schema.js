const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    type: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const theaterOwnerSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

// Define Movie schema
const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
    Experience: { type: String, required: true },
    duration: { type: Number, required: true },
    Salary: { type: Number, required: true }
});

// Define Theater schema
const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image_url: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    Net_wortgh: { type: Number, required: true }
});

// Define Booking schema
const ApplicationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater', required: true },
    net_worth: { type: Number, required: true },
    vanacies: [{ type: Number, required: true }],
    Salary: { type: Number, default: Date.now },
    
});

// Create and export the corresponding models
const Users = mongoose.model('Users', userSchema);
const TheaterOwner = mongoose.model('TheaterOwner', theaterOwnerSchema);
const job = mongoose.model('Movie', jobSchema);
const company = mongoose.model('Theater', companySchema);
const Application = mongoose.model('Booking', ApplicationSchema);

module.exports = { Users, job, company, Booking, Application };
