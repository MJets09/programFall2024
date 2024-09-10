const changeText = document.getElementById("changeText");

document.getElementById('changeText').addEventListener('click', function() {
    document.getElementById('changeText').textContent = 'KOBEEE'
})

document.getElementById('toggleStyle').addEventListener('click', function() {
    document.getElementById('toggleStyle').classList.add('highlight')
})

document.getElementById('hideElement').addEventListener('click', function(){
    document.getElementById('hideElement').style.display = 'none';
})