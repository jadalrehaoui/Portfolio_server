const Message = require('../../models/Message');
module.exports = async (req, res) => {
  const {name, email, content} = req.body;
  // console.log(name, email, content);
  const message = await new Message(
    {name: name, email: email, content: content}
  )
  .save()
  .catch(error => res.status(500).json({message: "Internal server error."}))
  return res.status(200).json({message: "Message has been recieved.", doc: message})
}
