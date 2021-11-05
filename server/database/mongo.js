const { ObjectId, MongoClient } = require('mongodb');

const connectionString = process.env.MONGODB_CONNECTION_STRING

const dbName = process.env.MONGODB_DBNAME;

exports.findByObjectId = async (collectionName, id) => {
    return await this.findById(collectionName, ObjectId(id))
}

exports.findById = async (collectionName, id) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);

        const collection = db.collection(collectionName);

        const query = { "_id": id }

        const res = await collection.findOne(query);

        return res;

    } finally {
        client.close();
    }
}

exports.find = async (collectionName, query, projection, sort, limit) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);

        const collection = db.collection(collectionName);

        let find = projection ? collection.find(query, projection) : collection.find(query)

        if (sort) {
            find = find.sort(sort)
        }
        if (limit) {
            find = find.limit(limit)
        }

        var items = await find.toArray();

        return items;

    } finally {
        client.close();
    }
}

exports.aggregate = async (collectionName, query) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);

        let collection = db.collection(collectionName);

        var items = await collection.aggregate(query).toArray();

        return items;

    } finally {
        client.close();
    }
}

exports.insertOne = async (collectionName, document) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);

        let collection = db.collection(collectionName);

        let res = await collection.insertOne(document);

        return res["insertedId"];

    } finally {
        client.close();
    }
}


exports.replaceOne = async (collectionName, document) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);

        let collection = db.collection(collectionName);

        const query = { "_id": document._id }

        let res = await collection.replaceOne(query, document);

        return res["insertedId"];

    } finally {
        client.close();
    }
}

exports.deleteOne = async (collectionName, id, userId) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);

        let collection = db.collection(collectionName);

        const query = userId ? { "_id": id, userId } : { "_id": id }

        let res = await collection.deleteOne(query);
    } finally {
        client.close();
    }
}


exports.deleteMany = async (collectionName, query) => {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);

        let collection = db.collection(collectionName);

        let res = await collection.deleteMany(query);
    } finally {
        client.close();
    }
}