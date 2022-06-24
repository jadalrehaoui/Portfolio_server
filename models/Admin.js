const { Schema, model } = require('mongoose');
const  bcrypt = require('bcryptjs');
const AdminSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

// methods ======================
// generating a hash
AdminSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
AdminSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = model('Admin', AdminSchema);
