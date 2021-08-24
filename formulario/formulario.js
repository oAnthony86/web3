var stylecss = document.createElement('link');
stylecss.setAttribute('href','https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css');
stylecss.setAttribute('rel','stylesheet');
stylecss.setAttribute('integrity','sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We');
stylecss.setAttribute('crossorigin','anonymous');

var stylejs = document.createElement('script');
stylejs.setAttribute('src','https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js');
stylejs.setAttribute('integrity','sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj');
stylejs.setAttribute('crossorigin','anonymous');

document.head.appendChild(stylecss);
document.head.appendChild(stylejs);

const cSelect = {
    "regioes":[
        {"id":0,"name":"Sul"},
        {"id":1,"name":"Sudeste"},
        {"id":2,"name":"Nordeste"},
        {"id":3,"name":"Norte"},
    ],
    "estados":[
        {"regioes_id":0,"id":0,"name":"Santa Catarina"},
        {"regioes_id":0,"id":1,"name":"Rio Grande do Sul"},
        {"regioes_id":1,"id":2,"name":"São Paulo"},
        {"regioes_id":2,"id":3,"name":"Bahia"},
        {"regioes_id":3,"id":4,"name":"Acre"},
    ],
    "cidades":[
        {"estados_id":0,"id":0,"name":"Rio do Sul"},
        {"estados_id":0,"id":1,"name":"Floripa"},
        {"estados_id":1,"id":2,"name":"Lagoa dos Patos"},
        {"estados_id":2,"id":3,"name":"Campinas"},
        {"estados_id":2,"id":4,"name":"Itu"},
        {"estados_id":3,"id":5,"name":"Salvador"},
        {"estados_id":4,"id":6,"name":"Rio Branco"},
    ]
}

var container = document.getElementById('container');
var titulo = document.createElement('h1');
titulo.innerHTML = 'Cadastre-se Aqui';
titulo.style.textAlign = 'center';
container.appendChild(titulo);

var divStyle = document.createElement('div');
divStyle.setAttribute('class','form-group');
container.appendChild(divStyle);

var formulario = document.createElement('form');
divStyle.appendChild(formulario);


function criaInput(formulario,ty,id,ph){
    var vInput = document.createElement('input');
    vInput.setAttribute('type',ty);
    vInput.setAttribute('id',id);
    vInput.setAttribute('class','form-control')
    vInput.setAttribute('placeholder',ph);

    if(ty == 'date'){
        pulaLinha(formulario);
        var lab = document.createElement('label');
        lab.innerHTML = 'Data de Nascimento';
        formulario.appendChild(lab);
    }

    formulario.appendChild(vInput);

}

function tRadio(formulario,id,nm,vl){
    var rDiv = document.createElement('div');
    rDiv.setAttribute('class','form-check form-check-inline');

    var rInput = document.createElement('input');
    rInput.setAttribute('type','radio');
    rInput.setAttribute('id',nm);
    rInput.setAttribute('class','form-check-input');
    rInput.setAttribute('name',id);
    rInput.setAttribute('value',vl);

    var rLabel = document.createElement('label');
    rLabel.setAttribute('for',nm);
    rLabel.setAttribute('class','form-check-label');
    rLabel.appendChild(document.createTextNode(nm)); // create textnode evita problemas q podem ocorrer usando innerHTML

    formulario.appendChild(rDiv);
    rDiv.appendChild(rInput);
    rDiv.appendChild(rLabel);
}
criaInput(formulario,'text','nome','nome');
pulaLinha(formulario);
criaInput(formulario,'text','rua','rua');
pulaLinha(formulario);
criaInput(formulario,'number','zip','numero');
pulaLinha(formulario);
tRadio(formulario,'country','brasil','brasil');
tRadio(formulario,'country','estrangeiro','estrangeiro');
pulaLinha(formulario);
criaInput(formulario,'date','nascimento','data');

function pulaLinha(formulario){
    var br = document.createElement('br');
    formulario.appendChild(br);
}