const MemberComponent = require('./member');
const AuthorComponent = require('./author');

module.exports = class Message {
    constructor(payload) {
        // console.log(payload['type'])
        try {
            this.type = payload['type']
            this.isTTS = payload['tts']
            this.timestamp = payload['timestamp']
            this.referencedMessage = payload['referenced_message']
            this.isPinned = payload['pinned']
            this.nonce = payload['nonce']
            this.mentions = payload['mentions']
            this.mentionRoles = payload['mention_roles']
            this.isMentioningEveryone = payload['mention_everyone']
            this.member = new MemberComponent(payload['member'])
            this.id = payload['id']
            this.embeds = payload['embeds']
            this.editedTimestamp = payload['edited_timestamp']
            this.content = payload['content']
            this.components = payload['components']
            this.channelID = payload['channel_id']
            this.author = new AuthorComponent(payload['author'])
            this.attachments = payload['attachments']
            this.guildID = payload['guild_id']
        } catch {
            return '';
        }
    }
}