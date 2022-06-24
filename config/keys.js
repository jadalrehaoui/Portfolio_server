if(process.env.NODE_ENV === 'production'){
  console.log("env = prod");
  module.exports = require('./prod');
} else {
  console.log("env = dev");
  module.exports = require('./dev');
}
