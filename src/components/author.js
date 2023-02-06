module.exports = class Author {
    constructor(payload) {
        try {
            this.username = payload['username']
            this.publicFlags = payload['public_flags']
            this.id = payload['id']
            this.displayName = payload['display_name']
            this.discriminator = payload['discriminator']
            this.avatarDecoration = payload['avatar_decoration']
            this.avatar = payload['avatar']
        } catch {
            return '';
        }
    }
}