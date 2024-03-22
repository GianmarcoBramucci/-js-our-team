let input = document.getElementById('input73');
let inputGroup= document.getElementById('input-group');
let btnAdd = document.getElementById('btn-submit37');
let btnSub =document.getElementById('btn-submit73');
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
    }, 
    {
        nomeCognome : 'maroc',
        posizione: 'broo',
        eta : 'aa',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        nomeCognome : 'maroc',
        posizione: 'broo',
        eta : 'aa',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        nomeCognome : 'maroc',
        posizione: 'broo',
        eta : 'aa',
        img : 'walter-gordon-office-manager.jpg'
    }
];
inputGroup.classList.add('d-none');   
setup();
btnAdd.addEventListener('click',function(e1){
    let count = 0;
    let newMember = {nomeCognome : '',
    posizione: '',
    eta : '',
    img : ''};
    e1.stopPropagation();
    inputGroup.classList.remove('d-none');
    btnAdd.classList.add('d-none');
    divRisposta.innerHTML='dammi nome e cognome'
    btnSub.addEventListener('click',function(e2){
        
        if(isNaN(input.value) ||((count==3) && !isNaN(input.value))){
            count++;
            if(count== 1){
                newMember.nomeCognome = input.value;
                divRisposta.innerHTML='dammi la tua posizione';
            }
            else if(count== 2){
                newMember.posizione = input.value;
                divRisposta.innerHTML='dammi la tua eta';
            }
            else if(count== 3){
                newMember.eta = input.value;
                divRisposta.innerHTML='dammi l`immagine(si accetano solo formati jpg)';
            }
            else if(count== 4){
                divRisposta.innerHTML='';
                newMember.img = `${input.value}.jpg`;
                crew.push(newMember);
                setup();
                inputGroup.classList.add('d-none');
                btnAdd.classList.remove('d-none');
            }
        }
        e2.stopPropagation();
    });
});

input.addEventListener('click',function(event3){
    event3.stopPropagation();
});


function setup(){
    for(let member of crew){
        html=`Nome e Cognome:${member.nomeCognome}<br> eta':${member.eta} <br> posizione:${member.posizione}`;
        imgSrc = `./img/${member.img}`; 
        div= getElement('div','','','box',html,1);
        divRisposta.append(div);   
        img = getElement('img','src',imgSrc,'','',2);
        div.appendChild(img); 
    }
}