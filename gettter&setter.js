 class student {
     #email;
    constructor(email , password, scolorId) {
       this.#email = email;
       this.password = password;
    }  

    get (email) {
        return this.#email
    } 
    set (newemail) {
        this.#email = newemail
    }
}

const hitesh = new student("s@sarthakgmail.com", "123");

//console.log(hitesh.get())
hitesh.set("vyassarthak183@gmail.com")
//console.log(hitesh.get()) 






function User(email, password) {
    this._email = email,
    this._password = password
    
    Object.defineProperty(this, "email", {
        get : function() {
             return this._email.toUpperCase()
        },
        set : function(value) {
            this._email = value;
        }
    })
} 

const user = new User("sarthk@gmail.com", "54234jfjhg");
console.log(user.email)
user.set('vyassarthak183@gmail.com');
console.log(user.email)


