const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({

    message_id: {type: String, required: true},
    message_content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    guild: {type: Schema.Types.ObjectId, ref: 'Guild'},

    timestamp: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Message', messageSchema);
