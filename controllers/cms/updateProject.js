const Project = require('../../models/Project');
module.exports = async (req, res) => {
  const id = req.params.id;
  var update = {...req.body, updated_ts: Date.now()};
  if(req.file){
    update = {...update, thumbnail_file: req.file.key, updated_ts: Date.now()};
  }
  const updated = await Project
  .findOneAndUpdate({_id: id}, update, {new: true})
  .catch(error => res.status(500).json({message: "Interna Server error."}));
  if(updated){
    return res.status(200).json(updated);
  } else {
    return res.status(500).json({message: "Interna Server error."})
  }
}
