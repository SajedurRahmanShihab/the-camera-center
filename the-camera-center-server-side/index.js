const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 4000

// cameraCenterDb
// y3X86MmBjmehu8h8

app.use(cors())
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l1rtu.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const database = client.db('camera-orders')
        const dataCollection = database.collection('orders');

        app.post('/orders', async(req, res) => {
            const data = req.body
            const result = await dataCollection.insertOne(data)
            console.log(result)
            res.json(result)
        })
    } finally {
        //await client.close()
    }
}
run().catch(console.dir)


// console.log(uri)

app.get('/', (req, res) => {
    res.send('Hello Camera World!')
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})