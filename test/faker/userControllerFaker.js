const fakerListUsers = [{name: 'inae', email: 'inae@faker'}, {name: 'bruno', email: 'bruno@faker'}]

class userControllerFaker {
    static getAll() {
        return fakerListUsers.length;    
    }

    static create(body) {
        fakerListUsers.push(body)
        return body.toString();
    }

    static remove(name) {
        const indexUser = fakerListUsers.findIndex(user => user.name === name)
        fakerListUsers.splice(indexUser, 1);
        return 'OK'
    }
}

module.exports = userControllerFaker;