const music = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 29
┯┷ *〈 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalles del bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuario bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos los usuarios de chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar la velocidad del bot de conexión
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Informar de un error al propietario del bot
╿
┷┯〈 𝑀𝑈𝑆𝐼𝐶𝐴 〉*
   ╽
   ┠≽ *${prefix}play* <music_name>
   ┃ *Desc* : Reproducir audio de música
   ┠──────────────╼
   ┠≽ *${prefix}joox* <music_name>
   ┃ *Desc* : Reproducir música Joox
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <music_name>
   ┃ *Desc* : Buscar letras de música
   ┠──────────────╼
   ┠≽ *${prefix}chord* <music_name>
   ┃ *Desc* : Buscar letras de canciones de acordes
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.music = music
