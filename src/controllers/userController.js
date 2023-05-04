const fs = require('fs')
const payloads = require('../../payloads.json')
module.exports = {
    create: (req, res) => {
        const {name, email} = req.body;
        try{
            const user = {name, email}
            payloads.push(user)
            fs.writeFileSync('./payloads.json', JSON.stringify(payloads))
            res.status(201).send(user)
        }catch(err) {
            res.status(500).json(err.message)
        }
    },
    list: (req, res) => {
        res.status(200).json(payloads)
    },
    remove: async(req, res) => {
        try{
            const {name} = req.body;
            const indexUser = payloads.findIndex(user => user.user === name)
            payloads.splice(indexUser, 1);
            fs.writeFileSync('./payloads.json', JSON.stringify(payloads))
            res.status(204).json('Removido!');
        }catch(err){
            res.status(500).json(err.message)
        }
    }

}