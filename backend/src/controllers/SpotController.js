const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech }); // procura dentro do array a query

    return res.json(spots);
  },

  async store(req, res) {
    // console.log(req.body);
    // console.log(req.file); // do multer
    
    const { filename } = req.file; // nome do arquivo salvo
    const { company, techs, price } = req.body;
    const { user_id } = req.headers; // cabeçalho da aplicação (manipula no Insomnia)
    
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User ID not found' }); // status 400 erro na requisição do usuário
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()), // separa a string pelas vírgulas e tira os espaços
      price
    });

    return res.json(spot);
  }
};