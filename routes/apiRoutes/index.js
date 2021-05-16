const express= require('express');
const router= express.Router();
const cTable= require('console.table');

router.use(require('./employee'));

module.exports= cTable;
module.exports= router;