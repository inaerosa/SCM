const fs = require('fs')
const payloads = require('../../payloads.json')


class UserController {
    static create (req, res){
        const {name, email} = req.body;
        try{
            const user = {name, email}
            payloads.push(user)
            fs.writeFileSync('./payloads.json', JSON.stringify(payloads))
            res.status(201).send(user)
        }catch(err) {
            res.status(500).json(err.message)
        }
    }

    static list (req, res){
        res.status(200).json(payloads)
    }

    static getByUser (req, res){
	    const {user} = req.body;
	    const filtrered = payloads.filter(user => user.user === name);
    	res.status(200).json(filtrered)
	}
    
    static remove (req, res){
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

module.exports = UserController;