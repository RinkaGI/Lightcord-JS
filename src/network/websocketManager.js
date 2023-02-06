const WebSocket = require('ws');
const API = require('../constants/api');
const OpCodes = require('../constants/opcode');

const colors = require('colors');

module.exports = class WebSocketManager {
    constructor(token, intents) {
        this.token = token;
        this.intents = intents;
        this.interval = 0;

        this.ws = new WebSocket(API.GATEWAY);

        this.identifyPayload = {
            op: OpCodes.Identify,
            d: {
                token: this.token,
                intents: this.intents,
                properties: {
                    $os: "linux",
                    $browser: "lightcord",
                    $device: "lightcord"
                }
            }
        }

        this.heartbeatPayload = {
            op: OpCodes.Dispatch,
            d: null
        }
    }

    heartbeat(ms) {
        return setInterval(() => {
            this.ws.send(JSON.stringify({
                op: OpCodes.Heartbeat,
                d: null
            }))
        }, ms)
    } 

    async connect() {
        try {

            this.ws.on('open', () => {
                this.ws.send(JSON.stringify(this.identifyPayload))
            })

            this.ws.on('message', (data) => {
                let payload = JSON.parse(data);

                const {t: event, s, op, d} = payload;

                switch (op) {
                    case OpCodes.Hello:
                        const { heartbeat_interval } = d;

                        this.interval = this.heartbeat(heartbeat_interval)
                        break;
                }

                this.event = event

                switch (event) {
                    case 'READY':
                        console.log('-- BOT READY --'.bgCyan)
                    default:
                        return
                }
            })
        } catch (err) {
            console.error(err)
        }
    }
}