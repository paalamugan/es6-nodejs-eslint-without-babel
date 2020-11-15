import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('<h1>Its works.</h1>');
});

export default router;
