var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = {

  


 /* content: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },*/
 photo: {
        type: String,
        trim: true,
        required: 'photo required'
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    place: {
        type: String,
        default: '',
        trim: true
    },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Post = mongoose.model('Post', PostSchema, 'posts');
module.exports = Post;
