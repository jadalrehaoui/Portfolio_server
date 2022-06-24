const { Schema, model } = require('mongoose');

const AboutMeSchema = new Schema({
  paragraph: {type: String, required: true},
  resume_file: {type: String},
  created_ts: {type: Date, default: Date.now()},
  updated_ts: {type: Date, default: Date.now()},
  deleted: {type: Boolean, default: false}
})

module.exports = model('AboutMe', AboutMeSchema);
