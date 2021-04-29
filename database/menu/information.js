const information = (prefix, botName, ownerName) => {
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
┷┯ *〈 𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂𝑁 〉*
   ╽
   ┠≽ *${prefix}bahasa*
   ┃ *Desc* : Enviar código de idioma
   ┠──────────────╼
   ┠≽ *${prefix}kodenegara*
   ┃ *Desc* : Enviar código de país
   ┠──────────────╼
   ┠≽ *${prefix}kbbi* <question>
   ┃ *Desc* : Preguntando KBBI
   ┠──────────────╼
   ┠≽ *${prefix}fakta*
   ┃ *Desc* : Enviar un hecho aleatorio
   ┠──────────────╼
   ┠≽ *${prefix}infocuaca* <area>
   ┃ *Desc* : Enviar información meteorológica
   ┠──────────────╼
   ┠≽ *${prefix}infogempa*
   ┃ *Desc* : Envío de información sobre terremotos
   ┠──────────────╼
   ┠≽ *${prefix}covidcountry* <country>
   ┃ *Desc* : Envío de información de Covid-19
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.information = information
