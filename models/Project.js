const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  long_description: {type: String, required: true},
  type: {type: String, required: true},
  stack_items: [
    {
      name: {type: String}
    }
  ],
  thumbnail_file: {type: String},
  link: {type: String},
  created_ts: {type: Date, default: Date.now()},
  updated_ts: {type: Date, default: Date.now()},
  deleted: {type: Boolean, default: false}
})

module.exports = model('Project', ProjectSchema);
