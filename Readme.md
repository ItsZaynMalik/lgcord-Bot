<h1 align="center">LGcord.Js</h1>

lgcord.js is a simple library for interacting with the Discord API. It is written in TypeScript and is designed to be easy to use and easy to understand.

## Installation

```bash
npm install lgcord.js
```

## Example

```js
const { Client, INTENTS } = require("lgcord.js");

const client = new Client([
  INTENTS.GUILDS,
  INTENTS.GUILD_MESSAGES,
  INTENTS.GUILD_MESSAGE_REACTIONS,
]);

client.on("ready", (ready) => {
  console.log(`Logged in as ${ready.user.username}`);
});

client.login("bot token");
```

# Events Available:

- messageCreate _reply to a message or get info a message sent/receieved by the bot_
- messageDelete _get info of a message when deleted_
- messageUpdate _get info of a message if it gets updated/edited_

_MORE EVENTS DOCS WILL BE ADDED_

# Examples :

- Embed Example

```js
const { DiscordEmbed } = require("lgcord.js");

let embed = new DiscordEmbed()
  .setTitle("Hello World")
  .setColor("Color")
  .setDescription("Bot using lgcord.js")
  .setFooter("Footer")
  .setTimestamp();

  message.reply({
  embeds: [embed],
});
```

- Button Example

```js
const {
  DiscordMessageActionRow,
  DiscordMessageButton,
  DiscordButtonStyle,
} = require("lgcord.js");

let row = new DiscordMessageActionRow().addComponents(
  new DiscordMessageButton()
    .setStyle(DiscordButtonStyle.PRIMARY)
    .setLabel("LGCordjs")
    .setCustomId("dksdk")
);

message.reply({
  components: [row],
});
```

# Support me!!

Donate to my [Patreon](patreon.com/dhananjayme) or [Ko-fi](ko-fi.com/dhananjayme)
