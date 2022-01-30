// on instancie express
const app = require("express")();

// on créé le serveur http
const http = require("http").createServer(app);

// oninstancie socket.io

const io = require("socket.io")(http);

// création route / 
app.get("/", (req, res)=>{
	res.sendFile(__dirname + "/index.html"); // test réponse OK 
	//console.log(req);
});

// onecoute event connexion socket.io
io.on("connection", (socket) => {
	console.log(socket.id); // id - id socket pour avoir moins d'info dans le terminal
	console.log("un utilisateur s'est connecté"); // id - id socket pour avoir moins d'info dans le terminal

	// on ecoute les deconnexion
	socket.on("disconnect", () => {
		console.log("un utilisateur s'est déconnecté");
	})

	// on gère le chat
	socket.on("chat_message", (msg) => {
		// on renvoie le message vers tous les utilisateurs connectés 
		io.emit("received_message", msg);
	})
})

// on va demander au serveur http répondre port 3001
http.listen(3001, () => {
	console.log("ecoute port 3001");
});