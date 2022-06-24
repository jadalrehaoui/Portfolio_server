const { Schema, model } = require('mongoose');

const ResumeSchema = new Schema({
  intro: {type: String, required: true},
  education: [
    {
      certificate: {type: String, required: true},
      institute: {type: String, required: true},
      date_started: {type: Date, required: true},
      date_ended: {type: Date, required: false},
    }
  ],
  employment: [
    {
      date_started: {type: Date, required: true},
      date_ended: {type: Date, required: false},
      company_name: {type: String, required: true},
      company_website: {type: String, required: false},
      position: {type: String, required: true},
      description: {type: String, required: true}
    }
  ],
  skills: [
    {
      name: {type: String, required: true},
      percentage: {type: Number, default: 0},
    }
  ],
  created_ts: {type: Date, default: Date.now()},
  updated_ts: {type: Date, default: Date.now()},
  deleted: {type: Boolean, default: false}
})

module.exports = model('Resume', ResumeSchema);
