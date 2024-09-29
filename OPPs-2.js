class User {
    constructor(username, loginCount, IsloggedIn) {
        this.username = username
        this.loginCount = loginCount
        this.IsloggedIn = IsloggedIn
        
        return this
    }
}

const userOne = new User('sarthak', 78, true)
const userTow = new User('yash',7859, false)
console.log(userOne)