const express = require('express');
const { createBiodata, getAllBiodata, getBiodataById, updateBiodata, deleteBiodata, getBiodataByEmail } = require('../Controller/bioDataController');


const bioDataRouter = express.Router();

bioDataRouter.post('/', createBiodata);

bioDataRouter.get('/', getAllBiodata);

bioDataRouter.get('/:id', getBiodataById);

bioDataRouter.get('/email/:email', getBiodataByEmail);

bioDataRouter.put('/:id', updateBiodata);

bioDataRouter.delete('/:id', deleteBiodata);

module.exports = bioDataRouter;
