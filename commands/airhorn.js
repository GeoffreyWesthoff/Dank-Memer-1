exports.run = function (client, msg, args) {
    if (!msg.member.voiceChannel) {
        msg.react("❌").then(()=> {
            msg.reply("join a voice channel fam")
        })
    } else {
        if (!client.voiceConnections.get(msg.guild.id)) {
            msg.react("👌")
            msg.member.voiceChannel.join().then(conn => {
                conn.playFile("./assets/horn.mp3")
                conn.player.dispatcher.once("end", () => {
                    conn.channel.leave()
                })
            }).catch(e => {
                msg.reply("Couldn't join your voicechannel ¯\_(ツ)_/¯")
                console.log(`${new Date()}: ${e.message}`)
            })

        } else {
            msg.reply("I only have one airhorn, dude.")
            msg.react("❌")
        }
    }

}