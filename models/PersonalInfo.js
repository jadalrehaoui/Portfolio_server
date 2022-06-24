
const { Schema, model } = require('mongoose');

const PersonalInfoSchema = new Schema({
  full_name: {type: String, required: true},
  title: {type: String, required: true},
  phone_number: {type: String, required: true},
  email: {type: String, required: true},
  address: {type: String, required: true},
  display_picture: {type: String},
  background_picture: {type: String},
  age: {type: String, required: true},
  social_links: [
    {
      media: {type: String},
      link: {type: String}
    }
  ],
  about_me: {type: String, required: true},
  created_ts: {type: Date, default: Date.now()},
  updated_ts: {type: Date, default: Date.now()},
  deleted: {type: Boolean, default: false}
})

module.exports = model('PersonalInfo', PersonalInfoSchema);
