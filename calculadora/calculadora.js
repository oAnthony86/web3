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

function createButton(val){
    var botao = document.createElement('input');
    botao.setAttribute('value', val);
    botao.setAttribute('type','button');
    botao.setAttribute('class','col');
    botao.setAttribute('onclick',`input('${val}')`);
    return botao;
}

var clean = document.createElement('input');
clean.setAttribute('value','C');
clean.setAttribute('type','button');
clean.setAttribute('class','col');
clean.addEventListener("click",clear);

var euqal = document.createElement("input");
euqal.setAttribute("id", "equals");
euqal.setAttribute("value", "=");
euqal.setAttribute("type", "button");
euqal.setAttribute("class", "col p-3");
euqal.setAttribute("onclick", "calc()");

var visor = document.createElement('input');
visor.setAttribute('id','result');
visor.setAttribute('type','text');
visor.setAttribute('class','col');
visor.setAttribute('disabled','');
visor.setAttribute('placeholder','0');

var l0 = document.createElement('div');
l0.setAttribute('class','row');
l0.appendChild(visor);

var l1 = document.createElement('div');
l1.setAttribute('class','row');
l1.appendChild(createButton(7));
l1.appendChild(createButton(8));
l1.appendChild(createButton(9));
l1.appendChild(createButton('*'));

var l2 = document.createElement('div');
l2.setAttribute('class','row');
l2.appendChild(createButton(4));
l2.appendChild(createButton(5));
l2.appendChild(createButton(6));
l2.appendChild(createButton('-'));

var l3 = document.createElement('div');
l3.setAttribute('class','row');
l3.appendChild(createButton(1));
l3.appendChild(createButton(2));
l3.appendChild(createButton(3));
l3.appendChild(createButton('+'));

var l4 = document.createElement('div');
l4.setAttribute('class','row');
l4.appendChild(createButton(0));
l4.appendChild(createButton('/'));
l4.appendChild(euqal);
l4.appendChild(clean);

var divc = document.getElementById('container');
divc.setAttribute('class','container');
divc.appendChild(l0);
divc.appendChild(l1);
divc.appendChild(l2);
divc.appendChild(l3);
divc.appendChild(l4);

let result = document.getElementById("result");


function input(v){
    var VI = visor.value;
    visor.value = VI + v;
}

function clear(){
    visor.value='';
}

function calc() {
    if (result.value != "") {
        let result2 = result.value;
        result.value = eval(result2)
    } else {
        alert("Erro, altere os valores!")
    }
}