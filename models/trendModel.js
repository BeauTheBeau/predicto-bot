const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is the schema for a trend. A trend is a collection of messages that share a common keyword.
// The trend_id is a unique identifier for the trend. The trend_name is the keyword that the trend is based on.

const trendSchema = new Schema({

    trend_id: {type: String, required: true},
    trend_name: {type: String, required: true},
    guild: {type: Schema.Types.ObjectId, ref: 'Guild'},

    keywords: [{type: String, required: true}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    score: {type: Number, default: 0},

    timestamp: {type: Date, default: Date.now},
    end_timestamp: {type: Date, default: null}

});

module.exports = mongoose.model('Trend', trendSchema);
