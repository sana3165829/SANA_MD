const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ꜱᴀɴᴀ_ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀɴᴀ ᴋʜᴀɴ👨🏻‍💻*

*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖ꜱᴀɴᴀ_ᴍᴅ❖*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺ꜱᴀɴᴀ ᴋʜᴀɴ࿐*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

🤴 OWNER-CMD 🤴 ‎• ]*
*╭┈───────────────•*
*┋*👑 *${prefix}ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋*👑 *${prefix}sᴇᴛᴛɪɴɢs*
*┋*👑 *${prefix}ᴏᴡɴᴇʀ*
*┋*👑 *${prefix}ʀᴇᴘᴏ*
*┋*👑 *${prefix}ꜱʏꜱᴛᴇᴍ*
*┋*👑 *${prefix}ꜱᴛᴀᴛᴜꜱ*
*┋*👑 *${prefix}ʙʟᴏᴄᴋ*
*┋*👑 *${prefix}ᴜɴʙʟᴏᴄᴋ*
*┋*👑 *${prefix}sʜᴜᴛᴅᴏᴡɴ*
*┋*👑 *${prefix}ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋*👑 *${prefix}sᴇᴛᴘᴘ*
*┋*👑 *${prefix}ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋*👑 *${prefix}ᴊɪᴅ*
*┋*👑 *${prefix}ɢᴊɪᴅ*
*┋*👑 *${prefix}ʀᴇꜱᴛᴀʀᴛ*
*┋*👑 *${prefix}getvar* <allvars>
*┋*👑 *${prefix}setvar <true/false>*
*╰┈───────────────•*
*[ • 🔎 SEARCH-CMD 🔍 ‎• ]*
*╭┈───────────────•*
*┋*🔍 *${prefix}ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}ʏᴛᴀ <ᴜʀʟ>*
*┋*🔍 *${prefix}ʟᴏʟɪ <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}ᴍᴏᴠɪᴇɪɴғᴏ <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}ɪᴍɢ <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
*╰┈───────────────•*
*[ • 🧠 AI-CMD 🧠  ‎• ]*
*╭┈───────────────•*
*┋*🧠 *${prefix}ɢᴘᴛ <ᴛᴇxᴛ>*
*┋*🧠 *${prefix}sarkar <ᴛᴇxᴛ>*
*┋*🧠 *${prefix}ʙᴏᴛ <ᴛᴇxᴛ>*
*╰┈───────────────•*
*[ • 🚻 GROUP-CMD 🚻 ‎• ]*
*╭┈───────────────•*
*┋*⛔️ *${prefix}ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋*🤝 *${prefix}ᴀᴅᴅ*
*┋*🦵 *${prefix}ᴋɪᴄᴋ*
*┋*👋 *${prefix}sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋*🤗 *${prefix}sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋*👨👑 *${prefix}ᴘʀᴏᴍᴏᴛᴇ*
*┋*👑👨 *${prefix}ᴅᴇᴍᴏᴛᴇ*
*┋*🎳 *${prefix}ᴛᴀɢᴀʟʟ*
*┋*⏬️ *${prefix}ɢᴇᴛᴘɪᴄ*
*┋*♻️ *${prefix}ɪɴᴠɪᴛᴇ*
*┋*❓️ *${prefix}ʀᴇᴠᴏᴋᴇ*
*┋*✅️ *${prefix}ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋*🔱 *${prefix}ᴀʟʟʀᴇǫ*
*┋*🔇 *${prefix}ᴍᴜᴛᴇ*
*┋*🔊 *${prefix}ᴜɴᴍᴜᴛᴇ*
*┋*🔒 *${prefix}ʟᴏᴄᴋɢᴄ*
*┋*🔓 *${prefix}ᴜɴʟᴏᴄᴋɢᴄ*
*┋*😞 *${prefix}ʟᴇᴀᴠᴇ*
*┋*🏷 *${prefix}ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋*♻️ *${prefix}ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋*🫂 *${prefix}ᴊᴏɪɴ*
*┋*👣 *${prefix}ʜɪᴅᴇᴛᴀɢ*
*┋*ℹ️ *${prefix}ɢɪɴғᴏ*
*┋*🕛 *${prefix}ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋*🕛 *${prefix}ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋*🕛 *${prefix}ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋*ℹ️ *${prefix}sᴇɴᴅᴅᴍ*
*╰┈───────────────•*
*[ • ⚠️ INFO-CMD ⚠️ ‎• ]*
*╭┈───────────────•*
*┋*📃 *${prefix}ᴍᴇɴᴜ*
*┋*🧠 *${prefix}ᴀʙᴏᴜᴛ*
*┋*📜 *${prefix}sᴄʀɪᴘᴛ*
*┋*📂 *${prefix}ʀᴇᴘᴏ*
*┋*🧬 *${prefix}ᴀʟɪᴠᴇ*
*┋*📃 *${prefix}ʙᴏᴛɪɴꜰᴏ*
*┋*🗿 *${prefix}ꜱᴛᴀᴛᴜꜱ*
*┋*💸 *${prefix}ꜱᴜᴘᴘᴏʀᴛ*
*┋*📍 *${prefix}ᴘɪɴɢ*
*┋*📍 *${prefix}ᴘɪɴɢ2*
*┋*🛠 *${prefix}ꜱʏꜱᴛᴇᴍ*
*╰┈───────────────•*
*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*
*╭┈───────────────•*
*┋*⏬️ *${prefix}ғʙ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴛᴛ<ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}ᴘʟᴀʏ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}ᴠɪᴅᴇᴏ2 <ᴜʀʟ>*
*┋*⏬️ *${prefix}ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}ᴀᴘᴋ <ɴᴀᴍᴇ>*
*┋*⏬️ *${prefix}ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
*┋*⏬️ *${prefix}ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
*┋*⏬️ *${prefix}ʙᴀɪsᴄᴏᴘᴇ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ɢɪɴɪsɪsɪʟᴀ <ᴛɪᴛᴛʟᴇ>*
*╰┈───────────────•*
*[ • ♻️ CONVERTER-CMD ♻️ ‎• ]*
*╭┈───────────────•*
*┋*😝 *${prefix}sᴛɪᴄᴋᴇʀ*
*┋*🈯️ *${prefix}ᴛʀᴛ <ᴛᴇxᴛ>*
*┋*🔊 *${prefix}ᴛᴛs <ᴛᴇxᴛ>*
*╰┈───────────────•*
*[ • ♾️ RANDOM-CMD ♾️ ‎• ]*
*╭┈───────────────•*
*┋*👑 *${prefix}ᴋɪɴɢ*
*┋*🐶 *${prefix}ᴅᴏɢ*
*┋*💢 *${prefix}ᴀɴɪᴍᴇ*
*┋*💫 *${prefix}ᴀɴɪᴍᴇɢɪʀʟ*
*┋*💫 *${prefix}ᴀɴɪᴍᴇɢɪʀʟ1*
*┋*💫 *${prefix}ᴀɴɪᴍᴇɢɪʀʟ2*
*┋*💫 *${prefix}ᴀɴɪᴍᴇɢɪʀʟ3*
*┋*💫 *${prefix}ᴀɴɪᴍᴇɢɪʀʟ4*
*┋*💫 *${prefix}ᴀɴɪᴍᴇɢɪʀʟ5*
*╰┈───────────────•*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

┏━━━━━━━━━━━━━━━━━━━
*https://whatsapp.com/channel/0029VagcqzY1XquemrHOM51n*
┗━━━━━━━━━━━━━━━━━━━


> *POWERED BY SANA KHAN*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
