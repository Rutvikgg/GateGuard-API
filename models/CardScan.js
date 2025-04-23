const mongoose = require("mongoose");

const ScanSchema = new mongoose.Schema({
  card_uid: String,
  timestamp: Date,
  accessgranted: Boolean,
});

module.exports = mongoose.model("Scan", ScanSchema);
