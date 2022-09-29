const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM FAVS';
  pool.query(queryText)
  .then((result) => {res.send(result.rows);})
  // res.sendStatus(200);
  .catch((err) => {
    console.log('error in favorite get route', err);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const categoryID = req.body.catID //category ID
  const imageId = req.params.favId //this is for put

  const queryText = `
          UPDATE favs
          SET cat_id = $1
          WHERE id=$2`
  const queryValues = [categoryID, imageId]
  pool.query(queryText, queryValues)
  .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing PUT /:favID query', err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
