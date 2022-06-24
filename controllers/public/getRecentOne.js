module.exports = async (req, res, Model) => {
  const data = await Model
  .findOne()
  .catch(error => res.status(500).json({message: "Interna Server error."}));
  if(data){
    return res.status(200).json(data);
  } else {
    return res.status(404).json({message: "No data at this time."})
  }
}
