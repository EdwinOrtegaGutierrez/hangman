const input = document.querySelector('.form-control');
const lits_letters = [];
// EXTRAER DATOS DEL JSON
let jsonData = {};

fetch('/static/json/words.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        jsonData = data;
    })
    .catch(error => {
        console.error(error);
    });

// VER DATOS
function startGame(){
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const word = jsonData[randomIndex];
    const maskedWord = word.replace(/./g, '_ ');
    document.getElementById("words").innerHTML = maskedWord.trim();
    console.log(word)
}



// MOSTRAR LAS LETRAS QUE INTRODUJO EL USUARIO
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        lits_letters.push(input.value);
        document.getElementById("lits_letters").innerHTML = lits_letters.join(", ");
        input.value = "";
    }
});
