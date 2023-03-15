import express from 'express';
const path = require('path')

const router = express.Router();

router.get("/:name", (req, res) => {
    res.sendFile(path.resolve(`./src/public/resources/${req.params['name']}.jpg`));
});

export default router