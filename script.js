const evento = document.getElementById('send')
const sendForm =() => {
        let name = document.getElementById('nombres').value;
        let lastName = document.getElementById('apellidos').value;
        let Message = document.getElementById('mensaje').value;
        let Number= 595971488547;
var win= window.open(`https://wa.me/${Number}?text=Hola%20mi%20nombre%20es%20${name}
%20${lastName}, Asunto:%20${Message}`,'_blank');       
}
evento.addEventListener('click', sendForm)