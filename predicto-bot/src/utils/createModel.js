/**
 * @param {string} modelPath
 */

const Guild = require('../../../models/guildModel');
const User = require('../../../models/userModel');
const Message = require('../../../models/messageModel');

/**
 * @name createGuild
 * @param {Object} guild
 * @returns {Promise<Object>}
 */

async function createGuild(guild) {

    const newGuild = await Guild.create({
        guild_id: guild.id,
        guild_name: guild.name,
        users: []
    });

    await newGuild.save();
    return newGuild;

}

/**
 * @name createUser
 * @param {Object} user The Discord user object
 * @param {Object} guild The Discord guild object
 * @returns {Promise<Object>}
 */

async function createUser(user, guild) {

    // Check if the guild exists
    const guildExists = await Guild.findOne({ guild_id: guild.id });
    if (!guildExists) await createGuild(guild);

    const newUser = await User.create({
        user_id: user.id,
        user_name: user.username,
        guild: await Guild.findOne({ guild_id: guild.id })
    });

    await newUser.save();
    return newUser;

}


module.exports = { createGuild, createUser };


