import { RichEmbed } from 'discord.js';
import { CommandDecorators as c, Client, Command, Message } from 'yamdbf';
import * as snek from 'snekfetch';

/**
 * Diablo Career Profile Command
 * @todo actually work on this.
 */
@c.aliases('d3', 'd3-career', 'diablo3')
@c.group('blizzard')
export class Diablo extends Command<Client> {
    public constructor() {
        super({
            name: 'diablo',
            desc: 'diablo 3 career profile',
            usage: `<prefix>d3 <name>`
        });
    }

    /**
     * Command action
     * @param {Message} message message object
     * @param args arguments
     */
    public action(message: Message, args: string[]): void {
        if (args[1]) return;
    }

    /**
     * Get battletag from Blizzard API
     * @param {string} battletag user battletag
     */
    private getProfile(battletag: string): Promise<string> {
        return;
    }
}
