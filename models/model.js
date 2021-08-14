const mongoose = require('mongoose');
const create = require('./create');
const app = express();
//const cors = require('cors');
let conn = null;

//app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://kawekaweau:!Brookesia7$@gekkonidae.lntxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log ("MongoDB database connection established sucessfully");   
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


  const gekkoSchema = new mongoose.GekkoSchema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    ImageUrl: {
        type: String,
        required: true
    },
    hatchDate: {
        type: Date,
        required: true
    }
// {habitat descriptor from radio button}

// {ease of care}
  })