const wibu = (prefix, botName, ownerName) => {
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
┷┯*〈 𝐼𝑀𝐴𝐺𝐸𝑁𝐸𝑆 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Buscar Neonime
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Imagen de Pokémon al azar
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Imagen aleatoria de Loli
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Imagen aleatoria de Waifu
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Imagen de anime aleatoria
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Imagen aleatoria de Husbu
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Imagen aleatoria de Husbu2
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Enviar nombre de anime y escena corta
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Imagen aleatoria de Nekonime
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.wibu = wibu
