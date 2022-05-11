const leerlingen = [
    {naam: 'Nemo', leeftijd: '18', geslacht: 'Man'},
    {naam: 'Neme', leeftijd: '16', geslacht: 'Kaas'},
    {naam: 'Nemu', leeftijd: '13', geslacht: 'Man'},
    {naam: 'Nema', leeftijd: '21', geslacht: 'Man'},
    {naam: 'Nemol', leeftijd: '22', geslacht: 'Vrouw'}
]

const target = document.querySelector('.welcome');

leerlingen.map((leerling) => {
      return target.innerHTML += `<p>leerlingen: ${leerling.naam}</p>`;

    }

)

const manAnders = leerlingen.filter((vrouwkaas)=>{
    if(vrouwkaas.geslacht == 'Man' || vrouwkaas.geslacht == 'Man'){
        return vrouwkaas; 
    }
    else {
        return target.innerHTML += `<p>Jij bent een man of anders: ${vrouwkaas.naam}</p>`;

    }

})