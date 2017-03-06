let mongoose = require('mongoose');
let schema = mongoose.Schema;
exports = new schema({
    name: String,
    age: Number,
    authority: Number,
    meta: {
        createAt: Date,
        default: Date.now()
    }
})
