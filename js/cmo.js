function ni_limite(){
    return 0.1861 * Math.pow(numero_ocupantes, -2.205);
}


function Hr_teste(){ 
    return - Math.LN2( 1 - ( ( 1 - ( Math.pow(1 - maximo_risco_infeccao(), 1 / (numero_ocupantes() - 1) ) ) ) / Prevalencia())) / (indice_variante() * 18.6 * 0.288);
}

function indice_variante(){
    let value1 = variante();
    let dict = {1: 1, 2: 2, 3: 2.5};
    return dict[value1];
}

function variante(){
    return parseInt(document.getElementById("variante").value);
}

function Hr() {
    value = 0.2;
    if (prevalencia() >= ni_limite){
        value =  Hr_teste();
    }
    return value;
}

function Nmax(){
    return Hr() * numero_ocupantes() * 18.6 * 0.288;
}

function H(){
    return;
}

function lambda(){
    return;
}
