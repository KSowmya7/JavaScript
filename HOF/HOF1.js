let input = "string"
function reverseString(str) {
    let output = ""
    for (var i = str.length-1; i>=0; i--) {
        output+= str[i]
    }
    setTimeout(() => {
    console.log(output);


    },2000)
    return output
}
reverseString(input)    

    
