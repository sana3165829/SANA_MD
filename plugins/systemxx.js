const config = require('../config');
const { cmd } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');
const fs = require('fs');
const path = require('path');

// Helper function to get a random image from assets folder
const getRandomImage = () => {
    const assetsPath = path.join(__dirname, '../sana_assessts'); // Path to your assets folder
    const images = fs.readdirSync(assetsPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    return images.length > 0 ? path.join(assetsPath, images[Math.floor(Math.random() * images.length)]) : null;
};

cmd({
    pattern: "cpu",
    react: "🔧",
    alias: ["uptime", "status", "runtime"],
    desc: "Check bot system status and uptime",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // System status information
        const statusMessage = `
╭─── *🔰 SYSTEM STATUS 🔰* ────╮
🌐 *Bot Name:* SANA-MD BOT  
🕒 *Uptime:* ${runtime(process.uptime())}  
💾 *RAM Usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB  
🖥️ *Hostname:* ${os.hostname()}  
👤 *Owner:* THOAID 
╰───────────────────────────╯
`;

        // Fetch a random image from assets folder
        const randomImagePath = getRandomImage();
        if (randomImagePath) {
            await conn.sendMessage(from, { image: { url: randomImagePath }, caption: statusMessage }, { quoted: mek });
        } else {
            await reply("⚠️ No images found in assets folder.");
        }

    } catch (e) {
        console.error(e);
        await reply("❌ Error retrieving system status.");
    }
});
