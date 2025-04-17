import { Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
  // ボット自身のメッセージは無視
  if (message.author.bot) return

  // メンションされたら反応
  if (message.mentions.has(client.user)) {
    message.reply('ちょ待てよ')
  }
})
console.log("TOKEN:", process.env.DISCORD_TOKEN)
client.login(process.env.DISCORD_TOKEN)