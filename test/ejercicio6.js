(function(){
    "use strict"

    let x = 1 , arr = [], y = 2
    arr.push(x,y)
    let res = []
    arr.forEach((n,i)=>{
        console.log(`El numero en el indice ${i} es : ${n}`);
        res.push(n + 1) 
    })
    console.log(res) // [2,3]
})()