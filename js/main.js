let input = document.getElementById('input73');
let btn = document.getElementById('btn-submit37');
let divRisposta = document.getElementById('risposta');
let div;
let img;
let htmlDiv ='';
let imgSrc='';

let crew = [
    {
        nomeCognome : 'maroc',
        posizione: 'broo',
        eta : 'aa',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nomeCognome : 'maroc',
        posizione: 'broo',
        eta : 'aa',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        nomeCognome : 'maroc',
        posizione: 'broo',
        eta : 'aa',
        img : 'walter-gordon-office-manager.jpg'
    }
];   




for(let member of crew){
    html=member.nomeCognome;
    imgSrc = `../img/${member.img};` 
    div= getElement('div','','','',html,1);
    divRisposta.append(div);   
    img = getElement('img','src',imgSrc,'','',2)
    div.appendChild(img); 
}