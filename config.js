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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923160783251";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923160783251,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_25_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYbzNNd0laQllLT2FjbnRzOGIzckRydHNQWkFRT3o5RlJGMzBpVi9MLzNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHTllXQjJLRVRDT3prZVZucDVnOUh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3MjAzNmY3LWViNjMtNDVjYy1hZDcyLTYzMDBkZDU1Nzg3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAyNDUsXG4gICAgICA2OSxcbiAgICAgIDIsXG4gICAgICA1MixcbiAgICAgIDIwMixcbiAgICAgIDIxNSxcbiAgICAgIDExOSxcbiAgICAgIDE2MCxcbiAgICAgIDUzLFxuICAgICAgMTAxLFxuICAgICAgMSxcbiAgICAgIDE2NyxcbiAgICAgIDExNSxcbiAgICAgIDIwMixcbiAgICAgIDkxLFxuICAgICAgMjU1LFxuICAgICAgNDIsXG4gICAgICAxNzMsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMzAsXG4gICAgICAyMzQsXG4gICAgICAxMTUsXG4gICAgICAxODMsXG4gICAgICAzLFxuICAgICAgMTI3LFxuICAgICAgMjAsXG4gICAgICA4NyxcbiAgICAgIDQwLFxuICAgICAgMTE0LFxuICAgICAgMTc2LFxuICAgICAgMTAsXG4gICAgICA1OSxcbiAgICAgIDk0LFxuICAgICAgMjEzLFxuICAgICAgMTU4LFxuICAgICAgMTU3LFxuICAgICAgMTExLFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVRQUTNZWThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE2MDc4MzI1MTo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThqnwnZGu8J2RvPCdkbnwnZGw8J2SgPCdkajjgIbNjvCThqogy5DNosK7ICAg4oq5IOKKuSDiirkg4oq5IOKKuSDiirkg4oq5IOKKuSDiirkg4oq5IOKKuSDiirlcIixcbiAgICBcImxpZFwiOiBcIjI4NjA4ODEwNzMzNjQ3OjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YTzZkc0ZFS3oweDdVR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnk0VmY4MEtNTTFVS0FRY2JSamZ6OU1hcFNiS1FOZ0lnM2t1c0pGc0dXTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4M01tS3JhMmp3STJCU0l6YVpoRityWHVsNkhocGlBTzZmNk5iRWxRdmNpdlRlSUFnckxzN0pRaFZEQ2pZVEgyYnNuVGt5aVJ4NEdhczF6bE9JMmNDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFQkZpM1hXdE9UREcwWUpQTjJnRWdrR1Rockh1ZG5vQldKQ1BrWUdTUEt2TlFSSVAzcVAydFAxOXBZc1dZSDFiN0RXenFndVB2elE3Z3c5bXdYVXFnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNjA3ODMyNTE6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5Mzk5NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFNldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2Vy5qc29uIjogIntcImtleURhdGFcIjpcIkxyOVB5bWhwZXBXMXdhZ0Y0MTgzcG9wbUhmV1Nndko4cjE5RDUveURlZTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzNDc0ODUxNyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Guriya Jan🤗💓",
  ownername:process.env.OWNER_NAME|| "Rani Jan🥰💓",


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
