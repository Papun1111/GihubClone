const AWS = require('aws-sdk');
const dotenv = require("dotenv");
dotenv.config();

AWS.config.update({
  region: process.env.region,
  accessKeyId: process.env.accessKeyId, 
  secretAccessKey: process.env.secretAccessKey
});

const s3 = new AWS.S3();
const S3_BUCKET = 'bucket659742';

module.exports = { s3, S3_BUCKET };
