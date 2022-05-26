const mongoose = require("mongoose");
const validator = require("validator");
const consultantSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
// New Connection
const Consultant = new mongoose.model("Consultants", consultantSchema);
module.exports = Consultant;
