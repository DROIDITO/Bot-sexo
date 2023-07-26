let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭─「➻❥ *owner* ➻❥」
│➯ ⫷᭄©𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃﹏✍
│➯Wa.me/50258487658 (CREADOR)
│➯Wa.me/50258487658 (CREADOR) 
│➯Wa.me/50258487658 (CREADOR)
│➯Wa.me/50237148189 (CREADOR)
╰───────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com/CkA0gnGz99l6fJgTbIvUBH` },
'mimetype': `application/${document}`,
'fileName': `⫷᭄𝐃𝐑𝐎𝐈𝐃-𝐁𝐎𝐓﹏✍`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com/CkA0gnGz99l6fJgTbIvUBH',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://vm.tiktok.com/ZM2pR8VmW/' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
handler.register = true
export default handler
