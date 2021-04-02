const kerang = (prefix, botName, ownerName) => {
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
┷┯ *〈 𝑀𝐴𝐺𝐼𝐴 〉*
   ╽
   ┠≽ *${prefix}apakah* <optional>
   ┃ *Desc* : Preguntar es
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <optional>
   ┃ *Desc* : Preguntar Can
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <optional>
   ┃ *Desc* : Preguntar cuando
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmisión de caracteres aleatoriamente
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Envío aleatorio de pasatiempos
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : Que guapo
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : Qué hermoso
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.kerang = kerang
