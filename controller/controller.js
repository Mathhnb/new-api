const MusicasService = require('../service/service');

const MusicasController = {
  getAll: async (req, res) => {
    try {
      const musicas = await MusicasService.getAll();
      res.status(200).json(musicas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar músicas' });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const musica = await MusicasService.getById(id);
      if (!musica) return res.status(404).json({ error: 'Música não encontrada' });
      res.json(musica);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar música' });
    }
  },

  create: async (req, res) => {
    try {
      const musica = await MusicasService.create(req.body);
      res.status(201).json(musica);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar música' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const musica = await MusicasService.update(id, req.body);
      res.json(musica);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar música' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await MusicasService.delete(id);
      res.status(200).json({ msg: 'Sucesso ao deletadar música' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar música' });
    }
  },
};

module.exports = MusicasController;
