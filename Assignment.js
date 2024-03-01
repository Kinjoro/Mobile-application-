const mongoose = require('mongoose');
const assignmentSchema = new mongoose.Schema({
 title: String,
 description: String,
 due_date: Date,
 class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
});
const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;