'use strict'

const express = require('express');
const Place = require('../models/place');
const place = new Place();

const router = express.Router();

//RESTful routes

router.get('/place', getPlace);
router.get('/place/:id', getOnePlace);
router.post('/place', createPlace);
router.put('/place/:id', updatePlace);
router.delete('/place/:id', deletePlace);

//RESTful route handlers

function getPlace(req, res) {
    const allPlaces = place.get();
    res.status(200).json(allPlaces);
}

function getOnePlace(req, res) {
    const id = req.params.id;
    const onePlace = place.get(id);
    res.status(200).json(onePlace);
}

function createPlace(req, res) {
    console.log(req.body.name);
    const obj = req.body;
    const newPlace = place.create(obj);
    res.status(200).json(newPlace);
}

function updatePlace(req, res) {
    const updateId = req.params.id;
    const updatedPlace = place.update(updateId, req.body);
    res.status(200).json(updatedPlace);
}

function deletePlace(req, res) {
    const deleteId = req.params.id;
    const deletePlace = place.delete(deleteId);
    res.status(200).send('deleting place');
}

module.exports = router;