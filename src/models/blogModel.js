const mongoose = require("mongoose")
const blogScheme = new mongoose.Scheme({
    userName: {type: String,
        required: true
    },
    authorImage: {type: String,
        required: true
    },
    Blogtitle: {type: String,
        required: true
    },
    Subtitle: {type: String,
        required:true
    },
    Blogcontext: {type: String,
        require: true
    },
    Blogdate: {type: Date,
        require: true
    },
})

const BlodModel = mongoose.model('Blog', blogScheme)

mondule.exports = BlodModel;