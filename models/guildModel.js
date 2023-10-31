const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guildSchema = new Schema({

    guild_id: {type: String, required: true},
    guild_name: {type: String, required: true},

    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    trends: [{type: Schema.Types.ObjectId, ref: 'Trend'}],

    timestamp: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Guild', guildSchema);
