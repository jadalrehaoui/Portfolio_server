const Project = require('../../models/Project');
module.exports = async (req, res) => {
  var project = {...req.body, updated_ts: Date.now(), created_ts: Date.now()};
  if(req.file){
    project = {...project, thumbnail_file: req.file.key};
  }
  const created = await new Project(project).save()
  .catch(error => res.status(500).json({message: "Interna Server error."}));
  if(created){
    return res.status(200).json(created);
  } else {
    return res.status(500).json({message: "Interna Server error."})
  }
}
