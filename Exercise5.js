// array  and array methods


num = [1,2,4,5,7];

console.log(num)
console.log(num[2])

let b = num.push(8)
console.log(num)

let c =num.shift()
console.log(c,num)


let e = num.unshift(10)
console.log(e,num)


// more example

num= [1,3,4,5,]

num1 =[6,7,8,8,9,]

let newarray= num.concat(num,num1)
console.log(newarray)

// more example


num=[1,2,3,4,5]

num.forEach(element => {
    console.log(element*element)
});

//mapping

let a= num.map((element)=>{
return element+1
})
console.log(element)

//filter
let f= num.filter((element)=>{
    return  element<3
    })
    console.log(element)

   // reduce
    
    let h= num.reduce((h1,h2)=>{
        return  h1 +h2
        })
        console.log(element)