const MusicasModel = require('../models/musicasModel');

const MusicasService = {
  getAll: async () => {
    return await MusicasModel.getAllModel();
  },
  getById: async (id) => {
    return await MusicasModel.getById(id);
  },
  create: async (musica) => {
    return await MusicasModel.create(musica);
  },
  update: async (id, musica) => {
    return await MusicasModel.update(id, musica);
  },
  delete: async (id) => {
    return await MusicasModel.delete(id); 
  },
};

module.exports = MusicasService;
