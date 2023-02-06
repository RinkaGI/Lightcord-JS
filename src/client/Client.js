const WebSocketManager = require('../network/websocketManager');
const { EventEmitter } = require('node:events');
const ApiConst = require('../constants/api')
const tiny = require('tiny-json-http')
const {MessageComponent} = require('../components/message')

module.exports = class Bot extends EventEmitter {
    constructor(token, intents) {
        super();
        
        this.token = token;
        this.intents = intents;

        this.ws = new WebSocketManager(this.token, this.intents);
    }

    sendMessage(props, channelID) {
        let url = `${ApiConst.REST_API}/channels/${channelID}/messages`
        let payload = props;
        let header = {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${this.token}`
        }

        tiny.post({
            url: url,
            headers: header,
            data: payload
        })
    }

    run() {
        this.ws.connect()

        this.ws.ws.on('message', (data) => {
            let payload = JSON.parse(data);
            const {t: event, s, op, d} = payload;

            switch(this.ws.event) {
                // case 'MESSAGE_CREATE':
                //     this.emit(this.ws.event, d)
                default:
                    this.emit(this.ws.event, d)
            }
        })
    }
}