exports.run = (bot, message, args) => {
    if (message.author.id !== message.guild.ownerID) {
        message.channel.send("Only the server owner can set up Movie Knight!")
        return
    }
    message.channel.send({
        "embed": {
            "title": "__**Movie Knight setup**__",
            "description": "\nTo set up Movie Knight, the owner of the server (probably you!) needs to provide a few pieces of information such as movie night role ID, movie night channel ID, and moderator role ID about the server for customized functionality.\n\n If you do not have a movie night channel, movie list channel, or a movie night role, take a few moments to create these. A basic text channel and basic role is all the bot requires! A movie night text channel category is even better!\n\n To continue with setup, type the following commands along with requested information.",
            "color": 10973164,
            "fields": [{
                    "name": "`~setMovieRole [ID]`",
                    "value": "Ex: `~setMovieRoleID 5976321014765`\n\nThis command tells the bot which role to give and remove from users, as well as the role to mention for events like polls!\n\nTo find this role ID, type `\\@[role name]` in any channel. Capitalization and spacing is important, and role must be mentionable! (Ex: `\\@Movie Night`) Your message will look something like this: `<@&429041133604306955>` The role ID is the number between `<@&` and `>`\n"
                },
                {
                    "name": "`~setMovieModRole [ID]`",
                    "value": "Ex:`~setMovieModRoleID 484131997441378`\n\nThis command tells the bot the role ID of your moderators. This could be moderators for the whole server or just moderators for the movie night channel. This will allow moderators to modify the movie list, such as removing a movie from the list once it is watched!\n\nTo find this role ID, type `\\@[role name]` in any channel. Capitalization and spacing is important, and role must be mentionable! (Ex: `\\@Movie Mods`) Your message will look something like this: `<@&429041133604306955>` The role ID is the number between `<@&` and `>`"
                },
                {
                    "name": "`~setMovieChannel [ID]`",
                    "value": "Ex: `~setMovieChannelID 47973297433694`\n\nThis command tells the bot which channel to read commands and conduct polls in! This could be a dedicated movie night channel, or just your general channel.\n\nTo find this role, turn on Discord developer mode ([guide here](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-server-ID-)) and right click the channel in the channel list and select \"Copy ID\""
                },
                {
                    "name": "`~setMovieListChannel [ID]`",
                    "value": "Ex: `~setMovieListChannelID 1797321454833694`\n\nThis command tells the bot which channel to put list entries into. A channel in which only the bot can post is ideal (Give bot role permission to send messages in this channel). The list can get long and it would take up too much space as a pin or recurring command in an active channel.\n\nTo find this role, turn on Discord developer mode ([guide here](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-server-ID-)) and right click the channel in the channel list and select \"Copy ID\""
                },
                {
                    "name": "`~setMoviePrefix [prefix]`",
                    "value": "Ex: `~setMoviePrefix !`\n\nThis commannd allows you to change the prefix of Movie Knight's commands (The default prefix is `~`). If you have multiple bots on the server, you can give Movie Knight a unique prefix to prevent bot confusion! This can be whatever you like, but non-letter, non-number characters such as @, *, ^, or &, work best."
                },
                {
                    "name": "`~setMovieCooldown [days]`",
                    "value": "Ex: `~setMovieCooldown 1`\n\nThis commannd allows you set a cooldown on adding a movie to the list for users. This prevents spam and allows everyne a change to have their movie be chosen for the poll! If you do not want a cooldown, use `0`. Set up is complete!"
                }
            ]
        }
    })
}