const Hashgenerator = (str) => {
  if(str.length > 280 || str.trim().length <= 0) return false 
  str = str.split(" ");
  str = str.map((el)=>{
    return  el = el.charAt(0).toUpperCase() + el.slice(1)
  })
 return str = "#"+str.join("")
  
}

const res = Hashgenerator("my name is sarthak vyas")
console.log(res)