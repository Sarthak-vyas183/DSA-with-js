//create a function that take a string as input and give logest word in the string if there is multiple word with same length then it return first one

const a = " sarthak vyas is the person who can join the National sarthakj defence army";

const BreakeString = (str) => {
     let logestword = "";
     let index = 0
     if(str.trim().length === 0) return console.log("empty string !") 
    
    const response = str.trim().split(" ");
     response.map((element , idx)=>{
         if(element.length > index) {
            index = element.length
            logestword = element
         }
     }) 
      console.log(logestword[0].toUpperCase)
      console.log(index)
   
}


// Question 2 : Generate Hash of any username  
let username = "sarthak vyas";
let newusername = username.split(" ")

let hash = newusername.map((el , idx)=> {
    el.replace(el[0] , el[0].toUpperCase())
}) 
   
console.log(hash)

