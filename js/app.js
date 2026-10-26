let jogBtn = document.querySelector('.counter .jog')
let biogBtn = document.querySelector('.counter .biog')
let input = document.querySelector('.counter input')

jogBtn.addEventListener('click', ()=>{
    input.value = (Number(input.value)+1)
    
})

    

biogBtn.addEventListener('click', ()=>{
    if (input.value > 1) {
         input.value = (Number(input.value)-1)
    }
   
    
})
    
