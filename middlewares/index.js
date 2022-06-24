// AWS S3 Bucket for storing files
var aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const keys = require('../config/keys');

const s3 = new aws.S3({
  accessKeyId: keys.AWS_S3_ACCESS_KEY,
  secretAccessKey: keys.AWS_S3_SECRET_ACCESS_KEY,
  Bucket: keys.AWS_S3_BUCKET
});
// upload to S3 Bucket
exports.upload = multer({
   storage: multerS3({
       s3: s3,
       bucket: keys.AWS_S3_BUCKET,
       metadata: function (req, file, cb) {
         cb(null, { fieldName: file.fieldname });
       },
       key: function (req, file, cb) {
          const name = file.originalname.split('.')[0];
          const ext = "." + file.originalname.split('.')[1];
          const saveWith = name + "-" + Date.now() + ext + "";
          cb(null, saveWith)
       }
   })
});


exports.isAuthenticated = (req, res, next) => {
  console.log(req.headers, "REQ HEADERS");
  if(!req.user){
    return res.status(401).json({message: "You must be logged in"});
  }
  next();
}
