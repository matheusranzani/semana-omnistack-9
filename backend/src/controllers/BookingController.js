const { store } = require("./SessionController");

const Booking = require('../models/Booking')

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params; // da rota
    const { date } = req.body;
    // approved é preenchido depois, começa como null

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    await booking.populate('spot').populate('user').execPopulate(); // mostra todas as propriedades de spot e user

    return res.json(booking);
  }
};