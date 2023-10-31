/**
 * On Message Create
 * @module events/messageCreate
 */

const Guild = require('../../../models/guildModel');
const User = require('../../../models/userModel');
const Message = require('../../../models/messageModel');

const { createGuild, createUser } = require('../utils/createModel');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;

        let guild = await Guild.findOne({ guild_id: message.guild.id });
        if (!guild) guild = await createGuild(message.guild);

        let user = await User.findOne({ user_id: message.author.id, guild: guild._id });
        if (!user) user = await createUser(message.author, message.guild);

        const msg = await Message.create({
            message_id: message.id,
            message_content: message.content,
            user: user._id,
            guild: guild._id
        });

        guild.messages.push(msg._id);
        await guild.save();

    }
}