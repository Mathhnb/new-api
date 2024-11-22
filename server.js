const express = require('express')
const server = express()
const port = 3000
const MusicasRoutes = require('./rotas/rotas');

server.use(express.json());
server.use('/Musicas', MusicasRoutes);

server.listen(port, () => {
  console.log(`server ligado ${port}`)
})