const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch(error) {
        console.log(error);
        throw new Error('Error when initializing MongoDB');
    }
}

module.exports = {
    dbConnection
}