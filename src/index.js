function osszesIdezet(quotesLista){
    let lista = document.getElementById('osszes_quote');
    lista.innerHTML = "";
    
    for(let felhasznalo of quotesLista){
    let li = document.createElement('li');
    li.textContent = felhasznalo.quote + '(' +  felhasznalo.author + ')';
    lista.appendChild(li);
    };
};


document.addEventListener('DOMContentLoaded', async () =>{
    document.getElementById('osszes_quote_button').addEventListener('click', async () =>{
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();

    let quotesMind = eredmeny.quotes.sort(function(a,b) {
        if (a.author < b.author) {
            return-1;
        };
    });
    osszesIdezet(quotesMind)
    });
});


function The(quotesLista){
    let lista = document.getElementById('idezet');
    lista.innerHTML = "";
   
    for(let idezet of quotesLista){
        
        let  li = document.createElement('li');
        li.textContent = idezet.quote;
        lista.appendChild(li);
    };
};

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('quote_button').addEventListener('click', async () => {
let response = await fetch('/quotes.json');
let eredmeny = await response.json();

let idezetek = eredmeny.quotes;

        The(idezetek)
    });
});



function Hossz(quotesLista){
    let tomb = []; 
    let bekezdes = document.getElementById('bekezdes');
    bekezdes.innerHTML = "";

    for(let idezet of quotesLista){
        tomb.push(idezet.quote.length);   
        bekezdes.textContent = tomb.join(', ')
   };
};

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('hossz_button').addEventListener('click', async () => {
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();

    let idezetekHossz = eredmeny.quotes;

        Hossz(idezetekHossz)
    });
});


function DarabSzam(quotesLista){
    let idezetek_db = 0;
    let szerzoNev = document.getElementById('szerzo_nev').value;
    szerzoNev.innerHTML ="";

    // let szerzokLista = quotesLista.filter(function(quotesLista){
    //     return quotesLista.author == szerzoNev;
    // });
    

    for(let szerzo of quotesLista){
        if (szerzo.author == szerzoNev) {
            idezetek_db++;
        }  
    }
    document.getElementById('idezetek_kiir').textContent = "Összesen " + idezetek_db + " db idézetet írt"
}

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('szerzo_button').addEventListener('click', async () =>{
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();


        let idezetekMind = eredmeny.quotes;
        DarabSzam(idezetekMind);
    });
});



