// RECODE ALYAAXZY

let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `Total Fitur dari 𝘈𝘳𝘪𝘦𝘛𝘶𝘣𝘦 𝘉𝘰𝘵 saat ini: ${totalf}`,m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler
