let calc_btn =document.querySelector('.my-btn')

calc_btn.addEventListener('click' , calcBmi)

function calcBmi(){
let wight =document.querySelector('.wight').value
let height =document.querySelector('.height').value

console.log(height)
console.log(wight)

    height = height/100;

    let bmi = wight / (height^2)

    let text = '';

    if(bmi<=18.5){
        text = 'کم وزن یا لاغر';
    }else if(bmi>=18.6 || bmi<=24.9){
        text = 'نرمال';
    }else if(bmi>=25 || bmi<=29.9){
        text = 'اضافه وزن';
    }else if(bmi>30){
        text = 'چاق';
    }

    document.querySelector('.res_text').innerHTML = text ;

    console.log(text)
}