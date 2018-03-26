var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var signupSchema = {

  fname: {
    type: String,
    default: '',
    trim: true,
    required: 'fname required'
  },

  lname: {
    type: String,
    default: '',
    trim: true,
    required: 'lname required'

  },
email: {
    type: String,
    default: '',
    trim: true,
    required: 'email required'

  },
  bdate: {
    type: String,
    default: '',
    trim: true,
    required: 'bdate required'

  },
   password: {
    type: String,
    default: '',
    trim: true,
    required: 'password required'

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

var Signup = mongoose.model('Signup', signupSchema, 'signup');
module.exports = Signup;
