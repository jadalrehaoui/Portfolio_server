const AboutMe = require('../../models/AboutMe');

module.exports = async (req, res) => {
  console.log(req.body, "REQ");
  var update = {...req.body, updated_ts: Date.now()};
  if(req.file){
    console.log(req.file.key, "KEY");
    update = {...update, resume_file: req.file.key};
  }
  const updated = await AboutMe
  .findOneAndUpdate({deleted: false}, update, {new: true})
  .catch(error => res.status(500).json({message: "Interna Server error."}));
  if(updated){
    return res.status(200).json(updated);
  } else {
    return res.status(500).json({message: "Interna Server error."})
  }
}
