const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const csvSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  place: {
    type: String,
  },
  city: {
    type: String,
  },
  age: {
    type: Number,
  },
});
const File = mongoose.model("File", csvSchema);
module.exports = File;
