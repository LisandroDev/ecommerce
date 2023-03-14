import express from 'express';
const path = require('path')

const router = express.Router();

router.get("/:name", (req, res) => {
    res.sendFile(path.resolve(`./src/public/resources/${req.params['name']}.jpg`));
});

// router.get("/kiiki_shirt", (_req, res) => {
//     res.sendFile(path.resolve('./src/public/resources/animeShirt.jpg'));
// });

// router.get("/leavetheroad_shirt", (_req, res) => {
//     res.sendFile(path.resolve('./src/public/resources/leaveTheRoadShirt.jpg'));
// });

// router.get("/retro_shoes", (_req, res) => {
//     res.sendFile(path.resolve('./src/public/resources/retroShoes.jpg'));
// });

export default router