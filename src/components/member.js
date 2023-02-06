module.exports = class Member {
    constructor(payload) {
        try {
            this.roles = payload['roles']
            this.premiumSince = payload['premium_since']
            this.pending = payload['pending']
            this.nick = payload['nick']
            this.isMute = payload['mute']
            this.joinedAt = payload['joined_at']
            this.flags = payload['flags']
            this.isDeaf = payload['deaf']
            this.communicationDisabledUntil = payload['communication_disabled_until']
            this.avatar = payload['avatar']
        } catch {
            return '';
        }
    }
}