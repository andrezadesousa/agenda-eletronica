import express from "express";
import User from "../models/user.js";
import Contact from "../models/contact.js";

// This will help us connect to the database
import db from "../db/conn.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

const app = express();

// Create user logic
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      email: req.body.email,
      password: req.body.password,
      isAdmin: false,
    };
    let collection = await db.collection("agendaUsers");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding agendaUsers");
  }
});

// Login logic
router.post("/login", async (req, res) => {
  try {
    let newDocument = {
      email: req.body.email,
      password: req.body.password,
    };
    let collection = await db.collection("agendaUsers");
    let result = await collection.findOne(newDocument);
    if (result == null) return res.status(404).send("User not found");
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding agendaUsers");
  }
});

// New contact logic
router.post("/add-contact", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
    };
    let collection = await db.collection("agendaContacts");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding agendaContacts");
  }
});

//List all contacts logic
router.get("/list-contacts", async (req, res) => {
  let collection = await db.collection("agendaContacts");
  let results = await collection.find({}).toArray();
  console.log(results);
  res.send(results).status(200);
});

//Get contact logic
router.get("/list-contacts/:id", async (req, res) => {
  let collection = await db.collection("agendaContacts");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) return res.send("Not found").status(404);
  res.send(result).status(200);
});

//Update contact logic
router.patch("/update-contact/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
      },
    };
    let collection = await db.collection("agendaContacts");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating contact");
  }
});

// This section will help you delete a record
router.delete("/delete-contact/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("agendaContacts");
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

// BASE  DE COMO FAZER

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

export default router;
