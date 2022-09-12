const mongoose = require('mongoose');

const User = mongoose.model('User',{
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

module.exports = {User}
