import { Client, Command, Message, Time } from 'yamdbf';
import { RichEmbed, Guild } from 'discord.js';
import { EmbedCode } from '../../lib/Util';
import * as os from 'os';

const { version } = require('../../../package');

export default class extends Command<Client> {
    public constructor() {
        super({
            name: 'about',
            aliases: [ 'info' ],
            desc: 'About Ankh',
            usage: '[prefix]info',
            group: 'utils'
        });
    }

    public action(message: Message): void {
        const calltag: string = '``';

        const embed: RichEmbed = new RichEmbed()
            .setAuthor('Ankh', this.client.user.avatarURL)
            .setColor(EmbedCode.Profile)
            .setDescription(`Ankh v${version} is a multi-purpose WIP Discord bot.`)
            .addBlankField()
            .addField('Servers', this.client.guilds.size.toString(), true)
            .addField('Channels', this.client.channels.size.toString(), true)
            .addField('Users', this.client.guilds.map((guild: Guild) => guild.memberCount)
                .reduce((memA: number, memB: number) => memA + memB), true)
            .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`, true)
            .addField('Uptime', Time.difference(this.client.uptime * 2, this.client.uptime).toString(), true)
            .addField('Kernel', `${os.platform()} v${os.release()}`, true)
            .addBlankField()
            .addField('More information to follow', 'As Ankh is currently under development, expect more to be added here.', true)
            .addField('Help', `To see currently avaliable commands, type ${calltag}@${this.client.user.tag} help${calltag}.`, true)
            .setTimestamp();
        message.channel.send({embed: embed, disableEveryone: true});
    }
}
