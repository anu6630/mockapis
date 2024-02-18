const mongoose = require('mongoose');

class AppDbClient {
    constructor(connectionString) {
        if (!connectionString) {
            throw new Error('Connection string is required');
        }
        this.connectionString = connectionString;
    }


    async connect() {
        await mongoose.connect(this.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async save(toSave){ //TODO: Not required
        await toSave.save();
    }

}

module.exports = AppDbClient