const mongodb = require('mongodb');

const connectDB = async () => {
  const client = new mongodb.MongoClient(process.env.DATABASE_URI);
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
