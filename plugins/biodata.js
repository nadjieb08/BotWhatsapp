let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*

*Nama* : nadjieb
*Umur* : 14
*Kelas* : 2 Smp
*Status* : Private

*SOSIAL MEDIA*

*instagran* Private
*Facebook* : Private
*Chanel Youtube* : Jibb Aja Lah
*Gmail* : nadjiebahmad8@gmail.com
*Github* : https://github.com/PlayyBoys

_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Iyann')).buffer(), ext, 'Recoded By Iyann', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
