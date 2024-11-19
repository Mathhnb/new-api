const db = require('../config/database');

const MusicasModel = {
    getAllModel: async () => {
        const [rows] = await db.query('SELECT * from Músicas');
        return rows
    },
    create: async (Músicas) => {
        const {titulo, artista} = Músicas;
        const [result] = await db.query('INSERTE INTO Músicas (titulos, artista) VALUES (?,?)', [titulo, artista])
        return {id: result.insertId, titulo, artista};
    }
} 