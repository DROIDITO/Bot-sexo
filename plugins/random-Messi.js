import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://chat.whatsapp.com/CkA0gnGz99l6fJgTbIvUBH/master/src/hades/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*Messi*`, m)}
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(messi)$/i
handler.register = true
handler.limit = 3
export default handler
