const fs = require('fs')
const payloads = require('../../payloads.json')
module.exports = {
    create: (req, res) => {
        const {name, email} = req.body;
        try{
            const user = {name, email}
            payloads.push(user)
            fs.writeFileSync('../../payloads.txt', payloads.toString())
            res.status(201).send(user)
        }catch(err) {
            res.status(500).json(err.message)
        }
    },
    list: (req, res) => {
        res.status(200).json(payloads)
    }

}