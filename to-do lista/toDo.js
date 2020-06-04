// elementi
const dateElement = document.getElementById('date');
const clear = document.querySelector('.refresh');
const list = document.getElementById('lista');
const input = document.getElementById('input');


//današnji datum
const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', options);

//dodaj stavku funkcija
function addToDo(toDo, id, done, trash){

    if(trash) {return;}

    const DONE = done ? LINE_THROUGH : '';
   
    const item = `<li class="stavka">
    <i class="uradjeno" job="complete" id=${id}></i>
    <p class="text">${toDo}</p>
    <i class="obrisiStavku" job="delete" id=${id}></i>
 </li>`;
    const position = 'beforeend';
    list.insertAdjacentHTML(position, item);
}

//dodaj stavku enter 
document.addEventListener('keyup', function(event){
    if(event.keyCode == '13'){
        var toDo = input.value;
        if(toDo){
            addToDo(toDo);
        }
        input.value = '';
    }
});

//obriši



//urađeno



//refresh


