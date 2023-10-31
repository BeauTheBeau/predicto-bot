const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    user_id: {type: String, required: true},
    user_name: {type: String, required: true},
    guild: {type: Schema.Types.ObjectId, ref: 'Guild'}

});

module.exports = mongoose.model('User', userSchema);


