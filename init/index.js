const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({...obj , owner: "660656095d31a47518fd8f8d"}));
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

const initDB = async () => {
  await Listing.deleteMany({});
  const ownerId = "660656095d31a47518fd8f8d"; 
  initData.data = initData.data.map((obj) => ({...obj, owner: ownerId}));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};


initDB();