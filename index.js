const {Client, MessageActionRow, MessageButton, Intents} = require("discord.js")
const client = new Client({ intents: 32767 })

client.on("ready", () => {
  console.log("Bot is on")
})

client.on("messageCreate", (message) => {
  if (message.content === "hey"){
    message.reply("Hi")
  }
  if (message.content === "!setverify"){
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('verify')
					.setLabel('Verify')
					.setStyle('SUCCESS'),
			);
    message.channel.send({ content: "Click to verify", components: [row]})
  }
})

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()){
    if(interaction.customId === "verify"){
      interaction.member.roles.add("Your role id");
      interaction.reply({ content: 'You are verified', ephemeral: true });
    }
  }
})

client.login("Your token)
