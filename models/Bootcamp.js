const mongoose = require('mongoose'),
    Schmea = mongoose.Schema;

const BootcampSchema = new Schmea({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        unique: true,
        maxLength: [50, 'Name can not be more than 50 characters'],
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a name'],
        maxLength: [500, 'Name can not be more than 500 characters']
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    phone: {
        type: String,
        maxLength: [20, 'Phone number can not be longer than 20 characters']
    },
    email: {
        type: String,
        mathch: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2d sphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Numnber,
        min: [1, 'Rating minimum is 1'],
        max: [3, 'Rating can not be more than 3']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);