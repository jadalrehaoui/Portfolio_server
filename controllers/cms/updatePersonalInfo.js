const PersonalInfo = require('../../models/PersonalInfo');

module.exports = async (req, res) => {
  var update = {...req.body, updated_ts: Date.now()};
  if(req.file){
    update = {...req.body, display_picture: req.file.key, updated_ts: Date.now()};
  }
  const updated = await PersonalInfo
  .findOneAndUpdate({deleted: false}, update, {new: true})
  .catch(error => res.status(500).json({message: "Interna Server error."}));
  if(updated){
    return res.status(200).json(updated);
  } else {
    return res.status(500).json({message: "Interna Server error."})
  }
}
