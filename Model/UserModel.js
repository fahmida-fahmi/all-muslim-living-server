const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required']
  },
  displayName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender:{
    type:String,
    required: true,
  },
  role:String
  
});

// Automatically set displayName before saving if not provided
userSchema.pre('save', function (next) {
  if (!this.displayName) {
    this.displayName = this.name;
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
