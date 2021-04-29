const xp = (prefix, botName, ownerName) => {
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
┷┯*〈 𝑁𝐼𝑉𝐸𝐿 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Comprueba tu nivel
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Habilitar / deshabilitar funciones de nivelación
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : XP de minería
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Habilitar / deshabilitar funciones de eventos
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}
--------------------------------
Note: Kamu bisa mengumpulkan xp dan menaikan levelmu dengan cara chat dengan siapapun di dalam grup yang telah di aktifkan fitur leveling.`
}
exports.xp = xp
