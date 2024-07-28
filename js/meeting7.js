let p1 =document.querySelector('.p1')

let table = document.createElement('ul')



for(let i=1 ; i<=3 ; i++){
    let item = document.createElement('li')
    item.textContent='item' + i
    table.append(item)
}
p1.after(table)

console.log(table)


