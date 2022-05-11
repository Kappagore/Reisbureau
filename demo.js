const leerlingen = [
    {naam: 'Nemo', leeftijd: '18', geslacht: 'Man'},
    {naam: 'Neme', leeftijd: '16', geslacht: 'Kaas'},
    {naam: 'Nemu', leeftijd: '13', geslacht: 'Man'},
    {naam: 'Nema', leeftijd: '21', geslacht: 'Man'},
    {naam: 'Nemol', leeftijd: '22', geslacht: 'Vrouw'}
]

const loginForm = document.querySelector('#loginForm');


loginForm.addEventListener('submit', (e) => {
    const usernameField = document.querySelector('#username');
    const passwordField = document.querySelector('#password');

    const usernameArray = usernameField.value.split('');
    console.log(usernameArray); 

    if (usernameField.value == '' || passwordField.value == '') {
        alert('Vul alle velden in'); 
        e.preventDefault();
    }
    else {
        usernameArray.filter((karakter) => {
            if(karakter == '@', '.') {
                alert('Gebruikersnaam mag geen @ of . bevatten');
                e.preventDefault();
            }
            else {
                alert('Gebruikersnaam is correct')
            }
        })
    }
});