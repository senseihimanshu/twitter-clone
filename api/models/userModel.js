const mongoose = require('mongoose');
const schema = require('../schemas');
const userSchema = mongoose.Schema(schema.userDetails)

class User{
    constructor(){
        this.model = mongoose.model('User', userSchema)
    }
    async get(criteria={}){
        return this.model.find(criteria)
    }
    async update(criteria={}, updateProfile){
        return this.model.update(criteria, updateProfile)
    }

    async follow(criteria={}, updateObj){
        return this.model.update(criteria, updateObj )
    }

    async unfollow(criteria={}, updateObj){
        return this.model.update(criteria, updateObj )
    }
}

module.exports = new User();