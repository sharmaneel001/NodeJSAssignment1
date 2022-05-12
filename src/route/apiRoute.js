const express = require('express');

const {
  getFilteredResponse
} = require('../service/apiService');

const router = new express.Router();


router.get("/api",  (req, res) => {
  
  getFilteredResponse()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({  error :  error.message })
    })
})


module.exports = { router }