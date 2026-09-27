/*CMD
  command: /cbedit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let f = User.getProperty("upbtc");

if(params=="x"){
var b =[
[{title: "1 BTC = "+f+" $",command:"/btcup x"}],
[{title: " ✔️ Update Price ",command:"/btcup x"}],[{title:"🔙 Go Back", command: "/cprice x"}]
]
Bot.editInlineKeyboard(b)}
