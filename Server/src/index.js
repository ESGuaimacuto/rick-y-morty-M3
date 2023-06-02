// const http = require("http");
// const { constrainedMemory } = require("process");
// const characters = requiere("./utils/data")
// const getCharById = require("./Controllers/getCharById")

// http.createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     // if(req.url.includes("/rickandmorty/character")){
//     //     const id = req.url.split("/").at(-1)
        
//     //     let charactersFilter = characters.find((char) => char.id === Number(id))

//     //     res.writeHead(200, {"Content-type": "application/json"})
//     //     res.end(JSON.stringify(charactersFilter))
//     // }

//     if(req.url.includes("/rickandmorty/character")){
        
//         getCharById(res, Number(id))
//     }

// }).listen(3001, "localhost")

const server = require("./App")
const PORT = 3001
const { conn } = require("./DB_connection");



conn.sync({force: true}) //Dropear la base de datos cuando está en true. Al terminar la base de desarrollo cambiar a false para preservar los datos.

server.listen(PORT, () => console.log("Listening on port 3001"))   