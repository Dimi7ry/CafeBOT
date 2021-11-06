module.exports = {
	/* The token of your Discord Bot */
	token: "XXXXXXXXXXX",
	/* For the support server */
	support: {
		id: "861166600799518730", // The ID of the support server
		logs: "906568518181474334", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "3q6aepoCRJtKkOs9Qjdvimbs8KquK3_h", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "906568518181474334", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "Cafe", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://Cafe:Cafe@cluster0.xmipo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: ".", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "☕Café Mod☕" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "350555936965787648", // The ID of the bot's owner
		name: "Dimi7ry#9643" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "05bc966ddf0d9a521c3e58de230161ee13f0e88f81e2c9c79f7e3148feaa0ee4872bbc40d21fef51bfecd97d7a1ccb3b27bd6c89f3a0a12084118fc0c38fbacd",
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Dimi7ry", // Founder's github account
		donate: "https://patreon.com/Dimi7ry" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "@CafeMod pomaga na {serversCount} serwerach(rze)",
			type: "Słucha"
		},
		{
			name: "Moja strona : atlanta-bot.fr",
			type: "Gra"
		}
	]
};
