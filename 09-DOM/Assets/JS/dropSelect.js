let no=  document.querySelector('#no');/*left side selection options*/
let yes= document.querySelector('#yes');/*right side selection options*/

let addBtn = document.querySelector('#add');
let removeBtn = document.querySelector('#remove');

//domTarget.addEventListener(event, callback function)
addBtn.addEventListener('click',function(e){
    e.preventDefault();
    // alert('add btn clicked');
    let selOpt = document.querySelectorAll('#no option:checked');
    console.log('selected options=',selOpt);

    let exstOpt = document.querySelectorAll('#yes option');
     yes.replaceChildren(...selOpt,...exstOpt);/* array -> parameter*/
});

removeBtn.addEventListener('click',function(e){
    e.preventDefault();
    // alert('add btn clicked');
    let exstOpt = document.querySelectorAll('#yes option:checked');
    console.log('selected options=',exstOpt);
    let selOpt = document.querySelectorAll('#no option');
     no.replaceChildren(...exstOpt,...selOpt);
});