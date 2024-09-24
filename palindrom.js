const palindrom = function(str) {
  let newstr = "";
  for(let i=str.length-1; i>=0; i--) {
     newstr += str[i]
  }
  if(newstr === str) {
    console.log("string is palindrom")
  }else {
    console.log("string is not palindrom")
  }
}


let str = "SarthakVyas"
palindrom(str)