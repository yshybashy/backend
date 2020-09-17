const mongoose = new require('mongoose');
const Games = mongoose.model('Game');

module.exports = {
  async insert (req, res) {
    const games = await Games.create(req.body);
    console.log(req.body)
    return res.json(games);
  },

    async index (req, res) {
      const games = await Games.find();
      // console.log("entrando no get");
      return res.json(games);
    }
}