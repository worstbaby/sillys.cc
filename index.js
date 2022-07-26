
const express = require("express"),
app = express(),
ejs = require('ejs'),
client = new (require("discord.js")).Client()
const Badge = require("./Badge");

client.on("ready", async () => {
console.log('[BOT] Iniciado')
await client.user.setStatus("invisible");
});

app.set("view engine", "ejs");
app.use(express.static("public"))

app.use(function (req, res, next) {
res.removeHeader("x-powered-by")
next();
});

app.post("*", async (req, res) => {
return res.send('foi mal mano nao vai rolar request aq')
});

app.get("/", async (req, res, next) => {
const rush7 = await client.users.fetch
("545703210539548684")
const nando7 = await client.users.fetch
("934265101438025828")
const wzn = await client.users.fetch
("853297636336861255")

if (!rush7.flags) await rush7.fetchFlags();
const Flags = rush7.flags.toArray();
if (rush7.bot && Flags.includes("VERIFIED_BOT")) rush7.verified = true;

const flags = Flags.filter(b => !!Badge[b]).map(m => Badge[m]);
if (rush7.flags.has(1 << 18)) flags.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

if (rush7.bot) {
    flags.push(Badge["BOT"]);
}

if (!nando7.flagsnando7) await nando7.fetchFlags();
const Flagsnando7 = nando7.flags.toArray();
if (nando7.bot && Flagsnando7.includes("VERIFIED_BOT")) nando7.verified = true;

const flagsnando7 = Flagsnando7.filter(b => !!Badge[b]).map(m => Badge[m]);
if (nando7.flags.has(1 << 18)) flagsnando7.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

if (nando7.bot) {
    flagsnando7.push(Badge["BOT"]);
}

if (!wzn.flagswzn) await wzn.fetchFlags();
const Flagswzn = wzn.flags.toArray();
if (wzn.bot && Flagswzn.includes("VERIFIED_BOT")) wzn.verified = true;

const flagswzn = Flagswzn.filter(b => !!Badge[b]).map(m => Badge[m]);
if (wzn.flags.has(1 << 18)) flagswzn.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

if (wzn.bot) {
    flagswzn.push(Badge["BOT"]);
}

   return res.render("index", {
   flags,
   flagsnando7,
   flagswzn,
   rush7,
   nando7,
   wzn,
});
});

app.use(function (req,res){
res.status(404).render('404');
});

client.login(process.env['TOKEN']);

app.listen(process.env.PORT, () => {
console.log('[EXPRESS] Iniciado') 
});

setTimeout(() => process.exit(), 600000)
