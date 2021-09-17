const { json } = require("express");
const Pirates = require("../models/Pirates.model");


module.exports = {
    create: (req, res) => {
        Pirates.create(req.body)
            .then(newPirates => res.json({newPirates}))
            .catch(err => res.status(400).json({message: "Error", error: err}))
    },
    findAll: (req, res) => {
        Pirates.find().sort({'name':1})
            .then(allPirates => res.json({piratesArr: allPirates}))
            .catch(err => res.status(400).json({message: "Error", error: err}))
    },
    findOne: (req, res) => {
        Pirates.findById(req.params.id)
            .then(onePirates => res.json(onePirates))
            .catch(err => res.status(400).json({message: "Error", error: err}))
    },
    update: (req, res) => {
        Pirates.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedPirates => res.json(updatedPirates))
            .catch(err => res.status(400).json({message: "Error", error: err}))
    },
    deleteItem: (req, res) => {
        Pirates.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json({message: "Error", error: err}))
    }
}