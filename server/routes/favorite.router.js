const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
// return all favorite images
router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM favs
      ORDER BY id ASC`;
  pool.query(queryText)
  .then((result) => {res.send(result.rows);
    console.log('LOOK AT ME', result.rows);})
  // res.sendStatus(200);
  .catch((err) => {
    console.log('error in favorite get route', err);
    res.sendStatus(500);
  })
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
router.post('/derp', (req, res) => {
  console.log(req.body);
  const categoryId = req.body.catID //category ID
  const imageId = req.body.imageID //this is for put
  console.log(imageId);

  const queryText = `
          INSERT INTO favs_category
          ("favs_id", "cat_id")
          VALUES        
          ($1, $2)
  `
  const queryValues = [imageId, categoryId]
  pool.query(queryText, queryValues)
  .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing POST /favorite/derp query', err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
