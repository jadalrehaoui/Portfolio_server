const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  content: {type: String, required: true},
  created_ts: {type: Date, default: Date.now()},
  updated_ts: {type: Date, default: Date.now()},
  deleted: {type: Boolean, default: false}
})

module.exports = model('Message', MessageSchema);
