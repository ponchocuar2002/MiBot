const logomaker = (prefix, botName, ownerName) => {
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
┷┯〈 𝐿𝑂𝐺𝑂 𝐶𝑅𝐸𝐴𝐷𝑂𝑅 〉*
   ╽
   ┠≽ *${prefix}ninjalogo* <text|text>
   ┃ *Desc* : Hacer el logotipo de Ninja
   ┠──────────────╼
   ┠≽ *${prefix}logowolf* <text|text>
   ┃ *Desc* : Hacer logotipo de lobo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf2* <text|text>
   ┃ *Desc* : Hacer Lobo Logo2
   ┠──────────────╼
   ┠≽ *${prefix}phlogo* <text|text>
   ┃ *Desc* : Hacer logotipo de PornHub
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo* <text>
   ┃ *Desc* : Hacer logotipo de neón
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo2* <text>
   ┃ *Desc* : Hacer Neon Logo2
   ┠──────────────╼
   ┠≽ *${prefix}lionlogo* <text|text>
   ┃ *Desc* : Hacer logotipo de león
   ┠──────────────╼
   ┠≽ *${prefix}jokerlogo* <text>
   ┃ *Desc* : Hacer logotipo de Joker
   ┠──────────────╼
   ┠≽ *${prefix}pubglogo* <text|text>
   ┃ *Desc* : Hacer logotipo de PUBG
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}`
}
exports.logomaker = logomaker
