import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = new MongoClient("process.env.MONGO_URI");

    client.connect();
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
