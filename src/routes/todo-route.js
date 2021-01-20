'use strict'

const express = require('express');
const Item = require('../models/place');
const Item = new Item();

const router = express.Router();

//RESTful routes

router.get('/todo', getItems);
router.get('/todo/:id', getOneItem);
router.post('/todo', createItem);
router.put('/todo/:id', updateItem);
router.delete('/todo/:id', deleteItem);

//RESTful route handlers

function getItems(req, res) {
    const allItems = Item.get();
    res.status(200).json(allItems);
}

function getOneItem(req, res) {
    const id = req.params.id;
    const onePlace = item.get(id);
    res.status(200).json(onePlace);
}

function createItem(req, res) {
    console.log(req.body.name);
    const obj = req.body;
    const newItem= Item.create(obj);
    res.status(200).json(newItem);
}

function updateItem(req, res) {
    const updateId = req.params.id;
    const updatedItem = Item.update(updateId, req.body);
    res.status(200).json(updatedItem);
}

function deleteItem(req, res) {
    const deleteId = req.params.id;
    const deleteItem = Item.delete(deleteId);
    res.status(200).send('deleting item');
}

module.exports = router;