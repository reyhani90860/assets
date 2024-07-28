function avr(Lesson1 , Lesson2 , Lesson3 , Lesson4 , Lesson5){
    let avrg = (Lesson1 + Lesson2 + Lesson3 + Lesson4 + Lesson5)/5
    let result = '---'
    if(avrg<10){
        result = 'شما مردود شده اید!!';
    }else if(avrg>10){
        result = 'شما قبول شده اید ';
    }else if(avrg==10){
        result = 'شما قبول شده اید اما نیاز به تمرین بیشتر دارید !!';
    }
    
    return result;

    console.log(avrg)
}

let x = avr(10 , 12 , 5 , 18 , 9)
console.log(x)