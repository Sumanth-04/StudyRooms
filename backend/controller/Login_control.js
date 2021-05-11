const Login = require("../Models/Login_model");
const Rooms = require("../Models/room_model");
const joinR = require("../Models/Join_model");
const { MongoClient } = require("mongodb");
const { createConnection } = require("mongoose");
//const uri = "mongodb+srv://User_sree:hsrpqwert1@cluster0.zodxr.mongodb.net/w=majority";
//const uri = "mongodb+srv://sumanthsk04:*****@cluster0.4tbdc.mongodb.net/test?authSource=admin&replicaSet=atlas-5unq8f-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const uri =
  "mongodb+srv://Sumanthsk:Sumanth@8197@cluster0.gq2sl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const uri ="mongodb+srv://User_sree:hsrpqwert1@cluster0.zodxr.mongodb.net/w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect();

SignUp = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Email id or password not available",
    });
  }
  const sign = new Login(body);
  console.log(sign);
  if (!sign) {
    return res.status(400).json({ success: false, err });
  }

  const doc = sign;

  run().catch(console.dir);

  async function run() {
    try {
      const database = client.db("Email_IDS");
      const collection = database.collection("Login");
      const result = await collection.insertOne(doc);
      console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
      );
    } finally {
      return res.status(200).json({ success: true });
    }
  }
};
createRooms = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Email id or password not available",
    });
  }
  const doc = new Rooms(body);
  run().catch(console.dir);

  async function run() {
    try {
      const database = client.db("Email_IDS");
      const collection = database.collection(String(body.userMail));
      const result = await collection.insertOne(doc);
      console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
      );
    } finally {
      return res.status(200).json({ success: true });
    }
  }
};
getRooms = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "No data",
    });
  }
  console.log("body is " + JSON.stringify(body));
  console.log("mail is " + body.userMail);
  console.log("shifted is " + JSON.stringify(body.userMail));
  run().catch(console.dir);
  async function run() {
    var abs;
    try {
      const database = client.db("Email_IDS");
      const collection = database.collection(String(body.userMail));
      var result = collection.find({}).toArray(function (err, rest) {
        if (err) {
          throw err;
        }

        console.log(JSON.stringify(rest));
        console.log(rest);
        console.log("lasssasa");
        abs = rest;
        return res.status(200).json({ success: true, results: rest });
      });
    } finally {
      console.log(abs);
    }
  }
};
createBRooms = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Email id or password not available",
    });
  }
  run().catch(console.dir);
  console.log(body.name);

  async function run() {
    try {
      const database = client.db(String(body.name));
      database.createCollection("Students", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        //db.close();
      });
    } finally {
      return res.status(200).json({ success: true });
    }
  }
};

joinRoom = (req, res) => {
  
  const body = req.body;
  run().catch(console.dir);
  console.log("Join Rooom name is" + body.name);
  const awq = String(body.name);
  console.log("awq is ");
  console.log(awq);
  console.log(typeof (awq));
  console.log(body.userMail);
  const doc = new joinR(body);
  console.log(doc);
  async function run() {
    try {
      await client.close();
      await client.connect();
      const database = client.db(awq);
      
      const collection = database.collection("Students");
      try {
        const rrr = collection.insertOne(doc);
        
        console.log(
          `${rrr.insertedCount} students were inserted with the _id: ${rrr.insertedId}`
        );
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    } finally {
      return res.status(200).json({ success: true });
    }
  }
};

deleteRoom = (req, res) => {
  const body = req.body;
  console.log(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Email id or password not available",
    });
  }

  run().catch(console.dir);
  //const query = { name: body };
  var result;
  async function run() {
    try {
      const database = client.db("Email_IDS");
      const collection = database.collection("Rooms");
      result = await collection.deleteOne(body, function (err, obj) {
        if (err) {
          console.log("No documents matched the query. Deleted 0 documents.");
          //throw err;
          return res
            .status(400)
            .json({ success: false, error: "Could not delete" });
        }

        //console.log("1 document deleted");
        console.dir("Successfully deleted one document.");
        return res.status(200).json({ success: true, result: result });
        /*if (result) {
            
    
          } else {
            
          }*/
      });
      console.log("res is " + result);

      //console.log(result);
    } finally {
      console.log("fginally");
    }
  }
};

LoginID = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Email id or password not available",
    });
  }

  run().catch(console.dir);
  console.log(body);

  async function run() {
    try {
      const database = client.db("Email_IDS");
      const collection = database.collection("Login");
      var result = await collection.findOne(body);
      console.log(result);
    } finally {
      if (result) {
        return res.status(200).json({ success: true, result: result });
      } else {
        return res
          .status(400)
          .json({ success: false, error: "Email or password is incorrect" });
      }
    }
  }
};

userId = (req, res) => {
  const body1 = req.body;
  if (!body1) {
    return res.status(400);
  }

  console.log(body1.email_id);
  run().catch(console.dir);

  console.log(typeof body1);
  console.log(body1.email_id);

  async function run() {
    try {
      const database = client.db("Email_IDS");
      database.createCollection(String(body1.email_id), function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
      });
    } finally {
      if (1) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({ success: false });
      }
    }
  }
};

module.exports = {
  SignUp,
  LoginID,
  createRooms,
  getRooms,
  deleteRoom,
  userId,
  createBRooms,
  joinRoom,
};
