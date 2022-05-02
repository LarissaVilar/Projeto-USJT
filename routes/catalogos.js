const { Router } = require('express');
const express  = require('express');
const router   = express.Router();
const Catalogo = require('../models/Catalogo');

// rota de teste
router.get('/test', (req, res) => {
  res.send('deu certo');
});

// add catalogo via post
router.post('/add', (req, res) => {

    let {title, value, site, description, date, new_event} = req.body;

    // insert
    Catalogo.create({
      title,
      description,
      value,
      date,
      site,
      new_event
})
.then(() => res.redirect('/'))
.catch(err => console.log(err));

});

module.exports = router
