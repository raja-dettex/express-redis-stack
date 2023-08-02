const {Router } = require('express');
const { userRepository } = require('../redis/entity/user.entity.js');
const router = Router();

router.get('/:id', async (req, res)=> {
    try {
        const user = userRepository.fetch(req.params.id);
        res.status(200).json({user: user});
    } catch(err) {
        res.status(500).json({Error: err.message })
    }
   
})

router.post('/', async(req, res) => {
    try {
        const user = await userRepository.createAndSave(req.body);
        res.status(201).json({user: user})
    } catch(err) {
        res.status(500).json({Error: err.message })
    }
})


module.exports.router = router