const {MongoClient} = require('mongodb')
require('dotenv').config()

const URL = process.env.DB_URL

const client = new MongoClient(URL)

const start = async () => {
    try {
        await client.connect()
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({name: 'Quasar', age: 20})
        const user = await users.findOne({name: 'Quasar'})
        console.log('user', user)
    }
    catch (error) {
        console.log(error)
    }
}

start()
    .then(() => console.log('Connected'))
    .catch(() => console.log('Not Connected'))