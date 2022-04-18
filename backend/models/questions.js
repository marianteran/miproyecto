const mongoose = require('mongoose') //va a almacenar los datos

const questionsSchema = new mongoose.Schema({
    idEquipment: { type: mongoose.Types.ObjectId,ref:"equipments", require: true },
    equipment: { type: Object, require: true },
    user: { type: mongoose.Types.ObjectId,ref:"user", require: true },
    questions: { type: String, require: true },
    date: { type: String, require: true },
    answer:{type: String, require: true },
    dateAnswer:{type: String, require: true }

})
const Questions = mongoose.model("questions", questionsSchema)

module.exports = Questions;  