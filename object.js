const discreport = Object.getOwnPropertyDescriptors(Math,"PI");
//console.log(discreport)

const discreport2 = Object.getOwnPropertyDescriptor(Math,"floor")
// console.log(discreport2) 


// Object.defineProperty(Math,"SQRT2" , {
//     writable : true,
//     enumerable : true 
// }) 
//console.log(Object.getOwnPropertyDescriptor(Math,"SQRT2"))

const myboj = {
    name : 'sarthak',
    age : 25,
    work : "software engineer",
    city : "bhopal",
    isAvailable : function() {
          return false
    }
}


// for(let element of Object.entries(myboj)) {
//     console.log(element)
// }

for(let [key, value] of Object.entries(myboj)) {
    Object.defineProperty(myboj, key, {
        writable : false,
        enumerable : false,
        configurable : true,
        
    })
}
 console.log(typeof(myboj))
 console.log(Object.getOwnPropertyDescriptor(myboj,"name"))
for(let [key, value] of Object.entries(myboj)) {
    if(typeof value !== 'function') {
        console.log(`${key} ${value}`)
    }
}