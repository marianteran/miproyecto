const mongoose = require('mongoose') //va a almacenar los datos

const equipmentsSchema = new mongoose.Schema ({
        name:{type:String,require:true},
        description:{type:String,require:true},
        time: {type:String,require:true},
        image:{type:Array,require:true},  
        price:{type:String,require:true}, 
        function: {type:String,require:true},
        shippingPrice:{type:Array,require:true}
    })
const Equipments = mongoose.model("equipments", equipmentsSchema)

module.exports = Equipments;