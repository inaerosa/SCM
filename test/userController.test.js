const userFaker = require('./faker/userControllerFaker')

describe('src :: controllers :: userController', () => {

    it ('should get all register',  () => {
        const users = userFaker.getAll();
        expect(users).toBe(2)
    })

    it ('should create an user', () => {
        const body = {name: 'roger', email: 'roger@faker'}
        const user = userFaker.create({name: 'roger', email: 'roger@faker'});
        const listOfUsers = userFaker.getAll();
        expect (user).toBe(body.toString());
        expect (listOfUsers).toBeGreaterThanOrEqual(3);
    })
    
    it('should remove an user', () => {
        const name = 'inae'
        const remove = userFaker.remove(name);
        const users = userFaker.getAll();
        expect(remove).toBe('OK')
        expect(users).toBe(2)

    })
})