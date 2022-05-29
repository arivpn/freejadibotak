//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Emoney 〕
├ GoPay: 088245009287 ☞𝘈𝘳𝘪𝘦
├ Dana: 088245009287 ☞𝘈𝘳𝘪𝘦
├ Pulsa: 088245009287 ☞𝘈𝘳𝘪𝘦
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
