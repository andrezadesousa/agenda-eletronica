import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://andrezanascimentodesousa:p4rWhCFcJhSAloJY@agenda.xdhcl.mongodb.net/?retryWrites=true&w=majority&appName=agenda";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    useUnifiedTopology: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
