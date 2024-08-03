const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_48_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOCxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVzM0UyUWE1Sk1RY29yTS9nQVM2MnpHVjFzVmQ1c1N0QVVucnErUFNoWUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1BZ3QzX3o1VHNDa0Z4cVJNSjY2SVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY0ZWY0ODUtN2Q2ZS00MWZlLTkzMTMtMWEwODM0NTYwYTNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTcsXG4gICAgICAyMjYsXG4gICAgICAxMzUsXG4gICAgICAxOTEsXG4gICAgICA5LFxuICAgICAgMTE4LFxuICAgICAgMzksXG4gICAgICAxNzMsXG4gICAgICAxODQsXG4gICAgICAxNDcsXG4gICAgICAxMDksXG4gICAgICAxMDUsXG4gICAgICAxMDQsXG4gICAgICAxMDIsXG4gICAgICAyMDEsXG4gICAgICAxNDcsXG4gICAgICAyNTUsXG4gICAgICAxOTksXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTE1LFxuICAgICAgNixcbiAgICAgIDkxLFxuICAgICAgMTMyLFxuICAgICAgMjEzLFxuICAgICAgMTQ4LFxuICAgICAgMTUwLFxuICAgICAgMTcxLFxuICAgICAgMjEsXG4gICAgICA1NixcbiAgICAgIDc0LFxuICAgICAgMjM4LFxuICAgICAgMTI5LFxuICAgICAgMjQwLFxuICAgICAgNzAsXG4gICAgICAxMDksXG4gICAgICAyMTcsXG4gICAgICAyMTMsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJENENSOE1URVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTExNTk3NDA0OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjc2NTExMjYxOTEzNzo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeUJ4cDhGRUt5dnVyVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlpOHRMc3BVMC9VSEhXL3dZd0k4NXVBNGplUHpEcVh3azN0ZEMyaitrQ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibGV1eEJXVExhMHdsUzBrTTB4MEdSMGdyTkdlNDRrQ0RIaERsR2pXS09pQXVZR0NtTXlwRVRqcTFoR25kYy9QNC9rVU1KRXFjRXc5MndTUkxRVWp5Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTEdHQzdzYURyUWd0N2hvQ0t3SmZhWWRKT2xqUER2ZDZzV2tLaXFDclArN2RFQ1JEWjg4dXAwT1FGUEp0bW96Tkh6WHcxcVlpaHdVMHFXeUc3WTlYanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTExNTk3NDA0OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MTgxMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKMU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUoxTi5qc29uIjogIntcImtleURhdGFcIjpcIm9idENjRXIrWFR3RERVVk9kaXB3L0VYZGlwVlR0VW9tYWtVT0pqN245NEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwODMzNjEyNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIyNzE2MTk5NzkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
