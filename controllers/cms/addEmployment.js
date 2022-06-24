const Resume = require('../../models/Resume');
module.exports = async (req, res) => {
  const update = {$push: {employment: req.body}, updated_ts: Date.now()};
  const updated = await Resume
  .findOneAndUpdate({deleted: false}, update, {new: true})
  .catch(error => res.status(500).json({message: "Interna Server error."}));
  if(updated){
    return res.status(200).json(updated);
  } else {
    return res.status(500).json({message: "Interna Server error."})
  }
}
