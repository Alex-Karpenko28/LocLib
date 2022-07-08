var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let GenreShema = new Schema(
    {
       name: {type: String, required: true, min: 3, max: 100}
    }
);

GenreShema.virtual('url').get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreShema);