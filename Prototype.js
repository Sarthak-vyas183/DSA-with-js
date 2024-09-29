function createUser(name, score) {
    this.name = name
    this.score = score
   
}  

createUser.prototype.Increment = function() {
    console.log(`Price of ${this.name} without GST : ${this.score}`)
    this.score += (this.score*30)/100;
} 

createUser.prototype.PrintMe = function() {
    console.log(`Price of ${this.name} is (Include GST) : ${this.score}`)
   
} 

let chai  = new createUser('chai', 100)
console.log(chai.Increment())
console.log(chai.PrintMe())
