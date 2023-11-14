const accesoInput = document.querySelector('.color')

// console.log(input);


accesoInput.addEventListener('input', function(event){

    // console.log(event.target.value);
    document.body.style.backgroundColor = accesoInput.value

})




