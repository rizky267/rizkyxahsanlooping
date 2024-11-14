const limitinput=document.getElementById('limit-input');
const startButton=document.getElementById('start-btn');
const evenNumbersDiv=document.getElementById('even-numbers');
const oddNumbersDiv=Document.getElementById('odd-numbers');

startButton.addEventListener('click',()=>{
    const limit=parseInt(limitinput.value);
    //pastikan input adalah positif
    if(isNaN(limit) || limit <= 0){
        alert("Please enter a positive number.");
    }

    //kosongkan tampilan sebelumnya 
    evenNumbersDiv.textContent='even Numbers:';
    oddNumbersDiv.textContent='odd Numbers:';

    for (let i=1; i<=limit; 1++) {
        if(1 % 2 === 0) {
            evenNumbersDiv.textContent+= i + ' ';
        } else {
            oddNumbersDiv.textContent += i +' ';
        }
    }
})
