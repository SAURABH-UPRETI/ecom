const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const ecomModel = require('../controllers');

exports.getIndex = (req, res) => {
    return res.status(200).send({ message: 'Index Route' });
  };