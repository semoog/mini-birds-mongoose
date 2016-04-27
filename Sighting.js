var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var sightingSchema = new mongoose.Schema({
  "name": { type: String, lowercase: true, required: true },
  "order": { type: String, maxlength: 20 },
  "status": { type: String, lowercase: true, enum: ["least concern", "near threatened", "extinct"] },
  "confirmed": { type: Boolean, default: false },
  "numberSeen": { type: String, minlength: 1 }
});

module.exports = mongoose.model("Sighting", sightingSchema);
