const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923444844060";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923444844060";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_58_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZRa24vM2pvSGNiMU5JZkJib0R6ZUVXenZHNFd5dGw5YWZqd2ZwUUdIVk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDQ0ODQ0MDYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDM0Y4Q0ZCQzg3RTU4QTBGMzk1OEVGOTZBNkIzODU2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwMDU5MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0NDQ4NDQwNjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQwN0IzQ0MzQ0U0Q0Q0OUY0MjYzQThCRjNBREIyNjcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTAwNTkyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2MUdIX1JEMFR4ZTU2bEQ2R1JWSjBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1OGIzYzQ4LWI0YzEtNDRhNi05Mjc0LWI4NDA4YmNjNDFjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICA0OSxcbiAgICAgIDQ3LFxuICAgICAgMTUyLFxuICAgICAgMjYsXG4gICAgICAxNzMsXG4gICAgICAxODAsXG4gICAgICA0MCxcbiAgICAgIDc2LFxuICAgICAgNzQsXG4gICAgICAyMjMsXG4gICAgICAxNDcsXG4gICAgICA0NyxcbiAgICAgIDIxLFxuICAgICAgODYsXG4gICAgICAyNTMsXG4gICAgICAxMTksXG4gICAgICAxMDEsXG4gICAgICAxNTgsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAyMDMsXG4gICAgICAxMzgsXG4gICAgICA5LFxuICAgICAgMTQxLFxuICAgICAgMTksXG4gICAgICAxNTUsXG4gICAgICAzMSxcbiAgICAgIDI2LFxuICAgICAgMixcbiAgICAgIDk3LFxuICAgICAgNDUsXG4gICAgICAxMDUsXG4gICAgICAyNTEsXG4gICAgICAyNTEsXG4gICAgICAxMjUsXG4gICAgICAxNTIsXG4gICAgICA3MixcbiAgICAgIDE5LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJWOEVQQjVIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NDQ4NDQwNjA6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHbG9iYWxUZWNoSW5mb1wiLFxuICAgIFwibGlkXCI6IFwiNDMwNDAzMzcwNzYzMjM6NzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm5QeDVrQkVOMmJ0TGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bGs1dndyMURtWlVJVmdJZXZkbXhLZHFlMU1sclRZZlhZK0tMbkRSTG5jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5VS3dWMW9tYWlOcEtxbi9sQmhaOWdybGFjaXViWkc4VSs5Q2RJWjFITHJ3ZmpsTU8rdnNFTGs4cnh3NjNzSmFDdzhZRTJLMUlpa2Q1ZFErVitVckF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZJZllUY1FBVWk0MDJFSXpuVkpZZUpvNk10WTVPSjIzWllxVXN0anJ2R0N2Y09wYkNkNUpmVjlOSlRWLy9qZWpIUm5yY2gySzdMRmFTUEsrT3BnbER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ0NDg0NDA2MDo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDA1OTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT096XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPT3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoZjlaUUR1eTFHd0t6R3BmdUdlVXd5cjY2TmhhUi9McVVibHFBdGtaNDFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMjAzNzcyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwODI4NDYzNDk0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
