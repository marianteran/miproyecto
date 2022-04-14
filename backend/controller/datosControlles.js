/* eslint-disable no-undef */
const Apps = require('../models/apps')
const Smedia = require('../models/smedia.js')
const Equipments = require('../models/equipments.js')

const Itinerary = require('../models/itinerary')
const User = require("../models/user")

const datosController = {
    obtenerApp: async (req, resp) => {      
        let apps
        let error = null
        try {
            apps = await Apps.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { apps },
            success: error ? false : true,
            error: error
        })
    },
    obtenerSocialMedia: async (req, resp) => {      
        let socialMedia
        let error = null
        try {
            socialMedia = await Smedia.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { socialMedia },
            success: error ? false : true,
            error: error
        })
    },
    obtenerEquipments: async (req, resp) => {      
        let equipments
        let error = null
        try {
            equipments = await Equipments.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { equipments },
            success: error ? false : true,
            error: error
        })
    },


   /*  obtenerItineraries: async (req, resp) => {
        let itinerary;
        console.log(req.params);
        const city = req.params.city
        let error = null
        try {
            itinerary = await Itinerary.find({ city: city })
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { itinerary },
            success: error ? false : true,
            error: error
        })
    }, */
    likeDisLike: async (req, resp) => {
        const id = req.params.id
        const user = req.user.id
        let itinerary
        try {
            itinerary = await Itinerary.findOne({ _id: id })

            if (itinerary.likes.includes(user)) {                
                Itinerary.findByIdAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
                    .then(response => {
                        resp.json({ success: true, response: response.likes })
                    })

                    .catch(error => console.log(error))
            }
            else {                
                Itinerary.findByIdAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
                    .then(response => {
                        resp.json({ success: true, response: response.likes })
                    })
                    .catch(error => console.log(error))
            }
        } catch (err) {
            error = err
            resp.json({ success: false, response: error })
        }
    }


}

module.exports = datosController
