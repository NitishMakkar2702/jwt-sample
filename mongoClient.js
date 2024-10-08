const { MongoClient } = require('mongodb');

const uri = "abcd";

let client;
let db;

async function connectToDb() {
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
        console.log("Connected to MongoDB");
    }
    if (!db) {
        db = client.db('sample_mflix');
    }
    return { client, db };
}

async function getCollection(collectionName) {
    if (!db) {
        await connectToDb();
    }
    return db.collection(collectionName);
}

module.exports = { connectToDb, getCollection };
