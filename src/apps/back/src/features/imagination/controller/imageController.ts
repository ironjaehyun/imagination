import fs from 'fs';
import https from 'https';

const upload = (req, res) => {
  let images = req.body.images;
  console.log(images);
  images.forEach((url, index) => {
    download(url, `./downloads/image${index}.png`, function () {
      console.log('done');
    });
  });
  res.send('Download completed');
};

const download = function (uri, filename, callback) {
  const file = fs.createWriteStream(filename);
  https.get(uri, function (response) {
    response.pipe(file);
    file.on('finish', function () {
      file.close(callback);
    });
  });
};

export { upload };
