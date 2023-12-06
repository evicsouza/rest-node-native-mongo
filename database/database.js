const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://evss1:4A5Y2Y9ie5fnuZlB@cluster0.zirpbm6.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {

    await client.connect();
    console.log("A aplicação está conectada ao mongodb")
  } catch (error) {
    console.log(error)

  }
}

function getClient() {
  return client;
}

module.exports = { connect, getClient };
