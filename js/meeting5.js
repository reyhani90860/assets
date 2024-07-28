// let scores = [10, 15, 20, 7, 12, 20, 15]
// let count = scores.length
// for(let i=0 ; i<count ; i++ ){

//     console.log(scores[i])
// }


// let sum =0;
// scores.forEach(function(scores){
//     sum = sum + scores;
// })
// console.log(sum)



// for(let i=0 ; i<=10 ; i++)
// console.log(i)


// let x = 0;
// while(x<=10){
//     console.log(x)
//     x++;
// }


// let y = 20;
// do{
//     console.log(y)
//     y++ 
// }while(y<10);



// Start of the first exercise

let avr = [10, 14, 19, 20, 16, 12, 7]

let sum = 0;

avr.forEach(function (avr) {
    sum = sum + avr;
});
console.log(sum / 7)

// end of the first exercise

// Start of the second exercise
let a = 'hasan , ahmad , reza , ehsan , mohamad , ali'

let x = a.replace('reza', 'sara')

console.log(x)
// end of the second exercise

// Start of the third exercise

let e = 'hasan * ahmad * reza * ehsan * mohamad * ali'

let y = e.trim()

console.log(y)

// end of the third exercise

// Start of the third exercise

let names = ['hasan' , 'ahmad' , 'reza' , 'ehsan' , 'mohamad' , 'ali']

let res = names.includes('sara')

if(res){
    console.log ('این اسم وجود دارد')
}else{
    console.log ('!!!این اسم وجود دارند')
}

console.log(res)


// end of the third exercise







