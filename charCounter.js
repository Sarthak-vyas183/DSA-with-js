const counter = (str,char) => {
    if(str.length < 1 || str.trim().length < 1 ) return false
    let count = 0;
    str = str.split("")
    str.forEach(el => {
        if(el == char) count++;
    }); 
    return count
}

let res = counter("SssSSs", 's');
if(!res) return console.log("Invalid Input")
    console.log(res)