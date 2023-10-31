const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    user_id: {type: String, required: true},
    user_name: {type: String, required: true},
    guild: {type: Schema.Types.ObjectId, ref: 'Guild'}

});

userSchema.pre('save', async function (next) {

    // If the user has just been created
    if (this.isNew) {
        const guild = this.guild
        guild.users.push(this._id);
        await guild.save();
    }

    next();

});

module.exports = mongoose.model('User', userSchema);


