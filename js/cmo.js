function ni_limite(){
    return 0.1861 * Math.pow(numero_ocupantes(), -2.205);
}

function Hr_teste(){ 
    return - Math.LN2( 1 - ( ( 1 - ( Math.pow(1 - maximo_risco_infeccao(), 1 / (numero_ocupantes() - 1) ) ) ) / Prevalencia())) / (indice_variante() * 18.6 * 0.288);
}

function indice_variante(){
    let dict = {1: 1, 2: 2, 3: 2.5};
    return dict[variante()];
}

function Hr() {
    value = 0.2;
    if (prevalencia() >= ni_limite()){
        value =  Hr_teste();
    }
    return value;
}

function Nmax(){
    return Hr() * numero_ocupantes() * 18.6 * 0.288;
}

// essa funcao foi apenas colocada para manter compatibilidade
// visual com a excel , deve ser descartada no futuro
function lambda(){
    return taxa_ventilacao_equivalente();
}

function tempo_max_ocupacao(){

}

function H(){
    return;
}



function tabela(){
    for(let x = 0; x < 25; x++){

    }
}

