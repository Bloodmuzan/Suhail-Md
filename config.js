const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '923184474176';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.location = 'Lome Togo' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Togo'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '923184474176'; ;
global.devs = "22898133388"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/NpA3ZsJ.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "SUHAIL_20_25_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICA4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1kd2xnbE9DeHRNeG5Cbk9Kd1ZDQ004L29JU3M3d2JicGlFQzZxNXFqbzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI4OTI0NjA1MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3NzU0MjVEMkFEMUYwOERCRjQ2N0QyNEZDNTQzNzE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTI2MDcxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyODkyNDYwNTE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NEI2QkIwMUVGNDA0NDkyQjJGRUI2NTM3Mzk2MEE2M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyNjA3MTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0dtWFVucUNUbnU3UFJzRXB4eVhxUVwiLFxuICBcInBob25lSWRcIjogXCJjZDcyN2JiNC05ODI3LTQ4YTgtYThlYy1jYTIzYmMwOGUwMzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgOTIsXG4gICAgICAxLFxuICAgICAgMTUwLFxuICAgICAgOTEsXG4gICAgICAwLFxuICAgICAgMTAxLFxuICAgICAgMCxcbiAgICAgIDE5NSxcbiAgICAgIDMwLFxuICAgICAgNTcsXG4gICAgICAxNzYsXG4gICAgICAyMTMsXG4gICAgICAyNDMsXG4gICAgICAyMjUsXG4gICAgICAxMzgsXG4gICAgICAyMjksXG4gICAgICAyMDQsXG4gICAgICAxNDYsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA3OSxcbiAgICAgIDE3NixcbiAgICAgIDEwOCxcbiAgICAgIDE3NSxcbiAgICAgIDExMixcbiAgICAgIDg1LFxuICAgICAgMTQwLFxuICAgICAgMTE3LFxuICAgICAgMTc4LFxuICAgICAgMTc5LFxuICAgICAgMTY4LFxuICAgICAgMjIxLFxuICAgICAgNDksXG4gICAgICAyMzMsXG4gICAgICAxNjMsXG4gICAgICAyMzgsXG4gICAgICA5NixcbiAgICAgIDM2LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEU1NNRFQzTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTI0NjA1MTk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjgzNTE1OTkyMzExOTQ6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HgvJLimKzwnZOp8J2TrvCdk7fwnZOt8J2TqvCdlILwnZOqIPCdk5/wnZOq8J2TtvCdk67wnZO18J2TquKYrOC8kuqnglwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6c3VlOENFS2lzNTdNR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNjBwb1p0dEdOczlXbkNLbnR5dkpTQ0RYV0ljcFdTbWkzZEw3Tm9idHczQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyUXpNeEwvWHpYVHB1R1lZQ1hQNXVxanN0aU05aytFYWpxMFl6MWtnZ2lFUDJhK2E0WXVsQWp2R21wVHMzRk1YSnlxYUJ5UVQ0b0QxM2NFcEkxUjJBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRTzhCZldtemIxQjljZVhRSExiYUJLTnJpYzY4emsyVWpwNHpPbmlCWGxmZG5ZM1FvMXliT2hoU2tRdjhFcElyLzJ2K0ZlVHVnVk8yRGEvSDJKbEVBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjg5MjQ2MDUxOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNjA3MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQcTBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBxMC5qc29uIjogIntcImtleURhdGFcIjpcImVsZnlhUVNqMGJKaGtrOWhlaWJ0Vk9GaWJ4ZnJQdjVYN01ZVytMZGNQN0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcwNjAyNTI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg0NDM2MjQ2OTRcIn0iCn0=",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || '𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛-ᴍᴅ',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `It'x 𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛`,
  author:  process.env.PACK_AUTHER || '𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛 ®" ,
  autoreaction: process.env.AUTO_REACTION || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : '212', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  readcmds : process.env.READ_COMMANDS || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'true',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "bmkCFm1VJHibcHbxhDbrVRXA",
  caption :process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'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' ,
  VERSION: process.env.VERSION || 'v.1.2.1',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'SUHAIL',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
