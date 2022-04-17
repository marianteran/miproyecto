const Questions = require("../models/questions")

const questionsControllers = {
    cargarQuestions: async (req, res) => {
        let { equipment, message, user, date } = req.body.dataQuestions;
        console.log(req.body.dataQuestions)
        new Questions({
            equipment: equipment,
            user: user,
            questions: message,
            date:date
        }).save()
        let question
        try {
            question = await Questions.find({ equipment: equipment }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { question } })
    },

    obtenerQuestions: async (req, res) => {
        let id = req.params.id;
        let questions
        try {
            questions = await Questions.find({ equipment: id }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { questions  } })
    },

    deleteQuestions: async (req, res) => {
        let id = req.params.id;
        let question
        try {
            question = await Questions.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { question } })
    },
    editQuestions: async (req, res) => {
        let id = req.params.id;
        let newQuestion = {questions:req.body.data }
        let newfecha = {date:req.body.newDate}
        let date                      
        let question
        try {
            question = await Questions.findOneAndUpdate( {_id:id}, newQuestion )
            date = await Questions.findOneAndUpdate( {_id:id}, newfecha )

        } catch (error) {
            console.log(error)
        }
    
        res.json({ success: true, response: { question } })
    }
    
}
module.exports = questionsControllers;