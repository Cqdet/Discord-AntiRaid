import Discord from 'discord.js'

import { ChannelAntiRaid } from './Anti-Raid/Detection/ChannelMessageRaidTask'
import { SingleAntiRaid } from './Anti-Raid/Detection/SingleMessageRaidTask'
import { MessageLengthRaid } from './Anti-Raid/Detection/MessageLengthRaidTask'

const client = new Discord.Client()
const prefix = "?" // You can just use an external config file
const Token = "89342089032uifhkfdskh9hkllkd" // You can just use an external config file


const ChannelHandler = new ChannelAntiRaid(prefix)
const SingleMessageHandler = new SingleAntiRaid(prefix)
const MessageLengthHandler = new MessageLengthRaid(prefix)

client.on('ready', async() => {
    console.log("Bot is ready")
})

client.on('message', async(message) => {
    //Put your command handler here
    ChannelHandler.handleMessage(message)
    SingleMessageHandler.handleMessage(message)
    MessageLengthHandler.handleMessage(message)

})
