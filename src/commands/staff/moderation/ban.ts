import { Command } from 'discord-akairo';
import { MessageEmbed } from 'discord.js'
import functions from '../../../functions/moderation'

export default class BanCommand extends Command {

    constructor() {
        super('ban', {
            aliases: ['ban', 'leaveservernow', 'banish', 'byebye', 'murder', 'assassinate'],
            args: [
                {
                    id: 'member',
                    type: 'member'
                },
                {
                    id: 'reason',
                    type: 'string',
                    match: 'restContent',
                    default: 'No reason given.'
                }
            ],
            clientPermissions: ['BAN_MEMBERS', 'EMBED_LINKS'],
            userPermissions: ['BAN_MEMBERS'],
            channel: 'guild'
        });
    }

    async exec(message, args) {

        functions.ban(args.member, args.reason, message.author, message)

    }
}
