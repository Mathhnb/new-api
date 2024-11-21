const db = require('../config/database');

const MusicasModel = {
    getAllModel: async () => {
        const [rows] = await db.query('SELECT * FROM `Músicas`');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM `Músicas` WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (musica) => {
        const { titulo, artista } = musica;
        const [result] = await db.query('INSERT INTO `Músicas` (titulo, artista) VALUES (?, ?)', [titulo, artista]);
        return { id: result.insertId, titulo, artista };
    },

    update: async (id, musica) => {
        const { titulo, artista } = musica;
        await db.query('UPDATE `Músicas` SET titulo = ?, artista = ? WHERE id = ?', [titulo, artista, id]);
        return { id, titulo, artista };
    },
    delete: async (id) => {
        await db.query('DELETE FROM `Músicas` WHERE id = ?', [id]);
      },
};

module.exports = MusicasModel;
