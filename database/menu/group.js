const group = (prefix, botName, ownerName) => {
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
┷┯*〈 𝐸𝑋𝐶𝐿𝑈𝑆𝐼𝑉𝑂𝑆 𝐷𝐸 𝐺𝑅𝑈𝑃𝑂𝑆 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Abrir grupo
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Cerrar grupo
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promocionar personas para que sean grupos de administradores
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : Degradar a las personas para que sean miembros del grupo
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mencionar a todos los miembros
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mencionar a todos los miembros
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mencionar a todos los miembros
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mencionar a todos los miembros
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mencionar a todos los miembros
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Añadir miembros
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : Expulsar un miembro del grupo 
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Mostrar administradores de grupo de lista
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Mostrar enlace de grupo
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Dile al bot que abandone el grupo
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Activación / desactivación de la función de bienvenida
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Activación / desactivación de la función NSFW
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Eliminar mensaje de bot
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Activación / desactivación de la función Simih
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mencionarte
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Muestra quién es el propietario del grupo.
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.group = group
