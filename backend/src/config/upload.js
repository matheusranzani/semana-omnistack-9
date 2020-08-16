const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    // destination: (req, file, callback) => {
    //   callback(null, path.resolve(__dirname, '..', '..', 'uploads'))
    // },
      destination: path.resolve(__dirname, '..', '..', 'uploads'), // __dirname = diretório atual
      filename: (req, file, callback) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext); // retira a extensão do nome da imagem
        callback(null, `${name}-${Date.now()}${ext}`)
    },
  })
};
