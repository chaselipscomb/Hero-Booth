import Express from 'express';


const router = require("express").Router();



router.get("/api/candles", isAuthenticatedData, function (req, res) {
    db.Candle.findAll({
      where: {
        UserId: req.user.id
      }
    })
      .then(function (dbCandles) {
        res.json(dbCandles);
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  });