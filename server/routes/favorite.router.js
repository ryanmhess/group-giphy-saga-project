const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('req.body in POST:', req.body);
  const url = req.body.url;
  const queryText = `
    INSERT INTO "favs"
      ("url")
      VALUES
      ($1)
  `
  const queryValue = [url];
  pool.query(queryText, queryValue)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing query', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
