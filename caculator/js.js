let buttonSeven = document.getElementById('button-7')
let buttonEight = document.getElementById('button-8')
let buttonNine = document.getElementById('button-9')


function displayNum(number) {
    var display = document.getElementById('display');
    display.value += number;
    
}

buttonSeven.addEventListener('click', function(){
    displayNum(7)
})

buttonEight.addEventListener('click', function(){
    displayNum(8)
})
buttonNine.addEventListener('click', function(){
    displayNum(9)
})