const islam = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 29
   ┠≽ *Canal* : https://youtube.com/channel/UCqCaZ_SEhSykF3-PR5os7YA
   ╿
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
┷┯*〈 𝐼𝑆𝐿𝐴𝑀 〉*
   ╽
   ┠≽ *${prefix}quran*
   ┃ *Desc* : Envío de versículos coránicos al azar
   ┠──────────────╼
   ┠≽ *${prefix}jsholat* <area>
   ┃ *Desc* :  Envío de información sobre el horario de oración
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.islam = islam
