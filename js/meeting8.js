let input =document.querySelector('.name')
let btn =document.querySelector('.my_btn')
let box =document.querySelector('.box')
btn.addEventListener('click' , function(){
    let my_name = input.value
    if(my_name=='reza'||my_name=='ali'){
        let my_alert = `
        <div class="alert alert-success">
            ورودی درست است 
        </div>
        `
        box.innerHTML=my_alert
    }else{
        let my_alert = `
        <div class="alert alert-danger">
            نام وارد شده اشتباه است!!
        </div>
        `
        box.innerHTML=my_alert

        setTimeout(function(){
            box.innerHTML = '';
        } , 3000);
}})