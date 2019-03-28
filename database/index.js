const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery');

let GallerySchema = mongoose.Schema({
  name: String,
  imageurl: String,
})

let Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;